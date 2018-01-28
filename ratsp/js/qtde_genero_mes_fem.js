var ctx = document.getElementById("qtde_genero_mes_fem").getContext('2d');

var qtde_dia = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO",
            "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"
        ],
        datasets: [{
            data: [78, 88, 86, 87, 94, 92, 84, 76, 94, 89, 65, 88],
            backgroundColor: ["#FFB7C3", "#FF9FAB", "#FF8793", "#FF6F7B", "#FF5763", "#F23F4B", "#CF1C28", "#AD0006", "#AD0006", "#8A0000", "#680000", "#450000"]
        }],
    },
    options: {
        cutoutPercentage: 50,
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