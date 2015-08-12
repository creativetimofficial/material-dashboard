function initMorphingButtons(){
     //   simulate morphing buttons for demo purpose
    
    $('#successBtn').click(function(){
       var $button = $(this);
                 
        // simulate a Success Ajax call for 2 seconds         
        setTimeout(function(){
            $button.morphingButton({
                action: 'setState',
                icon: 'fa-check',
                state: 'success'
            });        
        }, 2000);
    });
    
     $('#errorBtn').click(function(){
        var $button = $(this);
        
        // simulate a Error Ajax call for 2 seconds          
        setTimeout(function(){
            $button.morphingButton({
                action: 'setState',
                icon: 'fa-times',
                state: 'error'
            });        
        }, 2000);
    });
    
    $('#starBtn').click(function(){
        var $button = $(this);
    
        $button.morphingButton({
            action: 'setState',
            icon: 'fa-star',
            state: 'warning'
        });        
     
    });
    
    $('#thumbBtn').click(function(){
        var $button = $(this);
        setTimeout(function(){
            $button.morphingButton({
                action: 'setState',
                icon: 'fa-thumbs-up',
                state: 'info'
            });        
        }, 2000);
    });
}

function initDemoChartist(){
    var dataPerformance = {
      labels: ['9pm', '2am', '8am', '2pm', '8pm'],
      series: [
        [1, 6, 8, 7, 4, 7, 8, 12, 16, 17, 14, 13]
      ]
    };
    
    var optionsPerformance = {
      showPoint: false,
      lineSmooth: true,
      axisX: {
        showGrid: false,
        showLabel: true
      },
      axisY: {
        offset: 40,
      },
      low: 0,
      high: 20
    };

    //Chartist.Line('#chartPerformance', dataPerformance, optionsPerformance);
    
    var dataStock = {
      labels: ['2009', '2010', '2011', '2012', '2013', '2014'],
      series: [
        [22.20, 28.16, 34.90, 42.28, 47.26, 48.89, 51.93, 55.32, 59.21, 62.21, 75.50, 80.23, 60.32, 55.03, 62.21, 78.83, 82.12, 89.21, 102.50, 107.23]
      ]
    };
    
    var optionsStock = {
      lineSmooth: false,
      axisY: {
        offset: 40,
        labelInterpolationFnc: function(value) {
            return '$' + value;
          }

      },
      low: 10,
      high: 110,
       classNames: {
          point: 'ct-point ct-green',
          line: 'ct-line ct-green'
      }
    };
     
    var $chart = $('#chartStock');
    
    //Chartist.Line('#chartStock', dataStock, optionsStock);     
    
    var dataSales = {
      labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
      series: [
        [0, 285, 120, 90, 70, 54, 44, 32, 22, 11, 4, 2, 2],
        [0, 100, 48, 40, 28, 23, 15, 10, 6, 3, 1, 1, 0],
      ]
    };
    
    var optionsSales = {
      lineSmooth: false,
      low: 0,
      high: 400,
      showArea: true,
      height: "245px",
      axisX: {
        showGrid: false
      }
    };

    Chartist.Line('#chartHours', dataSales, optionsSales);
    

    var data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
        [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
        [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
      ]
    };
    
    var options = {
        seriesBarDistance: 10,
        axisX: {
            showGrid: false
        },
        height: "245px"
    };
    
    var responsiveOptions = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];
    
    Chartist.Bar('#chartActivity', data, options, responsiveOptions);

    var dataViews = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
        [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
      ]
    };
    
    var optionsViews = {
      seriesBarDistance: 10,
      classNames: {
        bar: 'ct-bar ct-azure'
      },
      axisX: {
        showGrid: false
      }
    };
    
    var responsiveOptionsViews = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];
    
    //Chartist.Bar('#chartViews', dataViews, optionsViews, responsiveOptionsViews);

    var dataPreferences = {
        series: [
            [25, 30, 20, 25]
        ]
    };
    
    var optionsPreferences = {
        donut: true,
        donutWidth: 40,
        startAngle: 0,
        total: 100,
        showLabel: false,
        axisX: {
            showGrid: false
        }
    };

    Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);
    
    Chartist.Pie('#chartPreferences', {
      labels: ['62%','32%','6%'],
      series: [62, 32, 6]
    });
    
    
}


function initGoogleMaps(){
    var myLatlng = new google.maps.LatLng(44.433530, 26.093928);
    var mapOptions = {
      zoom: 14,
      center: myLatlng,
      scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
    var marker = new google.maps.Marker({
        position: myLatlng,
        title:"Hello World!"
    });
    
    // To add the marker to the map, call setMap();
    marker.setMap(map);
}

