/**
 * Exp Conf JS
 */

function setBrandbar(i){
	jQuery('#headBar')
		.height(jQuery(window).height() - 82);
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

/**
 * On start, resize etc
 */
jQuery(document)
	.ready(function(){
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
	});

jQuery(window)
	.resize(function() {
		setBrandbar();
	});