'use strict';
const fancyLog = require('fancy-log');
const PluginError = require('plugin-error');
const through = require('through2');
const applySourceMap = require('vinyl-sourcemaps-apply');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');

module.exports = options => {
	return through.obj((file, encoding, callback) => {
		if (file.isNull()) {
			callback(null, file);
			return;
		}

		if (file.isStream()) {
			callback(new PluginError('gulp-autoprefixer', 'Streaming not supported'));
			return;
		}

		(async () => {
			try {
				const result = await postcss(autoprefixer(options)).process(file.contents.toString(), {
					map: file.sourceMap ? {annotation: false} : false,
					from: file.path,
					to: file.path
				});

				file.contents = Buffer.from(result.css);

				if (result.map && file.sourceMap) {
					const map = result.map.toJSON();
					map.file = file.relative;
					map.sources = map.sources.map(() => file.relative);
					applySourceMap(file, map);
				}

				const warnings = result.warnings();

				if (warnings.length > 0) {
					fancyLog('gulp-autoprefixer:', '\n  ' + warnings.join('\n  '));
				}

				setImmediate(callback, null, file);
			} catch (error) {
				const cssError = error.name === 'CssSyntaxError';

				if (cssError) {
					error.message += error.showSourceCode();
				}

				// Prevent stream unhandled exception from being suppressed by Promise
				setImmediate(callback, new PluginError('gulp-autoprefixer', error, {
					fileName: file.path,
					showStack: !cssError
				}));
			}
		})();
	});
};
