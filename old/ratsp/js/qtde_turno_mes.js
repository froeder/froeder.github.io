new Chart(document.getElementById('qtde_turno_mes'), {
    type: 'bar',
    data: {
        labels: ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO",
            "OUTUBRO", "NOVEMBRO", "DEZEMBRO"
        ],
        datasets: [{
            label: "Não Disponível",
            data: [36, 135, 178, 134, 106, 46, 213, 79, 109, 91, 79, 80],
            backgroundColor: "rgba(179, 126, 0, 1)"
        }, {
            label: "Manhã",
            data: [72, 31, 36, 103, 43, 93, 27, 72, 35, 43, 86, 106],
            backgroundColor: "rgba(204, 151, 0, 1)"
        }, {
            label: "Tarde",
            data: [133, 84, 77, 36, 205, 161, 117, 32, 148, 167, 93, 49],
            backgroundColor: "rgba(230, 177, 15, 1)"
        }, {
            label: "Noite",
            data: [81, 85, 100, 107, 77, 102, 111, 83, 77, 94, 36, 116],
            backgroundColor: "rgba(255, 202, 40, 1)"
        }, {
            label: "Madrugada",
            data: [87, 81, 82, 71, 87, 85, 103, 165, 104, 95, 109, 172],
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
        legend: {
            reverse: false
        }
    }
});