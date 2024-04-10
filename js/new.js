//меняются стили фильтра при прокрутке
if ($(window).width() > 747) {
    $(window).scroll(function() {
    
        if ($(this).scrollTop() > 300) { 
            $('#filters').addClass('filter-top'); 
            $('.table').css('padding-top', '180px');
            
            
        } else {
            $('#filters').removeClass('filter-top'); 
            $('.table').css('padding-top', '0');
            
        }
    });
    $('.change-filters').on('click', function() {
        
        $('.filter-top').toggleClass('filter-top-show');
        
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
    
//закрыть окно выбора диаметра
$('.close-diametr').on('click', function(){
    $('.select__wrap_diametr').removeClass('opened');
});
