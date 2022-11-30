'use strict';
const {spawn} = require('child_process');
const which = require('which');

exports.run = function (command) {
  return new Promise((resolve, reject) => {
    which(command.cmd, (err, cmdpath) => {
      if (err) {
        return reject(new Error(`Can't install! "${command.cmd}" doesn't seem to be installed.`));
      }
      const cmd = spawn(quoteIfNecessary(cmdpath), command.args, {shell: true, stdio: 'inherit', cwd: command.cwd || process.cwd()});
      cmd.on('close', code => {
        if (code !== 0) {
          return reject(new Error(`"${command.cmd}" exited with non-zero code ${code}`));
        }
        resolve();
      });
    });
  });
};

function quoteIfNecessary(command) {
  return /\s+/.test(command) ? `"${command}"` : command;
}
