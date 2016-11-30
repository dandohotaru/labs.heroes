
$(document).ready(function() {

    var headerLoader = $.get("/app/shared/header.hbs");
    var menuLoader = $.get("/app/shared/menu.hbs");
    var footerLoader = $.get("/app/shared/footer.hbs");
    var notificationsLoader = $.getJSON("/api/notificatios.json");
    var themesLoader = $.getJSON("/api/themes.json");
    var commissionsLoader = $.getJSON("/api/commissions.json");

    $.when(headerLoader, menuLoader, footerLoader, notificationsLoader, themesLoader, commissionsLoader)
        .done(function(headerResult, menuResult, footerResult, notificationsResult, themesResult, commissionsResult) {

            // Header
            var notificationsData = notificationsResult[0];
            var headerPartial = $($.parseHTML(headerResult[0])).filter("#header-partial").html();
            var headerTemplate = Handlebars.compile(headerPartial);
            var headerMarkup = headerTemplate({
                user: {
                    firstName: "John",
                    lastName: "Doe"
                },
                notifications: notificationsData
            });
            $("#header").html(headerMarkup);

            // Menu
            var themesData = _.map(themesResult[0].themes, function(p) {
                return {
                    id: p.id,
                    name: p.name,
                    counter: p.subthemes.length,
                    url: "browse/cards.html?themeId=" + p.id
                };
            });
            var commissionsData = _.map(commissionsResult[0], function(p) {
                return {
                    name: p.name,
                    counter: Math.floor((Math.random() * 100) + 1),
                    url: "browse/cards.html?commission=" + p.name
                };
            });
            var menuHtml = $($.parseHTML(menuResult[0])).filter("#menu-partial").html();
            var menuTemplate = Handlebars.compile(menuHtml);
            $("#menu").html(menuTemplate({
                themes: themesData,
                commissions: commissionsData,
            }));

            // Footer
            var footerHtml = $($.parseHTML(footerResult[0])).filter("#footer-partial").html();
            var footerTemplate = Handlebars.compile(footerHtml);
            $("#footer").html(footerTemplate({
                lastUpdate: "30th of November 2016"
            }));

        }).fail(function(error) {
            console.error(error);
        });
});


