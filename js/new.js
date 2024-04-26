//меняются стили фильтра при прокрутке
if ($(window).width() > 768) {
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
//показать фильтры селект
if ($(window).width() < 768) {
    
    $('.select-list').each(function(i) {
        $(this).on('click', function(e){
        $('.select__name__wrap-razdel').eq(i).css('display', 'flex');
        });
    });
    $('.close-select').on('click', function(){
        $('.select__name__wrap-razdel').css('display', 'none');
        console.log('ok');
    });
    //фикс боди
    $('.select-list').on('click', function(){
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
    });
    //убрать фикс боди
    $('.close-select-offers').on('click', function(){
        document.body.style.position = '';
        document.body.style.width = '';
    });

}

//закрыть окно выбора в фильтрах моб версии
$('.close-select').on('click', function(){
    $('.select__wrap').removeClass('opened');
    $('.select__name__wrap-razdel').css('display', 'none');
});

//при клике на вариант добавить галочку
$('.select__item-value').on('click', function(){
    $(this).toggleClass('checked');
});




//подписаться на обновления
$('.toggle-button-click').change(function() {
    if($(this).is(':checked')) {
        $('.modal__subscribe-new, .overlay').fadeIn();
    }
});

//вакансии - показать больше вакансий

var visibleVacancies = 3;
var allVacancies = $('.vac-info__vacancy').length;
     
$('.vac-info__vacancy').slice(visibleVacancies).hide();
     
$('.btn_show-more').on('click', function() {
    visibleVacancies += 3;
       
if (visibleVacancies >= allVacancies) {
 $('.btn_show-more').hide();
}
        
$('.vac-info__vacancy').slice(0, visibleVacancies).show();
});

//фикс боди если открыта вакансия
if ($(window).width() <= 768) {
    var details = $('.vac-info__vacancy');

  details.each(function() {
    var detail = $(this);

    if (detail.attr('open')) {
      $('body').css('position', 'fixed');
    }

    detail.on('toggle', function() {
      if (detail.attr('open')) {
        $('body').css('position', 'fixed');
      } else {
        $('body').css('position', 'static');
      }
    });
  });
}

//модальное окно вакансии
$('.apply-job').on('click', function() {
    $('.modal__vacancies, .overlay').fadeIn();
});