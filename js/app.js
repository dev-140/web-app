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
        }
    });

    $('.menu').on('click', (e) => {
        $('.hamburger-menu-container').addClass('active');
        $('.nav-container-hamburger-menu li').addClass('active');
        $('.hamburger-menu-container').removeClass('close');
    });

    $('.close').on('click', (e) => {
        $('.hamburger-menu-container').removeClass('active');
        $('.hamburger-menu-container').addClass('close');
    });
});