var ctx = document.getElementById("qtde_genero").getContext('2d');
var qtde_dia = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
            "Masculino", "Feminino", "Não Disponível"
        ],
        datasets: [{
            data: [4600, 1021, 24],
            backgroundColor: ['#1EA6F7', '#DA164B', 'grey '],
        }],
    },
    options: {
        cutoutPercentage: 50,
        plugins: {
            datalabels: {
                color: 'white',
                font: {
                    weight: 'bold',
                    size: 40
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