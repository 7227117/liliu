// var isMobileType=$(window).width()>=976;var isMobileType2=$(window).width()>=700;$(document).ready(function(){ts=new Date(2027,11,1);$('#countdown').countdown({timestamp:ts});ts2=new Date(2027,10,8);$('#countdown2').countdown({timestamp:ts2});ts3=new Date(2027,10,8);$('#countdown3').countdown({timestamp:ts3});$(window).resize(function(){var getWindowWidth=$(window).width();if(getWindowWidth<992){var height=$(".aside_block").outerHeight();}});if(typeof ymaps!="undefined"){function init(){if($('#map').length){var myMap=new ymaps.Map("map",{center:[55.804122,37.755697],zoom:13,controls:[' ']});myMap.geoObjects.add(new ymaps.Placemark([55.804122,37.755697],{balloonContent:'г.Москва, район Гольяново, Щелковское шосе, дом 5, офис 18',hintContent:'Москва!'},{iconLayout:'default#image',iconImageHref:'images/myIcon.png',iconImageSize:[30,41],iconImageOffset:[-5,-38]}))}}ymaps.ready(init);}$('.pagin .tab a:first').addClass('klicked');$('.tabs:not(:first)').hide();$('.pagin .tab a').click(function(e){e.preventDefault();if(!$(this).hasClass('klicked')){$('.tabs').css({display:"none"});curDiv=$('.tabs[data-att='+$(this).attr('data-attr')+']');$(curDiv).css({'opacity':0,'display':'block'});var objShow={opacity:'1'};$(curDiv).animate(objShow,1000);$('.pagin .tab a').removeClass('klicked');$(this).addClass('klicked');$('html, body').stop(true,true).animate({scrollTop:$('.views').offset().top},1000);}});var arr=$('.pagin .tab a');$('.last').click(function(e){e.preventDefault();var previndex;var nextindex;$.each(arr,function(i,val){if($(arr[i]).hasClass('klicked')){previndex=i;nextindex=i+1;}});if(nextindex<arr.length){$(arr[previndex]).removeClass('klicked');$(arr[nextindex]).removeClass('klicked').trigger('click');}$('html, body').stop(true,true).animate({scrollTop:$('.views').offset().top},1000);});$('.first').click(function(e){e.preventDefault();var previndex;var nextindex;$.each(arr,function(i,val){if($(arr[i]).hasClass('klicked')){previndex=i;nextindex=i-1;}});if(nextindex>=0){$(arr[previndex]).removeClass('klicked');$(arr[nextindex]).removeClass('klicked').trigger('click');}$('html, body').stop(true,true).animate({scrollTop:$('.views').offset().top},1000);});$('.sly').click(function(){var target=$(this).attr('href');$('html, body').stop(true,true).animate({scrollTop:$(target).offset().top},1500);return false;});

// функцию проверки поддержки webp
function ThisIsWebP() {
  var def = $.Deferred(), crimg = new Image();
  crimg.onload = function() { def.resolve(); };
  crimg.onerror = function() {def.reject(); };
  crimg.src = "";
  return def.promise();
}

var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

// добавляем класс если есть поддержка
ThisIsWebP().then(function() {
  $('body').addClass('webp');
}, function() {
  $('body').addClass('notwebp');
});

if(iOS) {
  $('body').removeClass('webp').addClass('notwebp');
}

