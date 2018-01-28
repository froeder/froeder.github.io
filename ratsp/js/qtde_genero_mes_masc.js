var ctx = document.getElementById("qtde_genero_mes_masc").getContext('2d');

var qtde_dia = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO",
            "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"
        ],
        datasets: [{
            data: [327, 327, 383, 363, 422, 389, 484, 353, 379, 401, 338, 434],
            backgroundColor: ["#BEFFFF", "#9EF1FF", "#7ED1FF", "#5DB0FF", "#3D90F9", "#2174DD", "#0659C2", "#003DA6", "#00218A", "#00066F", "#000053", "#000037"]

        }],
    },
    options: {
        cutoutPercentage: 50,
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