new Chart(document.getElementById('qtde_mes_dia'), {
    type: 'bar',
    data: {
        labels: ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO",
            "OUTUBRO", "NOVEMBRO", "DEZEMBRO"
        ],
        datasets: [{
            label: "Sábado",
            data: [60, 92, 85, 91, 103, 79, 135, 83, 120, 64, 77, 116],
            backgroundColor: "rgba(179, 126, 0, 1)"
        }, {
            label: "Sexta-feira",
            data: [50, 54, 76, 61, 81, 80, 75, 49, 64, 82, 45, 73],
            backgroundColor: "rgba(204, 151, 0, 1)"
        }, {
            label: "Quinta-feira",
            data: [42, 45, 67, 51, 57, 69, 47, 54, 70, 81, 60, 58],
            backgroundColor: "rgba(230, 177, 15, 1)"
        }, {
            label: "Quarta-feira",
            data: [43, 46, 52, 54, 50, 56, 54, 60, 41, 56, 48, 64],
            backgroundColor: "rgba(255, 202, 40, 1)"
        }, {
            label: "Terça-feira",
            data: [51, 44, 43, 51, 52, 43, 57, 55, 44, 52, 50, 47],
            backgroundColor: "rgba(255, 255, 126, 1)"
        }, {
            label: "Segunda-eira",
            data: [50, 43, 57, 46, 61, 57, 67, 50, 54, 60, 48, 67],
            backgroundColor: "rgba(255, 255, 169, 1)"
        }, {
            label: "Domingo",
            data: [113, 92, 93, 97, 114, 103, 136, 80, 80, 95, 75, 98],
            backgroundColor: "rgba(255, 255, 212, 1)"
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
            reverse: true
        }
    }
});