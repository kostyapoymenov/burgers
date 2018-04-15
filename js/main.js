var hamburgerBtn = document.querySelector('.hamburger-menu__btn'),
    hamburgerClose = document.querySelector('.hamburger-btn__close'),
    hamburgerItem = document.getElementsByClassName('hamburger-menu__item'),
    hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerBtn.addEventListener('click', function(){
    hamburgerMenu.classList.add('hamburger-menu--active');
    document.body.classList.add('blocking');
    hamburgerBtn.style.display = 'none';
});

hamburgerClose.addEventListener('click', function(){
    hamburgerMenu.classList.remove('hamburger-menu--active');
    document.body.classList.remove('blocking');
    hamburgerBtn.style.display = 'block';
});

for(var a = 0; a < hamburgerItem.length; a++){
    hamburgerItem[a].addEventListener('click', function(){
        hamburgerMenu.classList.remove('hamburger-menu--active');
        document.body.classList.remove('blocking');
        hamburgerBtn.style.display = 'block';
    });
}



// Consist block
function showConsist(){
    var sliderItem = document.querySelectorAll('.slider__item');

    for (var i = 0; i < sliderItem.length; i++){
        const consist = sliderItem[i].querySelector('.consist'),
              ingredientClose = sliderItem[i].querySelector('.consist-ingredient_close');

        ingredientClose.addEventListener('click', function (){
            consist.classList.remove('consist__active');
        });

        consist.onmouseover = function() {
            consist.classList.add('consist__active');
        };
        consist.onmouseout = function() {
            consist.classList.remove('consist__active');
        };
    }

}
showConsist();

// Аккордеон команда

function showTeam(){
    var accordTitle = document.getElementsByClassName('team-accordeon__title');

    for (var i = 0; i < accordTitle.length; i++){
        accordTitle[i].addEventListener('click', function(){
            if(!(this.parentElement.classList.contains('team-accordeon--active'))){
                for (var i = 0; i < accordTitle.length; i++){
                    accordTitle[i].parentElement.classList.remove('team-accordeon--active');
                }
                this.parentElement.classList.add('team-accordeon--active');
            } else {
                this.parentElement.classList.remove('team-accordeon--active');
            }
        })
    }
}
showTeam();


// Аккордеон меню
function showAcordeonMenu(){
    var menuHead = document.getElementsByClassName('accordeon-menu__head');

    for (var i = 0; i < menuHead.length; i++) {
        menuHead[i].addEventListener('click', function(){
            if(!(this.parentElement.classList.contains('accordeon-menu--active'))){
                for(i = 0; i < menuHead.length; i++){
                    menuHead[i].parentElement.classList.remove('accordeon-menu--active');
                }
                this.parentElement.classList.add('accordeon-menu--active');
            } else {
                this.parentElement.classList.remove('accordeon-menu--active');
            }
        })
    }
}
showAcordeonMenu();

// Feedback popup
function feedbackPopup(){
    var feedbackBtn = document.getElementsByClassName('feedback-item__btn--popup'),
        feedbackSection = document.querySelector('.feedback');

    function openOverlay() {
        var overlayElement = document.createElement('div');
        overlayElement.classList.add('overlay');

        var popupElement = document.createElement('div');
        popupElement.classList.add('feedback__popup');

        var contentElement = document.createElement('div');
        contentElement.classList.add('feedback__popup_content');

        var closeElement = document.createElement('a');
        closeElement.classList.add('close__btn');
        closeElement.href = '#';
        closeElement.addEventListener('click', function(e){
            e.preventDefault();
            feedbackSection.removeChild(overlayElement);
        });

        overlayElement.appendChild(popupElement);
        popupElement.appendChild(closeElement);
        popupElement.appendChild(contentElement);

        return overlayElement;
    }

    for(var i = 0; i < feedbackBtn.length; i++){
        feedbackBtn[i].addEventListener('click', function() {
            var feedItemContent = this.parentNode.previousElementSibling,
                overlay = openOverlay();
            feedbackSection.appendChild(overlay);
            popupContAdd();

            function popupContAdd(){
                var feedContentAdd = feedItemContent.cloneNode(true);
                document.querySelector('.feedback__popup_content').appendChild(feedContentAdd);
            }
        });
    }
}
feedbackPopup();


// Carousel
$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
            items: 1,
            loop: true,
            margin: 20,
            navContent: $('.slider-chevron'),
            navText: ['','']
        });

    $('.slider-chevron__btn--right').click(function(e) {
        e.preventDefault();
        owl.trigger('next.owl.carousel');
    });

    $('.slider-chevron__btn--left').click(function(e) {
        e.preventDefault();
        owl.trigger('prev.owl.carousel');
    });
});


