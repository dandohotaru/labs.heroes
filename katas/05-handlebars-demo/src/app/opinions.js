$(document).ready(function() {

    var headerLoader = $.get("/app/shared/header.hbs");
    var menuLoader = $.get("/app/shared/menu.hbs");
    var footerLoader = $.get("/app/shared/footer.hbs");
    var notificationsLoader = $.getJSON("/api/notificatios.json");
    var themesLoader = $.getJSON("/api/themes.json");

    $.when(headerLoader, menuLoader, footerLoader, notificationsLoader, themesLoader)
        .done(function(headerResult, menuResult, footerResult, notificationsResult, themesResult) {

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
                    url: "opinions/cards.html?themeId=" + p.id
                };
            });
            var menuHtml = $($.parseHTML(menuResult[0])).filter("#menu-partial").html();
            var menuTemplate = Handlebars.compile(menuHtml);
            $("#menu").html(menuTemplate({
                themes: themesData
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


