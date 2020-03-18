let ctx2 = document.getElementById("myChart").getContext("2d");
let chartColors = ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"];
let chart = new Chart(ctx2, {
  // The type of chart we want to create
  type: "horizontalBar",

  // The data for our dataset
  data: {
    labels: ["HTML", "CSS", "Javascript", "Photoshop", "React"],
    datasets: [
      {
        backgroundColor: chartColors,
        borderColor: "rgba(255,255,255,0.3)",
        data: [80, 75, 75, 80, 25]
      }
    ]
  },

  // Configuration options go here
  options: {
    legend: { display: false },
    responsive: true
  }
});
