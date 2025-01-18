var ctx = document.getElementById("qtde_tipo_vitima_genero").getContext('2d');
var qtde_dia = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["NAO DISPONIVEL", "CONDUTOR", "PEDESTRE", "PASSAGEIRO"],
        datasets: [{
            label: 'FEININO',
            data: [57, 189, 407, 368],
            backgroundColor: '#F23F4B',
            borderWidth: 1
        }, {
            label: 'MASCULINO',
            data: [326, 2741, 1181, 352],
            backgroundColor: '#3D90F9',
            borderWidth: 1
        }]
    },
    options: {
        fill: false,
        plugins: {
            datalabels: {
                backgroundColor: 'rgba(204, 204, 199, 0.8)',
                borderColor: 'grey',
                borderWidth: 0.3,
                borderRadius: 40,
                color: 'black',
                font: {
                    weight: 'bold',
                    size: 15
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