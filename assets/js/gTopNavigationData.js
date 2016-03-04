angular.module('gTopNavigation').service('gTopNavigationData', function(){
    var data = {};
    
    data.segments = [
        {"href": "/#Home", "name": "Home"},
        {"href": "/#Speakers", "name": "Speakers"},
        {"href": "/#Location", "name": "Location"},
        {"href": "/#Register", "name": "Register"},
        {"href": "/#GetinTouch", "name": "Get in Touch"}
    ];

    data.segmentActive = 'Experience Design';
    
    return data;
});
