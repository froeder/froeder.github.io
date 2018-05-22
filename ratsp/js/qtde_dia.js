var ctx = document.getElementById("qtde_dia").getContext('2d');
var qtde_dia = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
            "DOMINGO", "SEGUNDA-FEIRA", "TERÇA-FEIRA", "QUARTA-FEIRA", "QUINTA-FEIRA", "SEXTA-FEIRA", "SÁBADO"
        ],
        datasets: [{
            label: 'Quantidade de acidentes',
            data: [1176, 660, 589, 624, 701, 790, 1105],
            backgroundColor: '#FFCA28',
            borderColor: '#FFCA28',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        plugins: {
            datalabels: {
                color: 'white',
                font: {
                    weight: 'bold',
                    size: 20
                },
                deferred: {
                    xOffset: 50, // defer until 150px of the canvas width are inside the viewport
                    yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
                    delay: 300 // delay of 500 ms after the canvas is considered inside the viewport
                }
            }

        }
    }
});