
$(document).ready(function () {
    'use strict';
    var allQuestions;

    var load = function (url, tplId, anchor) {
        $.getJSON(url, function (data) {
            var template = $(tplId).html();
            var stone = Handlebars.compile(template)(data);
            $(anchor).append(stone);
        })
            .fail(function (err) {
                console.log(err);
            });
    };

    load('persons.json', '#template', '#content'); 
});