// Mobile();Mobile2();$('#link1').click(function(event){event.preventDefault();if(!$(this).hasClass('open')){$('#hidd1').slideDown();$(this).html('Свернуть').addClass('open');}else{$('#hidd1').slideUp();$(this).html('Читать подробнее').removeClass('open');}});$('#link2').click(function(event){event.preventDefault();if(!$(this).hasClass('open')){$('#hidd2').slideDown();$(this).html('Свернуть').addClass('open');}else{$('#hidd2').slideUp();$(this).html('Читать подробнее').removeClass('open');}});$.validator.methods.phoneUS=function(value,element){return(value.indexOf('_')==-1);};$("#formm").validate({rules:{name:{required:true,minlength:10,maxlength:50},phone:{required:true,minlength:10,maxlength:17,phoneUS:true}},messages:{name:{required:"Заполните",minlength:"Меньше 10 символов",maxlength:"Много символов"},phone:{required:"Заполните",minlength:"Заполните",phoneUS:"Невер. формат",maxlength:"Много символов"}},submitHandler:function(){$.ajax({url:'/blocks/ajax',method:'POST',async:false,data:{name:$("#formm").find('input[name=name]').val(),phone:$("#formm").find('input[name=phone]').val(),count:$('input[name=count]').val(),order:'1'},success:function(response){$("#formm").find('input[name=name]').val('');$("#formm").find('input[name=phone]').val('');showMessage('Спасибо за Ваш заказ, в скором времени наш менеджер свяжется с Вами для уточнения деталей по доставке товара.');yaCounter34762115.reachGoal('order');}});}});$("#formmb").validate({rules:{name:{required:true,minlength:10,maxlength:50},phone:{required:true,minlength:10,maxlength:17,phoneUS:true}},messages:{name:{required:"Заполните",minlength:"Меньше 10 символов",maxlength:"Много символов"},phone:{required:"Заполните",minlength:"Заполните",phoneUS:"Невер. формат",maxlength:"Много символов"}},submitHandler:function(){$.ajax({url:'blocks/ajax',method:'POST',async:false,data:{name:$("#formmb").find('input[name=name]').val(),phone:$("#formmb").find('input[name=phone]').val(),count:$('input[name=countb]').val(),order:'1'},success:function(response){$("#formmb").find('input[name=name]').val('');$("#formmb").find('input[name=phone]').val('');showMessage('Спасибо за Ваш заказ, в скором времени наш менеджер свяжется с Вами для уточнения деталей по доставке товара.');yaCounter34762115.reachGoal('order');}});}});$("#form_call").validate({rules:{name:{required:true,minlength:10,maxlength:50},phone2:{required:true,minlength:15,phoneUS:true},message:{required:true}},messages:{name:{required:"Заполните",minlength:"Меньше 10 символов",maxlength:"Много символов"},phone2:{required:"Заполните",minlength:"Заполните",phoneUS:"Неверный формат",},message:{required:"Заполните",}},submitHandler:function(){$.ajax({url:'blocks/ajax',method:'POST',async:false,data:{name:$("#form_call").find('input[name=name]').val(),phone1:$("#form_call").find('select[name=phone1]').val(),phone2:$("#form_call").find('input[name=phone2]').val(),time1:$("#form_call").find('select[name=time1]').val(),time2:$("#form_call").find('select[name=time2]').val(),message:$("#form_call").find('textarea[name=message]').val(),call:'1'},success:function(response){$.fancybox.close();$("#form_call").find('input[name=name]').val('');$("#form_call").find('input[name=phone2]').val('');$("#form_call").find('textarea[name=message]').val('');showMessage('Спасибо, запрос отправлен, в скором времени мы свяжемся с Вами и ответим на все вопросы.');ga('send','event','call','send');yaCounter34762115.reachGoal('call');}});}});$('input[name="count"]').keydown(function(e){if(!checkDigits(e)){e.preventDefault();}})


        (function () {
            let url = document.URL.split('#')
            if (url.length <= 1) {
                return;
            }
            $.ajax({
                url: '/api/set-anchor?' + url[1],
                method: 'get',
                async: true,
                }
            );
        })()



        $('input[name="count"]').keyup(function(e){recalculateTotal($(this));})
        $('input[name="countb"]').keydown(function(e){if(!checkDigits(e)){e.preventDefault();}})
        $('input[name="countb"]').keyup(function(e){recalculateTotalb($(this));})
        $("#plus").click(function () {
            var cnt = parseInt($('input[name="count"]').val(), 10);
            $('input[name="count"]').val(cnt + 1);
            recalculateTotal($('input[name="count"]'));
            return false;
        });
        $("#plusb").click(function () {
            var cnt = parseInt($('input[name="countb"]').val(), 10);
            $('input[name="countb"]').val(cnt + 1);
            recalculateTotalb($('input[name="countb"]'));
            return false;
        });
        $("#minus").click(function () {
            var cnt = parseInt($('input[name="count"]').val(), 10);
            ncnt = cnt - 1;
            if (ncnt > 0) {
                $('input[name="count"]').val(ncnt);
                recalculateTotal($('input[name="count"]'));
            }
            return false;
        });
        $("#minusb").click(function () {
            var cnt = parseInt($('input[name="countb"]').val(), 10);
            ncnt = cnt - 1;
            if (ncnt > 0) {
                $('input[name="countb"]').val(ncnt);
                recalculateTotalb($('input[name="countb"]'));
            }
            return false;
        });
        $('input[name="phone"]').bind("change keyup input click", function () {
            if (this.value.match(/[^0-9]/g)) {
                this.value = this.value.replace(/[^0-9]/g, '');
            }
        });
        $('input[name="phone2"]').bind("change keyup input click", function () {
            if (this.value.match(/[^0-9]/g)) {
                this.value = this.value.replace(/[^0-9]/g, '');
            }
        });

        $(window).resize(function () {
            Mobile();
            Mobile2();
        });

        function trr() {
            if ($('#popup_toggle').length > 0) {
                $('#popup_toggle').trigger('click');
            }
        }

        setTimeout(trr, 60000);
        $('.fancybox').fancybox();
        $('#popup_toggle').fancybox({wrapCSS: "wrap",})
