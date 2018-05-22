var ctx = document.getElementById("qtde_tipo_acidente_vitima").getContext('2d');
var qtde_dia = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["NAO DISPONIVEL", "CHOQUE", "ATROPELAMENTO", "COLISAO", "OUTROS"],
        datasets: [{
            label: 'Condutor',
            data: [581, 154, 52, 1630, 527],
            backgroundColor: '#EF5725',
            borderWidth: 1
        }, {
            label: 'Pedestre',
            data: [0, 0, 1591, 2, 3],
            backgroundColor: '#1892CD',
            borderWidth: 1
        }, {
            label: 'Passageiro',
            data: [19, 145, 11, 377, 169],
            backgroundColor: '#7D3693',
            borderWidth: 1
        }]
    },
    options: {
        fill: false,
        plugins: {
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

        }
    }
});