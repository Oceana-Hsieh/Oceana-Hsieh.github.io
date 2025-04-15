$(document).ready(function(){

    // 換導覽列顏色header color change
    $(window).on("scroll",function(){
        var scrollDistance = $(window).scrollTop();
        var $header = $(".js-header");
        if(scrollDistance > 80){
            $header.addClass("header-colored")
        }
        else{
            ($header).removeClass("header-colored");
        }
    })

    // 初始化動畫效果 wow plugin initialize
    if(screen.width > 768){
        new WOW().init();
    }
    
    // 讓燈箱的圖片可以全部循環撥放fancybox plugin options
    $('[data-fancybox]').fancybox({
		loop : true
	});

    // 視差滾動插件stellar plugin initialize
    if(screen.width > 768){
		$(window).stellar();
	}
})
