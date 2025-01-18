var ctx = document.getElementById("qtde_genero_masc_dia").getContext('2d');

var qtde_dia = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["DOMINGO", "SEGUNDA-FEIRA", "TERÇA-FEIRA", "QUARTA-FEIRA", "QUINTA-FEIRA", "SEXTA-FEIRA", "SÁBADO"],
        datasets: [{
            data: [980, 520, 471, 508, 564, 654, 903],
            backgroundColor: ["#BEFFFF", "#9EF1FF", "#7ED1FF", "#5DB0FF", "#3D90F9", "#2174DD", "#0659C2"]

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