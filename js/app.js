$(document).ready(function(){
    $('.calcBtn').on('click', (e) => {
        var userCred = $('.userAllowance').val(),
            billOne = $('.billOne').val(),
            billTwo = $('.billTwo').val(),
            billThree = $('.billThree').val(),
            totalBill = parseInt(billOne) + parseInt(billTwo) + parseInt(billThree),
            totalCred =  parseInt(userCred) - parseInt(totalBill);

        if (userCred === '' , billOne === '' , billTwo === '' , billThree === ''){
            alert('put 0 on the box if none');
        } else {
            console.log(totalCred);
            $('.totalCreds').text(totalCred);
            $('.totalBill').text(totalBill);
            
            var chart = new CanvasJS.Chart("chartContainer", {
                theme: "white",
                exportFileName: "Doughnut Chart",
                exportEnabled: true,
                animationEnabled: true,
                title:{
                    text: "Monthly Expense"
                },
                legend:{
                    cursor: "pointer",
                    itemclick: explodePie
                },
                data: [{
                    type: "doughnut",
                    innerRadius: 99,
                    showInLegend: true,
                    toolTipContent: "<b>{name}</b>",
                    dataPoints: [
                        { y: totalCred, name: "Allowance" },
                        { y: billOne, name: "Electric Bill" },
                        { y: billTwo, name: "Water Bill" },
                        { y: billThree, name: "Internet Bill" }
                    ]
                }]
            });
            chart.render();
            
            function explodePie (e) {
                if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
                    e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
                } else {
                    e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
                }
                e.chart.render();
            }
        }
    });
});