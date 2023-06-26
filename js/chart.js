(async function () {

    const item = document.querySelectorAll('.statistics-filter__list-item')

    function data() {
        var sum = {};

        for (var i = 0; i < item.length; i++) {
            var li = item[i];
            var id = li.querySelector(".progress-bar").id;
            var value = parseFloat(li.querySelector(".statistics-filter__item-value").textContent);


            if (id in sum) {
                sum[id] += value;
            }

            else {
                sum[id] = value;
            }
        }
        return Object.values(sum)
    }


    //Changed color of progress bar//
    document.querySelectorAll('.progress-bar').forEach((el, i) => {
        const percentages = Array.from(item).map(el => parseFloat(el.querySelector('.statistics-filter__item-value').textContent))
        el.style.width = `${percentages[i]}%`

   
        //render dependent from id
        if (el.id === "crypto") {
            el.style.backgroundColor = "#F44336"
        }

        if (el.id === "indices") {
            el.style.backgroundColor = "#811EFF"
        }

        if (el.id === "forex") {
            el.style.backgroundColor = "#FFA51E"
        }

        if (el.id === "shares") {
            el.style.backgroundColor = "#42A5F5"
        }

        if (el.id === "metals") {
            el.style.backgroundColor = "#4CD7AB"
        }

    })

    var ctx = document.getElementById('statistics-chart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'doughnut',
        // The data for our dataset
        data: {
            labels: Array.from(item).map(el=> el.querySelector('.statistics-filter__item-text').id),

            datasets: [{
                label: 'most effective instruments',
                backgroundColor: function () {
                    const data = Array.from(item).map(el=> el.querySelector('.statistics-filter__item-text').id)
                    const backgroundColor = []

                    if (data.includes('crypto')) {
                        backgroundColor.push("#F44336")
                    }

                    if (data.includes('indices')) {
                        backgroundColor.push("#811EFF")
                    }

                    if (data.includes('forex')) {
                        backgroundColor.push("#FFA51E")
                    }

                    if (data.includes('shares')) {
                        backgroundColor.push("#42A5F5")
                    }

                    if (data.includes('metals')) {
                        backgroundColor.push("#4CD7AB")
                    }

                    return backgroundColor

                },
                data: data(),

            }],

        },



        options: {

            responsive: true,
            maintainAspectRatio: true,


            legend: {
                display: false
            },

        },
    });


})()