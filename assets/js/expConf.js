/**
 * Exp Conf JS
 */

function setBrandbar(i){
	jQuery('#headBar')
		.height(jQuery(window).height() - 82);
}

function initHead(){
	jQuery('.Head')
		.animate({
			'opacity': 1,
			'margin-left': '-21%'
		}, 'slow');
}

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

var rotateTheBrain_i = 0; // global scope I
var rotateTheBrainLastScroll = 0;
var rotateTheBrainReversing = false;
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
jQuery(document)
	.ready(function(){
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
		setBrandbar();
		flashTheBrain();
		jQuery(window)
			.scroll(function(event){
				rotateTheBrain(event);
			});
	});

jQuery(window)
	.resize(function() {
		setBrandbar();
	});