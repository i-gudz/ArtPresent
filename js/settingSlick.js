var slider = $(".single-item");
var scrollCount = null;
var scroll = null;

slider
    .slick({
        dots: true,
        infinite: false,
    });


slider.on('wheel', (function(e) {
    e.preventDefault();

    scroll = setTimeout(function() {
        scrollCount = 0;
    }, 200);
    if (scrollCount) return 0;
    scrollCount = 1;

    if (e.originalEvent.deltaY < 0) {
        $(this).slick('slickPrev');
    } else {
        $(this).slick('slickNext');
    }
}));

$("a[data-slide]").click(function(e) {
    e.preventDefault();
    var slideno = $(this).data("slide");
    $(".single-item").slick("slickGoTo", slideno - 1);
});