const sampleData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'ALLOWANCE RECEIVED',
      data: [2000, 2500, 3000, 2000, 2000, 3500,],
      backgroundColor: 'rgba(145, 222, 255)',
      borderColor: 'rgba(63, 188, 242)',
      borderWidth: 1
    }]
  };
  const ctx = document.getElementById('myscript').getContext('2d');
  let currentChart;
  function renderChart(type) {
    if (currentChart) {
      currentChart.destroy();
    }
    currentChart = new Chart(ctx, {
      type: type,
      data: sampleData,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  function changeChartType(type) {
    renderChart(type);
  }
  
   // Function to create and justify the chart
   function createJustifiedChart() {
    // Create a chart element (for demonstration purposes, assuming canvas)
    var chartCanvas = document.createElement('canvas');
    chartCanvas.id = 'myChart';
    // Append the chart element to the container
    document.getElementById('chart-container').appendChild(chartCanvas);

    // Get the chart container
    var container = document.getElementById('chart-container');
    // Justify the chart by setting its CSS styles
    container.style.display = 'flex';
    container.style.justifyContent = 'space-between'; // Justify items with space between
  }
