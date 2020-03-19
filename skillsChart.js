let ctx2 = document.getElementById("myChart").getContext("2d");
//let chartColors = ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"];
let chartColors = [
  "#37c866",
  "#2da276",
  "#2c8d7a",
  "#2b9787",
  "#2b736a",
  "#25635b",
  "#234156"
];
let data = [95, 85, 80, 75, 73, 70, 35];
data = data.sort(function(a, b) {
  return b - a;
});

let chart = new Chart(ctx2, {
  // The type of chart we want to create
  type: "bar",

  // The data for our dataset
  data: {
    labels: [
      "HTML",
      "Photoshop",
      "CSS",
      "Javascript",
      "C#",
      "Electron",
      "React"
    ],
    datasets: [
      {
        order: 0,
        barPercentage: 0.5,
        barThickness: 75,
        maxBarThickness: 200,
        minBarLength: 5,
        backgroundColor: chartColors,
        borderColor: "lightgray",
        borderWidth: "3",
        borderSkipped: "bottom",
        data: data
      }
    ]
  },

  // Configuration options go here
  options: {
    tooltips: {
      enabled: false
    },
    legend: { display: false },
    scales: {
      yAxes: [
        {
          ticks: {
            display: false,
            min: 0,
            max: 100
          }
        }
      ],
      xAxes: [
        {
          ticks: {
            fontFamily: "Cabin",
            fontColor: "gray",
            fontSize: "24"
          },
          gridLines: {
            display: false
          }
        }
      ]
    }
  }
});
