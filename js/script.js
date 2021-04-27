$("#vertical").mCustomScrollbar({

    axis: "x",
    theme: "light-thin",
    autoExpandScrollbar: true,
    autoHideScrollbar: true,
    contentTouchScroll: 25,
    advanced: {
        autoExpandHorizontalScroll: true
    }
});

$("#staff").mCustomScrollbar({

    axis: "x",
    theme: "light-thin",
    autoExpandScrollbar: true,
    autoHideScrollbar: true,
    contentTouchScroll: 25,
    advanced: {
        autoExpandHorizontalScroll: true
    }
});

$(document).ready(function() {
    $("#command").click(function() {
        $('.staff').css('display', 'flex');
        $('.about_us_desc').css('display', 'none');
        $("#command").addClass("active");
        $("#desc").removeClass("active");
    });

    $("#desc").click(function() {
        $('.about_us_desc').css('display', 'flex');
        $('.staff').css('display', 'none');
        $("#desc").addClass("active");
        $("#command").removeClass("active");
    });
});

$(document).ready(function() {
    $("#new").click(function() {

        $('.testimonials_new').show();

        $('.testimonials').hide();
        $("#new").addClass("active");
        $("#popular").removeClass("active");
    });

    $("#popular").click(function() {
        $('.testimonials').show();
        $('.testimonials_new').hide();
        $("#popular").addClass("active");
        $("#new").removeClass("active");
    });
});


$(document).ready(function() {
    $("#button_head").click(function() {
        $('#button_head').css('opacity', '0');
        $('#button_head').css('transition', '.3s');
    });

    $("#button_head1").click(function() {
        $('#button_head1').css('opacity', '0');
        $('#button_head1').css('transition', '.3s');
    });
    $("#button_head2").click(function() {
        $('#button_head2').css('opacity', '0');
        $('#button_head2').css('transition', '.3s');
    });
    $("#button_head3").click(function() {
        $('#button_head3').css('opacity', '0');
        $('#button_head3').css('transition', '.3s');
    });
    $("#button_head4").click(function() {
        $('#button_head4').css('opacity', '0');
        $('#button_head4').css('transition', '.3s');
    });
    $("#button_head5").click(function() {
        $('#button_head5').css('opacity', '0');
        $('#button_head5').css('transition', '.3s');
    });

    $("#open_button").click(function() {
        $('#button_head').css('opacity', '1');
        $('#button_head').css('transition', '.7s');
        $('#button_head1').css('opacity', '1');
        $('#button_head1').css('transition', '.7s');
        $('#button_head2').css('opacity', '1');
        $('#button_head2').css('transition', '.7s');
        $('#button_head3').css('opacity', '1');
        $('#button_head3').css('transition', '.7s');
        $('#button_head4').css('opacity', '1');
        $('#button_head4').css('transition', '.7s');
        $('#button_head5').css('opacity', '1');
        $('#button_head5').css('transition', '.7s');
    });

    $("#bg_modal").click(function() {
        $('#button_head').css('opacity', '1');
        $('#button_head').css('transition', '.7s');
        $('#button_head1').css('opacity', '1');
        $('#button_head1').css('transition', '.7s');
        $('#button_head2').css('opacity', '1');
        $('#button_head2').css('transition', '.7s');
        $('#button_head3').css('opacity', '1');
        $('#button_head3').css('transition', '.7s');
        $('#button_head4').css('opacity', '1');
        $('#button_head4').css('transition', '.7s');
        $('#button_head5').css('opacity', '1');
        $('#button_head5').css('transition', '.7s');
    });

});

$(document).ready(function() {
    $(".instagram").hover(function() {
        $('#inst').css('display', 'block');
        $('#telegram').css('display', 'none');
        $('#facebook').css('display', 'none');
        $('#inst').css('transition', '.3s');
        $('#telegram').css('transition', '.3s');
        $('#facebook').css('transition', '.3s');
    });

    $(".telegram").hover(function() {
        $('#inst').css('display', 'none');
        $('#telegram').css('display', 'block');
        $('#facebook').css('display', 'none');
        $('#inst').css('transition', '.3s');
        $('#telegram').css('transition', '.3s');
        $('#facebook').css('transition', '.3s');
    });

    $(".facebook").hover(function() {
        $('#inst').css('display', 'none');
        $('#telegram').css('display', 'none');
        $('#facebook').css('display', 'block');
        $('#inst').css('transition', '.3s');
        $('#telegram').css('transition', '.3s');
        $('#facebook').css('transition', '.3s');
    });

});