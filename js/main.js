var hamburgerBtn = document.querySelector('.hamburger-menu__btn'),
      hamburgerClose = document.querySelector('.hamburger-btn__close'),
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


    var consist = document.querySelector('.consist'),
        ingredientClose = document.querySelector('.consist-ingredient_close');

    ingredientClose.addEventListener('click', function (){
        consist.classList.remove('consist__active');
    });

    consist.onmouseover = function() {
        consist.classList.add('consist__active');
    };
    consist.onmouseout = function() {
        consist.classList.remove('consist__active');
    };




// Аккордеон команда

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


// Аккордеон меню

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


// Feedback popup

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

    // var screen = 0,
    //     content = document.querySelector('#content'),
    //     section = document.querySelector('.section'),
    //     inscroll = false;
    //
    // // section.lastChild.classList.add('page__active');
    // var containerActive = section.lastElementChild;
    // containerActive.classList.add('page__active');
    // console.log(containerActive);
    // // $('.section:first-child').addClass('page__active');
    //
    // document.body.addEventListener('mousewheel', function(event) {
    //     console.log(event.deltaY);
    //
    //     var activePage = section.querySelector('.page__active');
    //
    //     if(!inscroll){
    //         inscroll = true;
    //         if(event.deltaY > 0){
    //             if(activePage.previousSibling.length){
    //                 screen--;
    //             }
    //         } else {
    //             if(activePage.nextSibling.length){
    //                 screen++;
    //             }
    //         }
    //     }
    //     var position = screen * 100 + '%';
    //     // section.eq(screen).classList.add('page__active').sibling().removeClass('page__active');
    //     content.style.top = position;
    //
    //
    //     setTimeout(function() {
    //         inscroll = false;
    //     }, 1300);
    // });
$("#content").onepage_scroll({
    sectionContainer: "section",
    easing: "ease",

    animationTime: 1000,
    pagination: true,
    updateURL: false,
    beforeMove: function(index) {},
    afterMove: function(index) {},
    loop: false,
    keyboard: true,
    responsiveFallback: false,
    direction: "vertical"
});

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

