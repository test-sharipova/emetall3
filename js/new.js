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
//закрыть окно выбора диаметра
$('.close-diametr').on('click', function(){
    $('.select__wrap_diametr').removeClass('opened');
});
