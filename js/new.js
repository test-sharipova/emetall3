//меняются стили фильтра при прокрутке
if ($(window).width() > 747) {
    $(window).scroll(function() {
    
        if ($(this).scrollTop() > 300) { 
            $('#filters').addClass('filter-top'); 
            $('.table').css('padding-top', '150px');
            
            
        } else {
            $('#filters').removeClass('filter-top'); 
            $('.table').css('padding-top', '0');
            
        }
    });
    $('.change-filters').on('click', function() {
        
        $('.filter-top').toggleClass('filter-top-show');
        
    });
}
