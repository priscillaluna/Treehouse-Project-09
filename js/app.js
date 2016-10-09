
// close alert when the x is clicked

$(".alert a").click(function(){
  $(this).parent().fadeOut();
  return false;
});

// get traffic chart

var ctg = document.getElementById("traffic-chart");

// chart global settings

Chart.defaults.global.defaultFontColor = '#000';
Chart.defaults.global.defaultFontFamily = "'Dosis', sans-serif";
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontStyle = 200;
Chart.defaults.global.legend.display = false;

// build traffic chart

var trafficChart = new Chart(ctg, {
  type: 'line',
  data: {
      labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
      datasets: [{
          data: [1000, 2000, 1500, 3000, 3500, 5000, 2000, 2500, 4500, 2000, 1000, 2000],
          backgroundColor: '#fcbfb8',
          borderColor: 'rgb(250, 128, 114)',
          fill: true,
          borderWidth: 2,
          pointBackgroundColor: '#fff',
          pointBorderColor: 'rgb(236, 112, 99)',
          pointRadius: 5,
          lineTension: 0,
          pointHoverRadius: 6

      }]
  },
  options: {
      scales: {
          yAxes: [{
              type: 'linear',
              ticks: {
                  max: 5000,
                  min: 1000,
                  stepSize: 1000
              },
              gridLines: {
                color: "lightgrey"
              }
          }],
          xAxes: [{
            gridLines: {
              color: "lightgrey"
            }
          }]
      }
  }
});

// get daily chart

var ctd = document.getElementById("daily-chart");

// build daily chart

var myBarChart = new Chart(ctd, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
                data: [50, 125, 75, 200, 150, 225, 100],
                backgroundColor: "#fdd8d4",
                borderWidth: 0
            }]
          },
    options: {
      maintainAspectRatio: false,
      scales: {
        yAxes:[{
          type: 'linear',
          ticks: {
            stepSize: 50,
            max: 250,
            min: 0
          },
          gridLines: {
            color: "lightgrey"
          }
        }],
        xAxes:[{
          gridLines: {
            color: "lightgrey"
          }
        }]
      }
    }
});

// get mobile chart

var ctm = document.getElementById("mobile-chart");

// build mobile chart

var myDoughnutChart = new Chart(ctm, {
    type: 'doughnut',
    data: {
        labels: ["Phones", "Tablets", "Desktop"],
        datasets: [{
                data: [200, 80, 150],
                backgroundColor: ["#5c9e91","#bdd8d3","#deebe9"],
                hoverBackgroundColor: ["#5c9e91","#bdd8d3","#deebe9"]
            }]
          },
          options: {
            maintainAspectRatio: false,
          legend: {
            display: true,
            position: "right",
            labels: {
              boxWidth: 30,
              fontSize: 18,
              padding: 30
        }
    }
  }
});


// message user

$('#send-button').click(function(event){
    event.preventDefault(event);
    if($.trim($('#user-message').val()) === '' || $.trim($('#name-search').val()) === ''){
        $("#message-alert");
        $("#message-alert").html('Oops! You forgot something!')
             .fadeIn()
             .delay(1500)
             .fadeOut();
   } else {

    // message - fade in and out

        $("#message-alert");
        $("#message-alert").html('Message sent!')
            .fadeIn()
            .delay(1500)
            .fadeOut();

        // clear the textfields

        $('#name-search').val('');
        $('#user-message').val('');
   }
});
