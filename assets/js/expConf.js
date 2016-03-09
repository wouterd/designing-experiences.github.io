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
			var heightOfMenuBar = 62;

		/**
		 * Init the register button
		 */
		function setRegisterButtonInit(event){
			jQuery('#registerLabel')
				.click(function(){
					window
						.location
						.assign('http://goo.gl/forms/A6SJ9c2jx7');
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
		 * Start the movement of objects
		 */
		function startMovements(){

			var items_i = 0;

			setInterval(function(){

				var currentCircle = 'circle_' + (items_i++);

				jQuery('#headBar')
					.prepend('<img id="' + currentCircle + '">');

				var currentCircleObj = jQuery('#' + currentCircle);

				/** 
				 * Set the actual circle
				 */
				currentCircleObj
					.attr('src', 'assets/img/circle' + Math.round(Math.random() * (3 - 1) + 1) + '.svg')

				/**
				 * Determine height
				 */
				currentCircleObj
					.css('top', Math.round(Math.random() * (jQuery('#headBar').height() - 1) + 1) + 'px')

				/**
				 * Decide left or right, 1 = left, 2 = right
				 */
				if(Math.round(Math.random() * (2 - 1) + 1) === 1){
					/**
					 * Go left
					 */
					var direction = 'left';
				} else {
					/** 
					 * Go right
					 */
					var direction = 'right';
				}

				currentCircleObj
					.css(direction, '-100px')

				var currentCircleDuration = Math.round(Math.random() * (12000 - 4000) + 4000);

				var directionObject = {};
					directionObject[direction] = jQuery(window).width() + 100;

				currentCircleObj
					.animate(directionObject, {
						step: function(currentLeft, currentTotal){

							if(Math.round(currentLeft) < (currentTotal.end / 2)){
								/**
								 * Arc goes up
								 */
								var newTop = parseInt(jQuery(currentCircleObj).css('top')) - 1;
							} else {
								/**
								 * Arc goes down
								 */
								var newTop = parseInt(jQuery(currentCircleObj).css('top')) + 1;
							}

							jQuery(currentCircleObj)
								.css('top', newTop + 'px')
						},
						duration: currentCircleDuration,
						complete: function(t){
							currentCircleObj
								.remove()
						}
					})

				/**
				 * Stop on click
				 */
				currentCircleObj
					.click(function() {
					    currentCircleObj
					    	.stop(true,false);

					    /**
					     * Calculate the location of the head with native JS
					     */
					    var headsObj = window.getComputedStyle(document.getElementsByClassName("Head")[0], null),
					    	headsLocationLeft = parseInt(headsObj.left) - (parseInt(headsObj.width) / 2),
					    	headsLocationRight = parseInt(headsObj.left) + (parseInt(headsObj.width) / 2);
					    console.log(headsLocationLeft, headsLocationRight, headsObj.width);

					    /**
					     * Calculate if circle hits the head
					     */
					    console.log( jQuery(this).offset().left );
						
					    currentCircleObj
					    	.animate({
					    		top: Math.round(jQuery('#headBar').height() + 100) + 'px'
					    	}, 'slow', function(){
					    		jQuery(currentCircleObj)
					    			.remove()
					    	})

					});

			}, Math.round(Math.random() * (6200 - 3200) + 3200));

		}

		/**
		 * Drop object on head
		 */
		function dropOnHead(){}

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

						if(e.keyCode == 77){ /* when m is pressed */
							startMovements();
						}

						if(e.keyCode == 68){ /* when d is pressed */
							dropOnHead();
						}

						if(e.keyCode == 82){ /* when r is pressed */
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