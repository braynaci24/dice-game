$(document).ready(function () {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }


    $('.roll').click(function () {
        $('.dice').html("")

        let firstNumber = (`${getRandomInt(1,7)}`)
        let lastNumber = (`${getRandomInt(1,7)}`)

        if (firstNumber == 1) {
            $('.first-dice').addClass('revertgrid');
        } else {
            $('.first-dice').removeClass('revertgrid')
        }

        if (lastNumber == 1) {
            $('.last-dice').addClass('revertgrid');
        } else {
            $('.last-dice').removeClass('revertgrid')
        }

        for (let i = 0; i < firstNumber; i++) {
            $('.first-dice').append('<div class="dot"></div>')
        }

        for (let i = 0; i < lastNumber; i++) {
            $('.last-dice').append('<div class="dot"></div>')
        }
    })


})