$(document).ready(function() {
    $("#all").click(function() {
        $("#all").addClass("active");
        $("#man").removeClass("active");
        $("#woman").removeClass("active");
    });

    $("#man").click(function() {
        $("#man").addClass("active");
        $("#all").removeClass("active");
        $("#woman").removeClass("active");
    });
    $("#woman").click(function() {
        $("#woman").addClass("active");
        $("#all").removeClass("active");
        $("#man").removeClass("active");
    });

    $("#nav_sort").one('click', function() {
        $("#nav_sort").css('background-color', '#6fad03');

    })

});


const select = document.querySelector('.select');
const selectValue = document.querySelector('.select_value');
const selectDropdown = document.querySelector('.select_dropdown');
const test = document.querySelector('.test')

selectDropdown.addEventListener('click', e => {
    const option = e.target.closest('.select_option');
    if (option) {
        selectValue.textContent = option.textContent;
        e.target.closest('.select').blur()
        select.dispatchEvent(new CustomEvent('change', {
            detail: option.textContent
        }))
    }
})