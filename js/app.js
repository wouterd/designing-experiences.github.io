angular.module('ingExperience', [
	'ingGlobal',
	'ingComponents',
	'gTopNavigation',
	'gFooter',
	'tgCheckbox',
	'tgCollapsible',
	'tgComparisonTable',
	'tgFullCover',
	'tgIcon',
	'tgImage',
	'tgList',
	'tgRadio',
	'tgRibbon',
	'tgSplitList',
	'tgToggle',
	'tgUtils'
]).directive('topNavigation', ['mqService', '$rootScope', function (mqService, $rootScope) {
	return {
		restrict: 'EA',
		scope: true,
		replace: true,
		link: function(scope, elt, attrs, ctrl) {
			var breakPointWidth = mqService.getBreakPoint('md');
			var tabletWidth = mqService.getBreakPoint('lg');
			$rootScope.$on('window-resize', function(event, docWidth, mqObj){
				var mobileWidth = (mqObj.width < breakPointWidth);
				scope.mobile = mobileWidth;
				scope.tablet = (mqObj.width < tabletWidth);
				scope.$apply();
			});
		}
	}
}]);

/**
 * Custom Google Maps
 */
function initMap() {
	var b, d = {
	    zoom: 16,
	    center: new google.maps.LatLng(52.3660036, 4.9143381),
	    mapTypeId: "terrain"
	};
	b = new google.maps.Map(jQuery("#map")[0], d);
	for (var e = [{
	        lat: 52.3660036,
	        lng: 4.9168381
	    }], f = 0; f < e.length; f++) {
	    var g = e[f],
	        h = new google.maps.LatLng(g.lat, g.lng);
	    new google.maps.Marker({
	        position: h,
	        map: b,
	        icon: new google.maps.MarkerImage("http://designing-experiences.github.io/img/pointer.png", null, null, null, new google.maps.Size(58, 58)),
	        optimized: !1
	    })
	}
}