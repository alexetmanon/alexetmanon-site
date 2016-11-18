$(document).foundation();


$(document).ready(function () {
    // Case study section
    $('#casestudy--carousel').slick({
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="assets/img/aetm-arrow-white-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="assets/img/aetm-arrow-white-right.svg"></button>',
        asNavFor: '#casestudy--carousel-text'
    });
    $('#casestudy--carousel-text').slick({
        arrows: false,
        adaptiveHeight: true
    });

    // "Did you know ?" section
    $('#didyouknow--carousel').slick({
        autoplay: true,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="assets/img/aetm-arrow-white-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="assets/img/aetm-arrow-white-right.svg"></button>'
    });

    // Methods section
    $('#methods--carousel').slick({
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="assets/img/aetm-arrow-yellow-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="assets/img/aetm-arrow-yellow-right.svg"></button>',
        asNavFor: '#methods--carousel-text'
    });
    $('#methods--carousel-text').slick({
        arrows: false,
        adaptiveHeight: true
    });
});