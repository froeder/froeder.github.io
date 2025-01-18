var ctx = document.getElementById("qtde_genero_turno_fem").getContext('2d');

var qtde_dia = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["NAO DISPONIVEL", "MANHA", "TARDE", "NOITE", "MADRUGADA"],
        datasets: [{
            data: [67, 239, 227, 320, 168],
            backgroundColor: ["#FF9FAB", "#FF8793", "#FF6F7B", "#FF5763", "#F23F4B"]
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