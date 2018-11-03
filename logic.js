// Example
function e1bClick() {
    $("#ebtn").text("Clicked.");
}

// Challenge one
var buttonNumber = Math.floor((Math.random() * 5));
$("#ch1-bg button").each(function (i) {
    if (i === buttonNumber) {
        $(this).css("color", "black");
        $(this).click(function () {
            $(this).html("Clicked.");
            checkFirstChallenge();
        })
    } else {
        $(this).click(function () {
            alert("Wrong button. Please try again.")
        })
    }
});

$("#ch1-checkbox, #ch1-select").change(function () {
    checkFirstChallenge();
})

function checkFirstChallenge() {
    if ($("#ch1-bg button:nth-child(" + (buttonNumber + 1) + ")").text() === "Clicked." &&
        $("#ch1-checkbox").is(":checked") &&
        $("#ch1-select option:selected").text() === "Java"
    ) {
        $("#ch1img, .overlay").css("display", "block");
    }
}

// Second challenge
$(".dropdown").hover(
    function () {
        $(".dropdown-content").show()
    },
    function () {
        $(".dropdown-content").hide()
    }
)
$(".dropdown-content a").each(function (i) {
    $(this).click(function () {
        $(".dropbtn").text($(this).text());
        $(".dropdown-content").hide()
    })
})

// Third challenge

Highcharts.chart('container', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Coffee cups consumed by employees of Rubicon per day'
    },

    xAxis: {
        categories: getLabels()
    },
    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Number of cups'
        },

    },
    plotOptions: {
        column: {
            dataLabels: {
                enabled: true,
                color: 'white'
            }
        }
    },
    tooltip: {
        enabled: false
    },
    legend: {
        enabled: false
    },
    exporting: { enabled: false },
    series: [{
        data: [30, 12, 37, 17, 18,
            40, 47, 43, 32, 6],
    }]
});

function getLabels() {
    today = new Date()
    var dates = [];

    for (let i = 0; i < 14; i++) {
        var day = new Date(today)
        day.setDate(today.getDate() - i);
        const formattedDate = day.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        })
        if (isBD(day)) {
            dates.push(formattedDate)
        }
    }

    return dates.reverse();
}

function isBD(date) {
    return date.getDay() < 6 && date.getDay() > 0;
}
