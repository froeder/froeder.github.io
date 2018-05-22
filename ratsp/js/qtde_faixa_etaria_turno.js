var ctx = document.getElementById("qtde_faixa_etaria_turno").getContext('2d');
var qtde_mes = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["0-17", "18-24", "25-29", "30-34", "35-39", "40-44", "45-49", "50-54", "55-59", "60-64",
            "65-69", "70-74", "75-79", "80 ou mais", "NAO DISPONIVEL",
        ],
        datasets: [{
            label: 'MANHÃ',
            data: [35, 146, 103, 99, 91, 59, 63, 77, 69, 53, 62, 31, 41, 47, 30],
            backgroundColor: 'rgba(0, 0,0, 0)',
            borderColor: '#A61D4C',
            borderWidth: 1
        }, {
            label: 'TARDE',
            data: [81, 149, 93, 79, 93, 78, 98, 85, 72, 68, 61, 42, 54, 60, 12],
            backgroundColor: 'rgba(0, 0,0, 0)',
            borderColor: '#3E5DAA',
            borderWidth: 1,
        }, {
            label: 'NOITE',
            data: [99, 272, 183, 182, 173, 179, 161, 172, 107, 96, 71, 43, 43, 36, 103],
            backgroundColor: 'rgba(0, 0,0, 0)',
            borderColor: '#63AE45',
            borderWidth: 1,
        }, {
            label: 'MADRUGADA',
            data: [51, 257, 181, 133, 112, 87, 81, 54, 35, 32, 28, 9, 10, 9, 65],
            backgroundColor: 'rgba(0, 0,0, 0)',
            borderColor: '#01B79A',
            borderWidth: 1,
        }]
    },
    options: {
        plugins: {
            datalabels: {
                backgroundColor: 'rgba(204, 204, 199, 0.5)',
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