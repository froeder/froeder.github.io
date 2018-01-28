var ctx = document.getElementById("qtde_mes").getContext('2d');
var qtde_mes = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO",
            "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"
        ],
        datasets: [{
            label: 'Quantidade de acidentes',
            data: [409, 416, 473, 451, 518, 487, 571, 431, 473, 490, 403, 523],
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
            },
            deferred: {
                xOffset: 50, // defer until 150px of the canvas width are inside the viewport
                yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
                delay: 300 // delay of 500 ms after the canvas is considered inside the viewport
            }

        }
    }
});