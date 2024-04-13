//меняются стили фильтра при прокрутке
if ($(window).width() > 747) {
    $(window).scroll(function() {
    
        if ($(this).scrollTop() > 800) { 
            $('.filters-top-menu').css('transform', 'translateY(0)');
        } else {
            $('.filters-top-menu').css('transform', 'translateY(-60px)');
        }
    });
    $(".filters-top-menu a").on("click", function () {
        let href = $(this).attr("href");
    
        $("html, body").animate({
            scrollTop: $(href).offset().top - 70
        }, {
            duration: 370,   
            easing: "linear" 
        });
    
        return false;
    });
    
}
//убрать скролл окна при открытии фильтров
$('.showFilters').on('click', function(){
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
});
//вернуть скролл
$('.catalogFilters__close').on('click', function(){
    document.body.style.position = '';
    document.body.style.width = '';
});
//главная меню личного кабинета
$('.header__item__profile').on('click', function(){
    $('.header__item__profile__menu').toggleClass('header__item__profile__menu-active');

});
$(document).mouseup( function(e){ 
		var div = $( ".header__item__profile" ); 
		if ( !div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
                $('.header__item__profile__menu').removeClass('header__item__profile__menu-active'); // скрываем его
		}
	});

//показать меню при клике на ... в карточке поставщика
$('.btn_more').on('click', function(){
    $('.providerscard-more__menu').toggleClass('providerscard-more__menu-active');

});
$(document).mouseup( function(e){ 
		var div = $( ".providerscard-more__menu" ); 
		if ( !div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
                $('.providerscard-more__menu').removeClass('providerscard-more__menu-active'); // скрываем его
		}
	});

//закрыть окно выбора диаметра
$('.close-diametr').on('click', function(){
    $('.select__wrap_diametr').removeClass('opened');
});
