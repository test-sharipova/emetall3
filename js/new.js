//меняются стили фильтра при прокрутке
if ($(window).width() > 768) {
    $(window).scroll(function() {
    
        if ($(this).scrollTop() > 720) { 
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
//убрать плавное появление фильтра (переписаны скрипты из script.js)
$('.showFilters').on('click', function() {
    $('.catalogFilters__form').fadeIn(0);
    $('.catalogFilters__header').fadeIn(0);
    $('.overlay').fadeIn();
    $('.showFilters').fadeOut();
  });
  $('.catalogFilters__close').on('click', function() {
    $('.catalogFilters__form').fadeOut(0);
    $('.catalogFilters__header').fadeOut(0);
    $('.overlay').fadeOut(0);
    $('.showFilters').fadeIn(0);
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

//показать кнопку вы подписаны в карточке поставщика
$('#subscribe-provider').on('click', function(){
    $(this).fadeOut(0);
    $('#subscribe-provider-done').fadeIn();
});

//показать фильтры селект
if ($(window).width() < 768) {
    
    $('.select-list').each(function(i) {
        $(this).on('click', function(e){
        $('.select__name__wrap-razdel').eq(i).css('display', 'flex');
        });
    });
    $('.close-select, .close-select-btn').on('click', function(){
        $('.select__name__wrap-razdel').css('display', 'none');
        
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
$('.close-select, .close-select-btn').on('click', function(){
    $('.select__wrap').removeClass('opened');
    $('.select__name__wrap-razdel').css('display', 'none');
});

//при клике на вариант поместить его в поле "Выбрано:"
$('.select__wrap-single').each(function(i){
    $(this).find('.select__item-value').on('click', function(){
        
        $('.select-input-selected').eq(i).val($(this).text());
    });
});

//добавить галочку в списке раздела
window.onload = function() { 
    $('.new-select__item').each(function() {
        $(this).removeClass('checked');
        if ($(this).find('span').text() == $('.new-select').text()) {
          $(this).addClass('checked');
        }
      });
    $('.new-select').on('click', function(){
        $('.new-select__item').each(function() {
            $(this).removeClass('checked');
            if ($(this).find('span').text() == $('.new-select').text()) {
              $(this).addClass('checked');
            }
            $(this).on('click', function(){
                $('.select__name__wrap').css('display', 'none');
                console.log('ok');
            });
          });
    });


    //показать блок Выбрано в выборе раздела
    if ($(window).width() <= 768) {
         // Выбираем элемент, который будем отслеживать
    var target = document.querySelector('.new-select');

    // Функция, которая будет вызываться при изменении класса
    var callback = function(mutationsList, observer) {
        // Проверяем, есть ли класс on у элемента .new-select
        if ($(target).hasClass('on')) {
            $('.select-input-selected-wrap-razdel').show();
        } else {
            $('.select-input-selected-wrap-razdel').hide();
        }
    };

    // Создаем новый экземпляр MutationObserver
    var observer = new MutationObserver(callback);

    // Настраиваем экземпляр для отслеживания изменений атрибута class
    observer.observe(target, { attributes: true, attributeFilter: ['class'] });


    //вставить название раздела в поле Выбрано:
    $('.new-select').on('click', function(){
        $('.select-input-selected-razdel').val($(this).text().trim());
        
    });

    //Показать сообщение об удалении диапазона, если введены значения диапазона
    $('.select__list-input--start, .select__list-input--end').on('input', function() {
        if ($(this).val().trim() !== '') {
            $('.help-message').show();
            $('.oft-search-message').hide(0);
        } else {
            $('.help-message').hide();
            $('.oft-search-message').show(0);
        }
    });
    $('.clear__range').on('click', function(){
        $('.help-message').hide();
            $('.oft-search-message').show(0);
    });
    }
   
      
  };

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
  //открыть окошко селекта
  $('.select-input-wrap').each(function(i) {
    $(this).on('click', function(e){
        $('.select__wrap').eq(i).addClass('opened');
        });
  });
}

//модальное окно вакансии
$('.apply-job').on('click', function() {
    $('.modal__vacancies, .overlay').fadeIn();
});

//сообщить о несоответсвии
$('.catalogFilters__warning').on('click', function(){
    $('.overlay, .modal__problem').fadeIn();
});