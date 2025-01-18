var ctx = document.getElementById("qtde_tipo_acidente_via").getContext('2d');
var qtde_dia = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ["NAO DISPONIVEL", "CHOQUE", "ATROPELAMENTO", "COLISAO", "OUTROS"],
        datasets: [{
            label: 'Rodovias',
            data: [96, 243, 631, 1163, 312],
            backgroundColor: 'rgba(24, 146, 205, 0.5)',
            borderColor: 'black',
            borderWidth: 1
        }, {
            label: 'Vias Municipais',
            data: [140, 496, 904, 889, 353],
            backgroundColor: 'rgba(255, 159, 22, 0.5)',
            borderColor: 'black',
            borderWidth: 1
        }, {
            label: 'Não Disponíveis',
            data: [170, 20, 123, 40, 65],
            backgroundColor: 'rgba(140, 51, 147, 0.5)',
            borderColor: 'black',
            borderWidth: 1
        }]
    },
    options: {
        fill: false,
        plugins: {
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

        }
    }
});