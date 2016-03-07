'use strict';
/**
 * Exp Conf JS
 * Funny JS stuff by @bobvanluijt
 */
jQuery(document)
	.ready(function(){

		/**
		 * Scope globals
		 */
			var rotateTheBrain_i = 0; // global scope I
			var rotateTheBrainLastScroll = 0;
			var rotateTheBrainReversing = false;
			var heightOfMenuBar = 82;

		/**
		 * Init the register button
		 */
		function setRegisterButtonInit(event){
			jQuery('#registerLabel')
				.click(function(){
					window
						.location
						.assign('register.html');
				})
		}

		/**
		 * Set register button
		 */
		function setRegisterButton(event){
			
			var st = jQuery(window)
						.scrollTop();

			/**
			 * Determine if label should be shown
			 */
			if(st > heightOfMenuBar){
				if(!jQuery('#registerLabel').hasClass('show')){
					jQuery('#registerLabel')
						.addClass('show');
				}
			} else {
				if(jQuery('#registerLabel').hasClass('show')){
					jQuery('#registerLabel')
						.removeClass('show');
				}
			}

			/**
			 * Determine if label should have fulltext
			 */
			if(st > jQuery('#headBar').height()){
				jQuery('#registerLabel')
					.text('R');
			} else {
				jQuery('#registerLabel')
					.text('Register');
			}

		}

		/**
		 * Set the size of the brandbar
		 */
		function setBrandbar(i){

			var newHeight = jQuery(window).height() - heightOfMenuBar;
			var heightLimit = 590;

			if(jQuery(window).height() < heightLimit){
				newHeight = heightLimit - heightOfMenuBar; // set to 572px, otherwise it becomes to small
			}

			jQuery('#headBar')
				.height(newHeight); // 82 = The Guide nav height
		}

		/**
		 * Fadein the head and other items
		 */
		function initHead(){
			jQuery('.Head') // fade in head
				.animate({
					'opacity': 1
				}, 'slow', function(){

					jQuery('.eventLogo')
						.fadeIn('slow');

					setTimeout(function(){
						jQuery('.conferenceLocation')
								.fadeIn('slow', function(){
									jQuery('.conferenceDate')
										.fadeIn('slow');
								});
					}, 150);

					setTimeout(function(){
						jQuery('.conferenceDate')
								.fadeIn('slow');
					}, 300)

				});
		}

		/**
		 * Flash the brain
		 */
		function flashTheBrain(){
			/**
			 * Orange and Red
			 */
			var polsAndPaths = jQuery('.Head')
									.find('#Colors')
									.find('polygon, path');

				setInterval(function(){

					var brainChunkToChange = Math.floor(Math.random() * polsAndPaths.length) + 1;

					var brainChunkOriginalColor = polsAndPaths
													.eq(brainChunkToChange)
													.attr('fill');
					polsAndPaths
						.eq(brainChunkToChange)
						.css({fill: "white", transition: "100ms"});

					setTimeout(function(){
						polsAndPaths
							.eq(brainChunkToChange)
							.css({fill: brainChunkOriginalColor, transition: "100ms"});
					}, 120);

				}, 200)
		}

		/**
		 * Wobble the brain on R press
		 */
		function wobbleTheBrain(input){

			if(input === 'start'){
				jQuery('.Head')
					.find('#Colors')
					.css({
						'-webkit-animation-name': 'BRAINITCH',
					    '-webkit-animation-duration': '0.5s',
					    '-webkit-transform-origin': '50% 50%',
					    '-webkit-animation-iteration-count': 'infinite',
					    '-webkit-animation-timing-function': 'linear'
					});
			} else {
				jQuery('.Head')
					.find('#Colors')
					.css({
						'-webkit-animation-name': '',
						'-webkit-transform': 'translate(0px, 0px) rotate(0deg)'
					});
			}
		}

		/**
		 * Rotate the brain on scrolling
		 */
		function rotateTheBrain(event){

			if(rotateTheBrainReversing === false){
				var st = jQuery(window).scrollTop();
				if (st > rotateTheBrainLastScroll){

					rotateTheBrain_i += 2;

					jQuery('.Head')
						.css('transform', 'rotateY(' + rotateTheBrain_i + 'deg)')

				} else {
					
					rotateTheBrainReversing = true;
					
					var rotateInterval = setInterval(function(){
						if(rotateTheBrain_i < 1){
							clearInterval(rotateInterval);
							rotateTheBrainReversing = false;
						} else {
							rotateTheBrain_i--;
							jQuery('.Head')
						      		.css('transform','rotateY('+rotateTheBrain_i+'deg)'); 	
						}
					}, 5);		
				}
				
				rotateTheBrainLastScroll = st;
			}
		}

		/**
		 * On start, resize etc
		 */

				/**
				 * Init the head
				 */
				initHead();
				/**
				 * Flip the brain on 'R' key
				 */
				jQuery(document)
					.keydown(function(e){
						if(e.keyCode == 82){
							wobbleTheBrain('start');
						}
					})
					.keyup(function(e){
						wobbleTheBrain('stop');
					})
				/**
				 * Set the brandbar
				 */
				setBrandbar();
				/**
				 * Flashy brain animations
				 */
				flashTheBrain();
				/**
				 * rotate brain on scroll effect
				 * DISABLED
				 */
				/*
				jQuery(window)
					.scroll(function(event){
						rotateTheBrain(event);
					});
				*/
				/**
				 * set the register button when needed
				 */
				jQuery(window)
					.scroll(function(event){
						setRegisterButton(event);
					});
				setRegisterButtonInit();
		/**
		 * set size on change
		 */
		jQuery(window)
			.resize(function() {
				setBrandbar();
			});
});