// OnePageScroll
function onePageScroll(){
    var section = $('.section'),
        display = $('#content'),
        inScroll = false;

    var mobileDetect = new MobileDetect(window.navigator.userAgent);
    var isMobile = mobileDetect.mobile();

    var setActiveMenuItem = function(itemEq){
        $('.points__item')
            .eq(itemEq)
            .addClass('points__item-active')
            .siblings().removeClass('points__item-active');
    }

    var performTransition = function(sectionEq){
        var position = (sectionEq * -100)+ '%';

        if(inScroll) return;

        inScroll = true;

        section
            .eq(sectionEq)
            .addClass("active")
            .siblings()
            .removeClass("active");

        display.css({
            'transform' : `translate(0, ${position})`,
            '-webkit-transform' : `translate(0, ${position})`
        });

        setTimeout(function (){
            setActiveMenuItem(sectionEq);
            inScroll = false;


        }, 1300); // 1300 т.к. убираем инерцию

    }

    var scrollToSection = function (direction) {
        var activeSection = section.filter('.active'),
            nextSection = activeSection.next(),
            prevSection = activeSection.prev();

        if (direction == 'up' && prevSection.length){
            performTransition(prevSection.index());
        }

        if(direction == 'down' && nextSection.length){
            performTransition(nextSection.index());
        }
    }

    $(document).on({
        wheel: function(e) {
            var deltaY = e.originalEvent.deltaY,
                direction = deltaY > 0 ? 'down' : "up";

            scrollToSection(direction);
        },
        keydown: function(e){
            switch (e.keyCode) {
                case 40 :
                    scrollToSection('down');
                    break;

                case 38 :
                    scrollToSection('up');
                    break;
            }
        },
        touchmove: function(e) {
            e.preventDefault();
        }
    })

    $('[data-scroll]').on('click', function(e){
        e.preventDefault();

        var target = parseInt($(e.currentTarget).attr('data-scroll'));

        performTransition(target);

    })

    if (isMobile){
        $(document).swipe({
            swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
                var scrollDirection = direction === 'down' ? 'up' : 'down';
                scrollToSection(scrollDirection);
            }
        });
    }
}
onePageScroll();

// Яндекс карты
ymaps.ready(init);

function init() {
    var map = new ymaps.Map("map", {
        center: [59.93, 30.32],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    var placemark1 = new ymaps.Placemark([59.95, 30.39], {
            hintContent: "ул. Литераторов, д.19",
            balloonContent: "Вкусные бургеры!"
    }, {
            iconLayout: 'default#image',
            iconImageHref: './images/content/map_marker.png',
            iconImageSize: [45, 55]
        });
    var placemark2 = new ymaps.Placemark([59.97, 30.31], {
            hintContent: "ул. Литераторов, д.19",
            balloonContent: "Вкусные бургеры!"
    }, {
            iconLayout: 'default#image',
            iconImageHref: './images/content/map_marker.png',
            iconImageSize: [45, 55]
        });
    var placemark3 = new ymaps.Placemark([59.92, 30.49], {
            hintContent: "ул. Литераторов, д.19",
            balloonContent: "Вкусные бургеры!"
    }, {
            iconLayout: 'default#image',
            iconImageHref: './images/content/map_marker.png',
            iconImageSize: [45, 55]
        });
    var placemark4 = new ymaps.Placemark([59.89, 30.32], {
            hintContent: "ул. Литераторов, д.19",
            balloonContent: "Вкусные бургеры!"
    }, {
            iconLayout: 'default#image',
            iconImageHref: './images/content/map_marker.png',
            iconImageSize: [45, 55]
        });

    map.geoObjects
        .add(placemark1)
        .add(placemark2)
        .add(placemark3)
        .add(placemark4);
}


// Form
$(document).ready(function () {

    $('#main-form').on('submit', function (e) {
        e.preventDefault();
        $.ajax('server.php', {
            type: 'POST',
            data: $(this).serialize(),
            success: function (data) {
                $('.overlay').addClass('active');
                $('.popup__text').text(data);
            },
            error: function (data) {
                $('.overlay').addClass('active');
                $('.popup__text').text(data);
            }
        })
    });

    $('.popup-block__btn').children('.btn').on('click', function(){
        $('.overlay').removeClass('active');
        $('#main-form')[0].reset();
    })
});


