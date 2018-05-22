var ctx = document.getElementById("qtde_tipo_acidente_veiculo").getContext('2d');
var qtde_dia = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["PEDESTRE", "OUTROS", "MOTOCICLETA", "CAMINHAO", "ONIBUS", "AUTOMOVEL", "BICICLETA"],
        datasets: [{
            label: 'Não Disponível',
            data: [0, 0, 172, 5, 1, 33, 15],
            backgroundColor: 'rgba(140, 51, 147, 1)',
            borderWidth: 1
        }, {
            label: 'Choque',
            data: [2, 1, 371, 27, 0, 337, 11],
            backgroundColor: 'rgba(59, 132, 205, 1)',
            borderWidth: 1
        }, {
            label: 'Atropelamento',
            data: [1591, 0, 45, 1, 0, 15, 4],
            backgroundColor: 'rgba(255, 159, 22, 1)',
            borderWidth: 1
        }, {
            label: 'Colisão',
            data: [0, 7, 1015, 71, 30, 695, 256],
            backgroundColor: 'rgba(101, 175, 71, 1)',
            borderWidth: 1
        }, {
            label: 'Outros',
            data: [3, 10, 297, 69, 20, 255, 73],
            backgroundColor: 'rgba(255, 31, 37, 1)',
            borderWidth: 1
        }]
    },
    options: {
        fill: false,
        plugins: {
            stacked100: {
                enable: true
            },
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
        },
    }
});