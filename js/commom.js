$(document).ready(function(){
    $('.m-btn').click(function(){
        $('.m-btn').toggleClass('on')
        $('.m-nav').toggleClass('on')
    })
    $(window).resize(function(){
        let windowWdith = $(window).width();
        if(windowWdith > 540) {
            $('.m-btn').removeClass('on')
            $('.m-nav').removeClass('on')
        }
    })
})