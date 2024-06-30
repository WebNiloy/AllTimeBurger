/* $(document).ready(function () {
    $('#menu-bar').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
    $(window).on('scroll load', function () {
        $('#menu-bar').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });

    $('.menu .list .btn').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let src = $(this).attr('data-src');
        $('#menu-img').attr('src', src);
    });
});

 */
function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 3000);
}

window.onload = fadeOut;