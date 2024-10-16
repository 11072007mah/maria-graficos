const ctx = document.getElementById('usoCelularChart').getContext('2d');

const data = {
    labels: ['00:00 - 01:00', '01:00 - 02:00', '02:00 - 03:00', '03:00 - 04:00', '04:00 - 05:00', 
             '05:00 - 06:00', '06:00 - 07:00', '07:00 - 08:00', '08:00 - 09:00', '09:00 - 10:00',
             '10:00 - 11:00', '11:00 - 12:00', '12:00 - 13:00', '13:00 - 14:00', '14:00 - 15:00',
             '15:00 - 16:00', '16:00 - 17:00', '17:00 - 18:00', '18:00 - 19:00', '19:00 - 20:00',
             '20:00 - 21:00', '21:00 - 22:00', '22:00 - 23:00', '23:00 - 00:00'],
    datasets: [{
        label: 'Horas no celular',
        data: [0.5, 0.2, 0.1, 0.3, 0.6, 1.2, 2.3, 3.4, 4.5, 3.8, 
               3.2, 2.6, 1.9, 1.5, 2.0, 2.3, 3.1, 2.9, 2.8, 1.9, 
               2.4, 1.5, 0.7, 0.3],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: true
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top'
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.dataset.label}: ${context.raw} horas`;
                    }
                }
            }
        }
    }
};

new Chart(ctx, config);
