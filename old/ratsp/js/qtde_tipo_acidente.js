var ctx = document.getElementById("qtde_tipo_acidente").getContext('2d');
var qtde_dia = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ["NAO DISPONIVEL", "CHOQUE", "ATROPELAMENTO", "COLISAO", "OUTROS"],
        datasets: [{
            label: 'Quantidade de acidentes',
            data: [406, 759, 1658, 2092, 730],
            backgroundColor: ['#7D3693', '#1892CD', '#F2EC39', '#F89A22', '#EC3425'],
            borderWidth: 1
        }]
    },
    options: {
        fill: false,
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