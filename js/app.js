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

    $('.add-expense-container .add-category-button, .add-expense-container .categories p').on('click', (e)=> {
        $('.add-expense-container .categories').toggleClass('active');
        $('.add-category-button .arrow-down-category').toggleClass('active');
    });

    $('.add-expense-container .categories p').on('click', (e)=> {
        var items = $(e.currentTarget).text();
        $('.add-category-button .text').text(items);
    });

    $('.add-expense-data').on('click', (e) => {
        setTimeout(() => { 
            $('.add-expense-value').val('');
            $('.add-category-button .text').text('Category');
        }, 300);
    });

    setInterval(function () {
        var category = $('.add-category-button .text').text(),
            value = $('.add-expense-value').val();
        if (category === 'Category'){
            $('.add-expense-data').hide();
        } else if (value === ''){
            $('.add-expense-data').hide();
        } else {
            $('.add-expense-data').show();
        }
    },);
});