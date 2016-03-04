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

		/**
		 * Set the size of the brandbar
		 */
		function setBrandbar(i){
			jQuery('#headBar')
				.height(jQuery(window).height() - 82); // 82 = The Guide nav height
		}

		/**
		 * Fadein the head and other items
		 */
		function initHead(){
			jQuery('.Head') // fade in head
				.animate({
					'opacity': 1,
					'margin-left': '-21%',
					'width': '42%',
					'height': '42%'
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
				 */
				jQuery(window)
					.scroll(function(event){
						rotateTheBrain(event);
					});
		/**
		 * set size on change
		 */
		jQuery(window)
			.resize(function() {
				setBrandbar();
			});
});