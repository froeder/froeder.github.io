var ctx = document.getElementById("qtde_faixa_etaria_masc").getContext('2d');
var qtde_mes = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["0-17", "18-24", "25-29", "30-34", "35-39", "40-44", "45-49", "50-54", "55-59", "60-64",
            "65-69", "70-74", "75-79", "80 ou mais", "NAO DISPONIVEL",
        ],
        datasets: [{
            label: 'Feminino',
            data: [88, 139, 80, 80, 79, 58, 57, 76, 50, 53, 72, 40, 46, 69, 34],
            backgroundColor: 'rgb(245, 10, 174 )',
            borderColor: '#ACA8AD',
            borderWidth: 1
        }, {
            label: 'Masculino',
            data: [201, 754, 514, 448, 426, 384, 380, 337, 265, 220, 172, 105, 117, 96, 181],
            backgroundColor: 'rgba(22, 156, 245, 0.8)',
            borderColor: '#ACA8AD',
            borderWidth: 1,
        }]
    },
    options: {
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