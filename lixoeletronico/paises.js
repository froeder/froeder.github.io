google.charts.load('current', {
    'packages': ['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Mt'],
        ['China', 7.2],
        ['United States', 6.3],
        ['Japan', 2.1],
        ['India', 2.1],
        ['Germany', 1.9],
        ['Brazil', 1.5],
        ['Russia', 1.4],
        ['France', 1.4],
        ['Indonesia', 1.3],
        ['Italy', 1.2]

    ]);

    var options = {
        backgroundColor: '#b7f2f5',
        colorAxis: {colors: ['#7FA56C', '#e31b23']},
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
}