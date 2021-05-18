$(document).ready(function () {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    $('.zar-at').click(function () {
        let firstNumber = (`${getRandomInt(1,7)}`)
        let lastNumber = (`${getRandomInt(1,7)}`)
        $('.dot').remove()
        for (let i = 0; i < firstNumber; i++) {
            if ($('.dot').length < 7) {
                $('.first-dice').append(`<div class="dot">.</div>`)
            }

        }
        for (let i = 0; i < lastNumber; i++) {
            if ($('.dot').length < 7) {
                $('.last-dice').append(`<div class="dot">.</div>`)
            }

        }
    })


})