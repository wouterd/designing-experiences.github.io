angular.module('gTopNavigation').service('gTopNavigationData', function(){
    var data = {};

    data.segments = [
        {"href": "/#XDConf", "name": "About"},
        {"href": "/#Speakers", "name": "Speakers"},
        {"href": "/#Location", "name": "Location"},
        {"href": "/#Register", "name": "Register"},
        {"href": "/#GetInTouch", "name": "Get in Touch"}
    ];

    data.segmentActive = 'Experience Design';

    return data;
});
