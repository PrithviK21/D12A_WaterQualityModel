var endpoint = "http://127.0.0.1:8000/api";

$.ajax({
  method: "GET",
  url: endpoint,
  success: function (data) {
    drawLineGraph(data, "graphplaceholder");
    //console.log("drawing");
  },
  error: function (error_data) {
    //console.log(error_data);
  },
});

function drawLineGraph(data, id) {
  //console.log(data.x);
  // var trace1 = data.trace1;

  // var data = trace1;

  var trace1 = {
    x: data.x,
    y: data.y,
    type: data.type,
  };

  var d = [trace1];

  var layout = {
    width: 1000,
    height: 800,
  };

  Plotly.newPlot(id, d, layout);
}
