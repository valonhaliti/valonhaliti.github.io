
$(window).scroll(function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 450;

    if(y_scroll_pos > scroll_pos_test) {
        jQuery('.skillbar').each(function(){
            jQuery(this).find('.skillbar-bar').animate({
                width:jQuery(this).attr('data-percent')
            },2000);
        });
    }
    else
    {
        $("body").css("background-color","#FFF");
    }
});