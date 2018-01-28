var ctx = document.getElementById("qtde_regiao").getContext('2d');
var qtde_dia = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["Araçatuba",
            "Baixada Santista",
            "Barretos",
            "Bauru",
            "Campinas",
            "Central",
            "Franca",
            "Itapeva",
            "Marília",
            "Metropolitana de São Paulo",
            "Presidente Prudente",
            "Registro",
            "Ribeirão Preto",
            "São José do Rio Preto",
            "São José dos Campos",
            "Sorocaba"
        ],
        datasets: [{
            label: 'Quantidade de acidentes',
            data: [119,
                263,
                91,
                151,
                1036,
                147,
                125,
                98,
                195,
                1774,
                146,
                100,
                217,
                328,
                370,
                485
            ],
            backgroundColor: '#FFCA28',
            borderColor: '#FFCA28',
            borderWidth: 1
        }]
    },
    options: {
        orientation: 'horizontal',
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