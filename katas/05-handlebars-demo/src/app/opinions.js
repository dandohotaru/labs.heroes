$(document).ready(function () {

  var homeLoader = $.get("./shared/home.hbs");
  var headerLoader = $.get("./shared/header.hbs");
  var footerLoader = $.get("./shared/footer.hbs");

  $.when(homeLoader, headerLoader, footerLoader)
    .done(function (homeResult, headerResult, footerResult) {

      var homeHtml = $($.parseHTML(homeResult[0])).filter("#home-partial").html();
      var headerHtml = $($.parseHTML(headerResult[0])).filter("#header-partial").html();
      var footerHtml = $($.parseHTML(footerResult[0])).filter("#footer-partial").html();

      var homeTemplate = Handlebars.compile(homeHtml);
      $("#home").html(homeTemplate());

      var headerTemplate = Handlebars.compile(headerHtml);
      var headerData = {
        foo: "Foo",
        "foo_bar": "Foo-Bar",
        bar: "Bar",
        bar_foo: "Bar-Foo"
      };
      $("#header").html(headerTemplate(headerData));

      var footerTemplate = Handlebars.compile(footerHtml);
      var footerData = {
        bar: "Bar2",
        bar_foo: "Bar-Foo2"
      };
      $("#footer").html(footerTemplate(footerData));


    }).fail(function (error) {
      console.error(error);
    });

});


