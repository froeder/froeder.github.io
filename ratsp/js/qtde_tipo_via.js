var ctx = document.getElementById("qtde_tipo_via").getContext('2d');
var qtde_dia = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ["Rodovias", "Vias Municipais", "Não Disponível", ],
        datasets: [{
            label: 'Quantidade de acidentes',
            data: [2445, 2782, 418],
            backgroundColor: ['#F89A22', '#63AE45', '#F2EC39'],
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