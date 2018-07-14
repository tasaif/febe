$(function(){
	var ctx = document.getElementById("myChart").getContext('2d');
	window.chart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["label1", "label2", "label3"],
			datasets: [{ 
					data: [
          {
            x: 0,
            y: 0
          },
          {
            x: 1,
            y: 1
          },
          {
            x: 0.5,
            y: 0.5
          }
          ],
					label: "User Supplied Data",
					borderColor: "#3e95cd",
					fill: false
				}
			]
		},
		options: {
			title: {
				display: true,
				text: 'Line Graph'
			},
			scales: {
				 yAxes: [{
						ticks: {
							 min: 0,
							 max: 10
						}
				 }]
			}
		}
	});
  function update_chart(){
    var dataset = window.chart.data.datasets[0];
    while(dataset.data.length > 0){
      dataset.data.pop();
    }
    $(".datapoint").each(function(index){
      var $this = $(this);
      var x = parseFloat($this.find(".x").val());
      var y = parseFloat($this.find(".y").val());
      dataset.data.push({
        x: x,
        y: y
      });
      console.log("[" + index + "] x: " + x + ", y: " + y);
    });
    window.chart.update();
  }
  $("input[type='text']").on("change", function(){
    update_chart();
  });
});
