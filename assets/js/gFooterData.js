angular.module('gFooter').service('gFooterData', function(){
    var data = {};

    data.footer = {
        "footerLinks":[
            {"name":"About ING","href":""},
            {"name":"Privacy and cookies","href":""},
            {"name":"Disclaimer","href":""},
            {"name":"Accessibility","href":""}
        ],
        "socialMediaTitle":"Follow us:",
        "socialMediaLinks":[
            {
                "medium":"facebook",
                "rawUrl":"https://www.facebook.com/INGnl",
                "linkTitle":"ING on Facebook",
                "target":"Nieuw venster",
                "url":"https://www.facebook.com/INGnl"
            },
            {
                "medium":"twitter",
                "rawUrl":"https://www.facebook.com/INGnl",
                "linkTitle":"ING on Twitter",
                "target":"Nieuw venster",
                "url":"https://www.facebook.com/INGnl"
            },
            {
                "medium":"linkedin",
                "rawUrl":"https://www.facebook.com/INGnl",
                "linkTitle":"ING on LinkedIn",
                "target":"Nieuw venster",
                "url":"https://www.facebook.com/INGnl"
            },
            {
                "medium":"youtube",
                "rawUrl":"https://www.youtube.com/INGnl",
                "linkTitle":"ING on youtube",
                "target":"Nieuw venster",
                "url":"https://www.youtube.com/INGnl"
            },
            {
                "medium":"googleplus",
                "rawUrl":"https://www.facebook.com/INGnl",
                "linkTitle":"ING on Google+",
                "target":"Nieuw venster",
                "url":"https://www.facebook.com/INGnl"
            },
            {
                "medium":"instagram",
                "rawUrl":"http://instagram.com/ingnederland",
                "linkTitle":"ING on Instagram",
                "target":"Nieuw venster",
                "url":"http://instagram.com/ingnederland"
            }
        ]
    };
    return data;
});