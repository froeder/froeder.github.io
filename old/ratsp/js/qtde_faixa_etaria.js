var ctx = document.getElementById("qtde_faixa_etaria").getContext('2d');
var qtde_mes = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["0-17", "18-24", "25-29", "30-34", "35-39", "40-44", "45-49", "50-54", "55-59", "60-64",
            "65-69", "70-74", "75-79", "80 ou mais", "NAO DISPONIVEL",
        ],
        datasets: [{
            label: 'Quantidade de acidentes',
            data: [289, 896, 597, 530, 507, 443, 439, 414, 315, 274, 244, 145, 163, 165, 224],
            backgroundColor: 'rgba(172, 165, 172, 0.8)',
            borderColor: '#ACA8AD',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        plugins: {
            datalabels: {
                backgroundColor: 'rgba(204, 204, 199, 0.7)',
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