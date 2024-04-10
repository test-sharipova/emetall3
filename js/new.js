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
//закрыть окно выбора диаметра
$('.close-diametr').on('click', function(){
    $('.select__wrap_diametr').removeClass('opened');
});
