$(document).ready(function () {

  var headerLoader = $.get("/app/shared/header.hbs");
  var footerLoader = $.get("/app/shared/footer.hbs");
  var notificationsLoader = $.getJSON("/api/notificatios.json");

  $.when(headerLoader, footerLoader, notificationsLoader)
    .done(function (headerResult, footerResult, notificationsResult) {

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

      // Footer
      var footerHtml = $($.parseHTML(footerResult[0])).filter("#footer-partial").html();
      var footerTemplate = Handlebars.compile(footerHtml);
      $("#footer").html(footerTemplate({
        lastUpdate: "30th of November 2016"
      }));

    }).fail(function (error) {
      console.error(error);
    });

});


