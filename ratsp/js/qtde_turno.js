var ctx = document.getElementById("qtde_turno").getContext('2d');
var qtde_dia = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["NÃO DISPONÍVEL", "MANHA", "TARDE", "NOITE", "MADRUGADA"],
        datasets: [{
            label: 'Quantidade de acidentes',
            data: [450, 1006, 1125, 1920, 1144],
            backgroundColor: '#FFCA28',
            borderColor: '#FFCA28',
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            datalabels: {
                color: 'white',
                font: {
                    weight: 'bold',
                    size: 20
                },
            },
            deferred: {
                xOffset: 50, // defer until 150px of the canvas width are inside the viewport
                yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
                delay: 300 // delay of 500 ms after the canvas is considered inside the viewport
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});