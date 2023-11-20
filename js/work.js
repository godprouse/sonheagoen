$(document).ready(function(){
    const tabMenu = $('.tabmenu li'),
          tabContent = $('.tabs ul')
          console.log(tabContent) 
    tabMenu.click(function(e){
        e.preventDefault();
        tabMenu.removeClass('active')
        $(this).addClass('active')
        tabContent.hide()
        let target = $(this).find('a').attr('href')
        console.log(target)
        $(target).show()
    })  
    tabMenu.eq(0).trigger('click')
    
})

$(document).ready(function(){
    $('.content-item li').click(function(){
        $('.modal').addClass("show")
        $('.modal').append(`
        <div class="item_box">
        <iframe src="https://www.youtube.com/embed/${$(this).data("video")}?rel=0&playinline=1&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        `) 
    })
    $('.content-item2 li').click(function(){
        console.log($(this).data("img"))
        $('.modal2').addClass("show")
        $('.modal2').append(`<div class="item_box">
    <img src="${$(this).data("img")}" alt=""></div>`) 
       
    })
    $('.modal .dim, .modal2 .dim').click(function(){
        $('.modal, .modal2').removeClass("show")
        $('.modal .item_box, .modal2 .item_box').remove();
    })
    $('.content-item img').mouseover(function(){
        $(this).attr('src',$(this).data('animated'))
    })
    $('.content-item img').mouseout(function(){
        $(this).attr('src',$(this).data('static'))
    })


})
