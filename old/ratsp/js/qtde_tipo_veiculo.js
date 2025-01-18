var ctx = document.getElementById("qtde_tipo_veiculo").getContext('2d');
var qtde_dia = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ["NAO DISPONIVEL", "PEDESTRE", "OUTROS", "MOTOCICLETA", "CAMINHAO", "ONIBUS", "AUTOMOVEL", "BICICLETA"],
        datasets: [{
            label: 'Quantidade de acidentes',
            data: [213, 1596, 18, 1900, 173, 51, 1335, 359],
            backgroundColor: ['#7D3693', '#3E5DAA', '#63AE45', '#F2EC39', '#F89A22', '#EF5725', '#A61D4C', '#CEDD38'],
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