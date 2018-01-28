var ctx = document.getElementById("qtde_tipo_vitima").getContext('2d');
var qtde_dia = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ["NAO DISPONIVEL", "CONDUTOR", "PEDESTRE", "PASSAGEIRO"],
        datasets: [{
            label: 'Quantidade de acidentes',
            data: [384, 2944, 1596, 721],
            backgroundColor: ['#63AE45', '#3E5DAA', '#F2EC39', '#EF5725'],
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