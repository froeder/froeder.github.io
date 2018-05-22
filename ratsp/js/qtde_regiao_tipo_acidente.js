new Chart(document.getElementById('qtde_regiao_tipo_acidente'), {
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
            label: "Não Disponível",
            data: [9, 17, 6, 9, 87, 9, 6, 10, 8, 115, 7, 12, 12, 27, 27, 45],
            backgroundColor: "rgba(179, 126, 0, 1)"
        }, {
            label: "Choque",
            data: [11, 32, 11, 22, 160, 26, 21, 8, 21, 263, 13, 10, 21, 43, 41, 56],
            backgroundColor: "rgba(204, 151, 0, 1)"
        }, {
            label: "Atropelamento",
            data: [18, 84, 10, 30, 270, 23, 33, 12, 30, 741, 31, 34, 49, 55, 113, 125],
            backgroundColor: "rgba(230, 177, 15, 1)"
        }, {
            label: "Colisão",
            data: [57, 106, 51, 66, 383, 65, 49, 52, 103, 494, 75, 22, 96, 155, 121, 197],
            backgroundColor: "rgba(255, 202, 40, 1)"
        }, {
            label: "Outros",
            data: [24, 24, 13, 24, 136, 24, 16, 16, 33, 161, 20, 22, 39, 48, 68, 62],
            backgroundColor: "rgba(255, 255, 126, 1)"
        }]
    },
    options: {
        plugins: {
            stacked100: {
                enable: true
            },
            datalabels: {
                color: 'black',
                font: {
                    size: 20
                },
            },
            deferred: {
                xOffset: 50, // defer until 150px of the canvas width are inside the viewport
                yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
                delay: 300 // delay of 500 ms after the canvas is considered inside the viewport
            }

        },
        legend: {
            reverse: false
        }

    }
});