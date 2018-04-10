var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.navbar').outerHeight();

var didScroll;

$(window).scroll(event => {
    didScroll = true;
});

setInterval(() => {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta) {
        return;
    }

    if (st > lastScrollTop && st > navbarHeight) {
        $('#navbarNav').collapse('hide');
        $('.navbar').removeClass('nav-down').addClass('nav-up');
    } else {
        if (st + $(window).height() < $(document).height()) {
            $('.navbar').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}