// })
        var slickParams = {slidesToShow: 1, slidesToScroll: 1, infinite: true, speed: 300, dots: false, arrows: true};

        function Mobile() {
            if ((!window.isMobileType) && $(window).width() < 976) {
                window.isMobileType = true;
                $("#menu1").css('display', 'none');
                $('#toggle').removeClass("on");
                $("#menu1").fadeOut('slow');
                $(".head_menu .block-toggle_nav").removeClass("open");
            }
            if (window.isMobileType && $(window).width() >= 976) {
                window.isMobileType = false;
                $("#menu1").css('display', 'block');
            }
        };

        function Mobile2() {
            if ((!window.isMobileType2) && $(window).width() < 700) {
                window.isMobileType2 = true;
                $("#menu2").css('display', 'none');
                $('#toggle2').removeClass("on");
                $("#menu2").fadeOut('slow');
                $(".foot_menu .block-toggle_nav").removeClass("open");
                $('.slider_decript').slick(slickParams);
                $('.slider_compos').slick(slickParams);
                $('.slider_step').slick(slickParams);
                $('#link1').html('Читать подробнее').removeClass('open').css('display', 'block');
                $("#hidd1").css('display', 'none');
                $('#link2').html('Читать подробнее').removeClass('open').css('display', 'block');
                $("#hidd2").css('display', 'none');
            }
            if (window.isMobileType2 && $(window).width() >= 700) {
                window.isMobileType2 = false;
                $("#menu2").css('display', 'block');
                if ($('.slider_decript').hasClass('slick-initialized')) {
                    $('.slider_decript').slick('unslick');
                }
                if ($('.slider_step').hasClass('slick-initialized')) {
                    $('.slider_step').slick('unslick');
                }
                if ($('.slider_compos').hasClass('slick-initialized')) {
                    $('.slider_compos').slick('unslick');
                }
                $('#link1').html('Свернуть').addClass('open').css('display', 'none');
                $("#hidd1").css('display', 'inline');
                $('#link2').html('Свернуть').addClass('open').css('display', 'none');
                $("#hidd2").css('display', 'inline');
            }
        }

        function checkDigits(e) {
            if (jQuery.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 || (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || (e.keyCode >= 35 && e.keyCode <= 40)) {
                return true;
            }
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                return false;
            }
            return true;
        }

        var isMobileType3 = $(window).width() >= 700;
        var isMobileType4 = $(window).width() >= 1000;
        $(document).ready(function () {
            $('.minus').click(function () {
                var $input = $(this).parent().find('input');
                var count = parseInt($input.val()) - 1;
                count = count < 1 ? 1 : count;
                var min = $input.data("min");
                count <= min ? $('.minus').addClass('disable') : $('.minus').removeClass('disable');
                $input.val(count);
                recalculateTotal($input);
                return false;
            });
            $('.plus').click(function () {
                var $input = $(this).parent().find('input');
                var min = $input.data("min");
                $input <= min ? $('.minus').addClass('disable') : $('.minus').removeClass('disable');
                $input.val(parseInt($input.val()) + 1);
                recalculateTotal($input);
                return false;
            });
            $('.fancy_frew').on('click', function (e) {
                e.preventDefault();
            });
            $('.fancy_frew').click(function (e) {
                e.preventDefault();
                var href = $(this).attr('href');
                $.fancybox({
                    wrapCSS: "wrap2", href: href, 'scrolling': 'visible', beforeLoad: function () {
                        setTimeout(function () {
                            $('input, select').trigger('refresh');
                        }, 1)
                    }
                });
            });
            if ($('.select').length) {
                $('.select').styler();
                $('.select').trigger('refresh');
            }
            Mobile3();
            Mobile4();
            $(window).resize(function () {
                Mobile3();
                Mobile4();
            });
            $(".counter_form").on("submit", function (e) {
                e.preventDefault();
                //если не выполняется запрос
                if (!document.in_process){

                    document.in_process = true
                    //сохраняем корзину в сессии
                    recalculateTotal($(this).find("[name=count]"), true);
                    //получаем токен paypal
                    get_paypal_url()
                }
            });
        });
        var paramslick2 = {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            responsive: [{breakpoint: 768, settings: {slidesToShow: 1, slidesToScroll: 1}}]
        };

        function Mobile3() {
            if ((!window.isMobileType3) && $(window).width() < 768) {
                $('.pr_icon').slick(slickParams);
                $('.slider_lend').slick(slickParams);
                $('.slider_lend2').slick(slickParams);
                $('.slider_lend3').slick(slickParams);
                $('.slider_lend33').slick(slickParams);
                $('.slider_lend4').slick(slickParams);
                $('.slid_icon').slick(slickParams);
                $('.slid_col5').slick(slickParams);
                window.isMobileType3 = true;
            }
            if (window.isMobileType3 && $(window).width() >= 767) {
                if ($('.pr_icon').hasClass('slick-initialized')) {
                    $('.pr_icon').slick('unslick');
                }
                ;
                if ($('.slider_lend').hasClass('slick-initialized')) {
                    $('.slider_lend').slick('unslick');
                }
                if ($('.slider_lend2').hasClass('slick-initialized')) {
                    $('.slider_lend2').slick('unslick');
                }
                if ($('.slider_lend3').hasClass('slick-initialized')) {
                    $('.slider_lend3').slick('unslick');
                }
                if ($('.slider_lend33').hasClass('slick-initialized')) {
                    $('.slider_lend33').slick('unslick');
                }
                ;
                if ($('.slider_lend4').hasClass('slick-initialized')) {
                    $('.slider_lend4').slick('unslick');
                }
                ;
                if ($('.slid_icon').hasClass('slick-initialized')) {
                    $('.slid_icon').slick('unslick');
                }
                ;
                if ($('.slid_col5').hasClass('slick-initialized')) {
                    $('.slid_col5').slick('unslick');
                }
                ;window.isMobileType3 = false;
            }
        };

        function Mobile4() {
            if ((!window.isMobileType4) && $(window).width() < 1000) {
                window.isMobileType4 = true;
                $('.slider_l8').slick(paramslick2);
            }
            if (window.isMobileType4 && $(window).width() >= 1000) {
                window.isMobileType4 = false;
                if ($('.slider_l8').hasClass('slick-initialized')) {
                    $('.slider_l8').slick('unslick');
                }
            }
        };

        function recalculateTotal(input, save) {
            var count = input.val();
            var min = input.data("min")
            if (typeof document.price[count]  === "undefined") {
                var price = parseInt(document.price["default"]);
            }
            else {
                var price = parseInt(document.price[count]);
            }
            var delivery = parseInt(document.price["delivery"]);

            if (count > 3) {
                delivery = 0;
            }
            if (count < min) {
                input.val(min);
                count = min;
            }
            var totalPrice = (price * count + delivery);
            $('.order-total').html(price * count);
            $('.order-grand-total').html(totalPrice);
            if (delivery)
                $(".shipping_price").val(document.currency + delivery)
            else {
                $(".shipping_price").val("Free")
            }
            $('.total_price').val(document.currency+totalPrice);
            $('.total_pricex2').text(document.currency+((50 * count) + delivery));
            $('.items_price').val(document.currency+((price * count)));
            $('.items_pricex2').text(document.currency+((50 * count)));

            save = typeof save !== 'undefined' ? save : false;
            if(save) {
                $('body').css({cursor:'wait'});

                $.ajax({
                    url: '/api/set_session_data',
                    method: 'POST',
                    async: false,
                    data: {
                        cart: {
                            sum: totalPrice,
                            count: count,
                            delivery: delivery,
                            price: price,
                            currency: document.currency,
                            source: document.domain
                        }
                    }
                });
            }



            /*****************
             * checkout page
             *****************/
            $('.product_count').text(count);
            $('.product_total_val').text('$'+((price * count) - 0.01));
            $('.checkout .counter_form .total_price, .bottom_total_info .total').text('$'+totalPrice)
        }

        function recalculateTotalb(input) {
            var price = input.data('price');
            var delivery = input.data('delivery');
            var count = input.val();
            $('.order-total-b').html(price * count);
            $('.order-grand-total').html(price * count + delivery);
        }

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $('#meta_viewport').attr({'content': 'minimum-scale=1.0, width=device-width, maximum-scale=1, user-scalable=no'});
        }

        $(document).ready(function() {
            $('.section3 .st_wrap_clear .orig-list').slick({
                dots: true,
                arrows: false,
                infinite: true,
                speed: 500,
                fade: true,
                cssEase: 'linear'
            });

            if ($(window).width() < 769)
                initBenefictsCarousel();

            $(window).on('resize', function() {
                if ($(window).width() > 769 && $('.block_benefits__list').hasClass('slick-slider')){
                    $('.block_benefits__list').slick('unslick');
                } else {
                    if(!$('.block_benefits__list').hasClass('slick-slider'))
                        initBenefictsCarousel();
                }

            });

            function initBenefictsCarousel() {
                $('.block_benefits__list').slick({
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                });
            }


            /*================================================
               custom select
            ================================================*/
            /*
            var countryValue = $('select[name="country"]').data('country-value');
            */
            $('select.custom').each(function(){
                var $this = $(this), numberOfOptions = $(this).children('option').length;

                $this.addClass('select-hidden');
                $this.wrap('<div class="select"></div>');
                $this.after('<div class="select-styled"></div>');

                var $styledSelect = $this.next('div.select-styled');
                $styledSelect.text($this.children('option').eq(0).text());

                var $list = $('<ul />', {
                    'class': 'select-options'
                }).insertAfter($styledSelect);

                for (var i = 0; i < numberOfOptions; i++) {
                    $('<li rel="'+$this.children('option').eq(i).val()+'" data-code="'+$this.children('option').eq(i).data("code")+'">'+$this.children('option').eq(i).text()+'</li>').appendTo($list);
                }

                var $listItems = $list.children('li');
                $listItems.each(function () {
                    if($(this).attr('rel') == $('.select-styled').text()){
                        $(this).addClass('active')
                    }
                });

                $listItems.click(function(e) {
                    e.stopPropagation();
                    $styledSelect.text($(this).text()).removeClass('active');
                    $this.val($(this).attr('rel'));
                    $list.slideUp(300);
                    $(this).addClass('active');
                    $listItems.not($(this)).removeClass('active');
                    $(this).parents('.select').find('select').val($(this).attr('rel'));
                    $('select').trigger('change');

                });

                $(document).click(function() {
                    $styledSelect.removeClass('active');
                    $list.hide();
                });
            });
            /*
            $('.popup_new .select-options li[rel="'+countryValue+'"]').trigger('click');
        */
            $('.select .select-styled').click(function(e) {
                e.stopPropagation();
                // $('div.select-styled.active').not(this).each(function(){
                $('div.select-styled.active').not(this).removeClass('active').next('ul.select-options').slideUp(300);
                // });
                // $(this).toggleClass('active').next('ul.select-options').slideDown(300);
                $(this).toggleClass('active').next('ul.select-options').slideToggle(300);
            });

            $(document).ready(function () {
                $("#lang-select .select-styled").text($("#lang-select li.active").text());
                $("#lang-select li.active").html($("#lang-select li.active").text());
                $("#lang-select li.active").prependTo("#lang-select ul")

            });

            $(document).click(function (e) {
                var container = $(".select .select-options");
                if (container.has(e.target).length === 0){
                    container.slideUp(300).prev().removeClass('active');
                }
            });

            /*================================================
               counter form
            ================================================*/
            $('.counter_form #counter_select').click(function () {
                $('.counter_form .counter_list').stop().slideToggle(300);
            })
            $('.counter_form .form_popup .close').click(function () {
                $('.counter_form .form_popup').fadeOut(300);
            });

            /*================================================
               autocomlite on counter form
            ================================================*/
            $(".counter_list input").on("keyup keydown ",function(event){
                val = $(this).val();
                if (val == ""){
                    $(this).next().find("li").show();
                } else {
                    $(this).next().find("li").each(function () {
                        var str = $(this).text();
                        var regV =  new RegExp(val , "gi");
                        var result = str.match(regV);
                        if (result) {
                            $(this).show();
                        } else {
                            $(this).hide();
                        }
                    });
                }
            });
            jQuery(document).ready(function ($) {
                $(".counter_list li.current").trigger("click");
                $(".counter_list .apply").trigger("click");
            });
            $(".counter_list li").click(function () {
                var name = $(this).text(),
                    iso = $(this).data('flag');
                $(this).parents('.counter_list').find('input').val(name);
                $(this).parents('.counter_list').find('input').attr('data-name',iso);
            });
            $(".counter_list .clear").click(function (e) {
                e.preventDefault();
                $(".counter_list input").val('');
            });
            $(".counter_list .apply").click(function (e) {
                e.preventDefault();
                var countryName = $(".counter_list input").val(),
                    countryISO = $(".counter_list input").attr('data-name');
                $(".counter_list").slideUp(300);
                $('.counter_form #counter_select').text(countryName);
                $('.counter_form #flag_img').css('background-image' , 'url(' + countryISO + ')');
            });
            $(document).mouseup(function (e) {
                var container = $(".change_counter");
                if (container.has(e.target).length === 0){
                    $('.counter_list').slideUp(300);
                }
            });

            /*================================================
               checkout page / edit product
            ================================================*/
            $('.product_cart .info .edit').click(function (e) {
                e.preventDefault();
                $(this).parents('.product_cart').find('.number').fadeToggle(300);
            });

            /*================================================
               cookie functions
            ================================================*/
            var current_date = new Date;

            /*================================================
                блок "Быстрая доставка в город"
            ================================================*/
            var counter = $('.freezing-wrap').data('counter');
            setTimeout(function () {
                +get_cookie ("delivery_cookie") != 1 ? $('.delivery-notify').fadeIn(500) : '';
            }, 30000);
            $('.delivery-notify .close_block').click(function (e) {
                e.preventDefault();
                set_cookie("delivery_cookie", 1, current_date.getFullYear(), current_date.getMonth(), current_date.getDate() + 1);
                $('.delivery-notify').fadeOut(300);
            });

            /*================================================
                блок "Пользователи онлайн"
            ================================================*/
            setTimeout(function () {
                +get_cookie ("online_cookie") != 1 ? $('.online-users-panel').fadeIn(500) : '';
            }, 0);
            $('.online-users-panel .close_block').click(function (e) {
                e.preventDefault();
                set_cookie ( "online_cookie", 1, current_date.getFullYear(), current_date.getMonth(), current_date.getDate()+1 );
                $('.online-users-panel').fadeOut(300);
            });

            /*================================================
                блок "Цена заморожена"
            ================================================*/
            function initFreezing() {
                $('.freezing-wrap').addClass('freezing-active');
                setTimeout(function () {
                    $('.freezing-wrap').addClass('freezing-hide');
                    // $('.buyers-notify').removeClass('freezer');
                }, 20000);
            }
            setTimeout(function () {
                initFreezing();
                setInterval(function () {
                    initFreezing();
                }, 120000)
            }, 6000);

            /*================================================
                блок "Покупки на сайте"
            ================================================*/
            var randInterval = randomInteger(60000,180000);
            function randomInteger(min, max) {
                var rand = min - 0.5 + Math.random() * (max - min + 1);
                rand = Math.round(rand);
                return rand;
            }
            /*
            setInterval(function () {
                    $.getJSON('js/info_buy.json', function (data) {
                            var resultSity = data['sity'][Math.floor(Math.random()*data['sity'].length)],
                            resultName = data['name'][Math.floor(Math.random()*data['name'].length)],
                            resultSurname = data['surname'][Math.floor(Math.random()*data['surname'].length)],
                            resultPrice = data['price'][Math.floor(Math.random()*data['price'].length)];
                        var result = resultName+" "+resultSurname+". from "+resultSity+" placed an order for "+resultPrice;

                        $('body').append('<div class="freezer buyers-notify"><div class="buyers-icon"></div><div class="notify-text">'+ result +'</div></div>')
                    });
                    setTimeout(function () {
                        $('.freezer.buyers-notify').first().fadeOut(500);
                        setTimeout(function (){$('.freezer.buyers-notify').remove()},500);
                    }, 10000);
                    randInterval = randomInteger(60000,180000);
                }, randInterval)
            */

            /*================================================
                current menu item in footer
            ================================================*/
            var locationUrl = window.location.href;
            $('.menu_bottom li').each(function () {
                if($(this).find('a').attr('href') == locationUrl)
                    $(this).addClass('opened')
            });

            /*================================================
                new checkout pages
            ================================================*/
            animateLabelOnChange();
            $( document ).ajaxComplete(animateLabelOnChange);
            function animateLabelOnChange() {
                $('.field input.field__input').each(function () {
                    if($(this).val().length > 0){
                        $(this).parents('.field').addClass('field--show-floating-label');
                    }
                })
            }

            $(document).on('change keyup','.field input.field__input', function () {
                if($(this).val().length > 0){
                    $(this).parents('.field').addClass('field--show-floating-label');
                } else {
                    $(this).parents('.field').removeClass('field--show-floating-label');
                }
            });

            $(document).on('change','.radio-wrapper .input-radio',function () {
                $(this).parents('.radio-wrapper').next('.content-box__row--secondary').removeClass('hidden');
                $('.radio-wrapper .input-radio').not($(this)).parents('.radio-wrapper').next('.content-box__row--secondary').addClass('hidden');
                if ($(this).attr("id") == "checkout_payment_gateway_4159832092" ){
                    $(".section--billing-address").removeClass('hidden');
                }
                else {
                    $(".section--billing-address").addClass('hidden');
                }
            });

            $('input#checkout_different_billing_address_true').change(function () {
                $('#section--billing-address__different').addClass('hidden')
                if($(this).is(':checked'))
                    $('#section--billing-address__different').removeClass('hidden')
            });

            /*
            *   Checkout functions
            * */
            $(".add_to_cart, #add_to_cart").click(function () {
                recalculateTotal($('input[name="count"]'), true);
            });
            $("#checkout_content").on("click", " #paypal-express-checkout-btn", function () {
                get_paypal_url()
            });

            //------checkout form----------//

            $("#checkout_content").on("submit", "#checkout_form", function (e) {
                if(validateInputValue("") > 0)
                    return false;
                e.preventDefault();
                $.ajax({
                    url: '/checkout/submit',
                    type: 'POST',
                    async: false,
                    data: $(this).serialize(),
                    success: function (response) {
                        $("#checkout_content").html(response);
                    }
                });
            })


            ///payment form
            $("#checkout_content").on("submit", "#payment_complete", function (e) {
                e.preventDefault()
                if ($("#payment_alipay_input").prop( "checked" ) == true){
                    $.ajax({
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        url: 'pay/alipay',
                        method: 'POST',
                        success: function (response) {
                            window.location=response
                        }
                    });

                    return false;
                }

                if ($("#payment_liqpay_input").prop( "checked" ) == true) {
                    $.ajax({
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        url: 'pay/liqpay',
                        method: 'POST',
                        success: function (response) {
                            window.location=response
                        }
                    });

                    return false;
                }
                if ($("#checkout_payment_gateway_4159799324").prop( "checked" ) == true){

                    get_paypal_url();

                    return false;
                }

                if($("#checkout_different_billing_address_true").prop("checked")==true){
                    validateInputValue()
                }

                $.ajax({
                    url: '/pay/pay',
                    type: 'POST',
                    async: false,
                    data: $(this).serialize(),
                    success: function (response) {
                        window.location=response
                    }
                });
            })

            //Navigation
            $("#checkout_content").on("click", ".breadcrumb__link", function (e) {
                e.preventDefault()
                var view = $(this).data("view");
                $.ajax({
                    url: '/checkout/get_step/'+view,
                    type: 'GET',
                    async: false,
                    success: function (response) {
                        $("#checkout_content").html(response);
                    }
                });

            })

            //cancel invalid field
            $("#checkout_content").on("focus", "input", function (e) {
                $(this).parent().removeClass("invalid_input");
            })

            function validateInputValue(thisElement) {
                thisElement = typeof thisElement !== 'undefined' ? thisElement : "";
                var parent = parent || '';
                var error = 0,
                    elements = $('.validate_input input');
                if(thisElement != '') {
                    elements = thisElement.parents('.edit_block').find('.validate_input input');
                }
                elements.each(function () {
                    $(this).parents('.validate_input').removeClass('invalid_input');
                    if($(this).attr('name') == 'checkout[email]'){
                        if (!(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test($(this).val()))) {
                            $(this).parents('.validate_input').addClass('invalid_input');
                            error++;
                        }
                    }
                    if($(this).attr('name') != 'checkout[email]' && $(this).val().length < 1){
                        $(this).parents('.validate_input').addClass('invalid_input');
                        error++;
                    }
                });

                return error;
            }

            $(document).on('click','.edit_block .apply',function (e) {
                e.preventDefault();

                if(validateInputValue($(this)) == 0){
                    var form = $(this).closest(".edit_block");
                    $(form).trigger("submit");
                }

            });


            //******edit_data_form
            $("#checkout_content").on("submit", ".edit_block", function (e) {
                e.preventDefault();
                $.ajax({
                    url: '/checkout/edit',
                    type: 'POST',
                    async: false,
                    data: $(this).serialize(),
                    success: function (response) {
                        console.log(response.shipping_address)
                        $(".checkout_email_info").text(response.email)
                        $(".checkout_shipping_info").text(response.shipping_address)
                    }
                });


                $(this).slideToggle(300);
            });

            $(document).on('click','.review-block__link .link--small',function (e) {
                e.preventDefault();
                $(this).parent().next('.edit_block').slideToggle(300);
                $('.review-block__link .link--small').not($(this)).parent().next('.edit_block').slideUp(300);
            })

            $("#checkout_content").on('click', '.saved_address_title',function(){
                $('.select_saved_address ul').slideToggle(300);
            });
            $("#checkout_content").on('click', '.select_saved_address li', function(){
                $('.select_saved_address ul').slideUp(300);
                $('.saved_address_title').text($(this).text());
                $('[name="checkout[shipping_address][first_name]"]').val($(this).data("first_name"))
                $('[name="checkout[shipping_address][last_name]"]').val($(this).data("last_name"))
                $('[name="checkout[shipping_address][address1]"]').val($(this).data("address1"))
                $('[name="checkout[shipping_address][address2]"]').val($(this).data("address2"))
                $('[name="checkout[shipping_address][city]"]').val($(this).data("city"))
                $('[name="checkout[shipping_address][country]"]').val($(this).data("country"))
                $('[name="checkout[shipping_address][zip]"]').val($(this).data("zip"))
            });

            /*
            *  End Checkout
            * */

            /*
                Google map in contact page
             */
            var marker;
            function pageOnLoad() {
                var centerLatLng = new google.maps.LatLng(17.4981835, -88.1847282);
                var mapOptions = {
                    zoom: 16,
                    center: centerLatLng,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    navigationControlOptions: {
                        style: google.maps.NavigationControlStyle.ZOOM_PAN
                    }
                };
                var map = new google.maps.Map(document.getElementById("contact_map"), mapOptions);
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(17.4991835, -88.1827282),
                    map: map,
                    icon: 'images/marker.png'
                });
            }
            $('#contact_map').length > 0 ? pageOnLoad() : '';

            /*
                Account details
             */

            $(".account-orders-item").click(function () {
                var track = $(this).data("track");
                var obj = $(this)
                if (track != ""){
                    $.ajax({
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        type: 'POST',
                        dataType: "json",
                        url: "/api/get_track_status?track_number="+track,
                        success: function ($success) {
                            if ($success.data.events.length){
                                $(obj).append('<div>'+ $success.data.events[$success.data.events.length - 1].operationAttributeOriginal +'</div>')
                            }
                        },
                    });
                }
            })



            $(".account-details-controls__item_add").click(function () {
                $("#account-details-popup .account-details__item").val("");
                $("#account-details-popup form").attr("data-action", "add");
            });
            $(".account-details-controls__item_edit").click(function () {
                $("#account-details-popup .account-details__item").val("");
                form =  $("#account-details-popup form")
                $(form).attr("data-action", "edit").attr("data-id", $(this).attr("data-id"));
                $(form).find("[name=first_name]").val($(this).attr("data-first_name"));
                $(form).find("[name=last_name]").val($(this).attr("data-last_name"));
                $(form).find("[name=address1]").val($(this).attr("data-address1"));
                $(form).find("[name=address2]").val($(this).attr("data-address2"));
                $(form).find("[name=city]").val($(this).attr("data-city"));
                $(form).find("[name=country] [value="+$(this).attr("data-country")+"]").prop("selected", true);
                $(form).find(".select .select-styled").text($(this).attr("data-country"));
                $(form).find("[name=zip]").val($(this).attr("data-zip"));

            });


            $(".account-details-controls__item_edit, .account-details-controls__item_add").fancybox({});


            $.validator.addMethod("valueNotEquals", function(value, element, arg){
                return arg !== value;
            }, "Value must not equal arg.");

            $("#account-details-popup form").validate({
                rules: {
                    first_name: {required: true,  maxlength: 50},
                    last_name: {required: true, maxlength: 50},
                    address1: {required: true, maxlength: 100},
                    city: {required: true,  maxlength: 50},
                    country: {valueNotEquals: "hide" },
                    zip: {required: true, maxlength: 17}
                },
                messages: {
                    first_name: {required: "Enter name and surname", maxlength: "many characters"},
                    last_name: {required: 'Enter address',  maxlength: "many characters"},
                    address1: {required: 'Enter city',  maxlength: "many characters"},
                    city: {required: 'Enter city', maxlength: "many characters"},
                    country: {required: 'Enter city'},
                    zip: {required: "Enter postcode",  maxlength: "many characters"}
                },
                submitHandler: function () {
                    var form = $("#account-details-popup form");
                    var action = $(form).data("action")
                    if (action == "add") {
                        var route = "add_address"
                    }
                    else {
                        var route = "edit_address?id="+$(form).attr("data-id")
                    }
                    $.ajax({
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        url: '/account/'+route,
                        type: 'POST',
                        data: $(form).serialize(),
                        success: function (response) {
                            window.location.reload();
                        }
                    });
                }

            });

            $('.account-details__item_close').click(function (e) {
                e.preventDefault();
                var currentBlock = $(this).closest('.account-details');
                currentBlock.fadeOut(300);
                var id = $(this).data("id");
                $.ajax({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    url: '/account/delete_address',
                    type: 'POST',
                    data: {
                        _method : "DELETE",
                        id : id
                    },
                    success: function (response) {
                        window.location.reload();
                    }
                });
                setTimeout(function () {
                    currentBlock.remove();
                },300)
            });

            /*
            *   Баннер 18+ (Фото до и после)
            */

            if(+get_cookie ("ageLimit") != 1) {
                $('.tf_agelimit_popup_wrapp').fadeIn(300)
            }
            $('.tf_agelimit_ok').click(function (e) {
                e.preventDefault();
                ;
                set_cookie ( "ageLimit", 1, current_date.getFullYear(), current_date.getMonth(), current_date.getDate()+1 );
                $('.tf_agelimit_popup_wrapp').fadeOut(300);
            })

            /*
            *   Mobile menu
            */

            $(".head_menu .block-toggle_nav").click(function(){
                console.log('test')
                if(!$(this).hasClass('open')){
                    $(this).addClass("open");
                    $('#toggle').addClass("on");
                    $("#menu1").stop(true,true).fadeIn('slow');
                }
                else{
                    $('#toggle').removeClass("on");
                    $("#menu1").fadeOut('slow');
                    $(this).removeClass("open");
                }
            });
            $(".foot_menu .block-toggle_nav").click(function(){
                if(!$(this).hasClass('open')){
                    $(this).addClass("open");
                    $('#toggle2').addClass("on");
                    $("#menu2").stop(true,true).slideDown('slow');
                }else{
                    $('#toggle2').removeClass("on");
                    $("#menu2").slideUp('slow');
                    $(this).removeClass("open");}
            });

            $('.renut-policy-popup').magnificPopup({
                type: 'inline',
            });

        });

        function set_cookie ( name, value, expires_year, expires_month, expires_day, path, domain, secure ) {
            var cookie_string = name + "=" + escape ( value );

            if ( expires_year )
            {
                var expires = new Date ( expires_year, expires_month, expires_day );
                cookie_string += "; expires=" + expires.toGMTString();
            }

            if ( path )
                cookie_string += "; path=" + escape ( path );

            if ( domain )
                cookie_string += "; domain=" + escape ( domain );

            if ( secure )
                cookie_string += "; secure";

            document.cookie = cookie_string;
        }
        function delete_cookie ( cookie_name ) {
            var cookie_date = new Date ( );  //Ткущая дата и время
            cookie_date.setTime ( cookie_date.getTime() - 1 );
            document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
        }
        function get_cookie ( cookie_name ) {
            var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );

            if ( results )
                return ( unescape ( results[2] ) );
            else
                return null;
        }
        function get_paypal_url() {
            $.ajax({
                url: '/pay/paypal',
                type: 'GET',
                async: false,
                success: function (response) {
                    if (response.response == "success"){
                        window.location = response.url
                    } else if (response.response == "error"){
                        alert(response.message)
                    }

                },
                complete: function () {
                    document.in_process = true
                }
            });
        }