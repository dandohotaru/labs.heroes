
$(document).ready(function () {

  var mainLoader = $.get("./app/main.hbs");
  var headerLoader = $.get("./app/shared/header.hbs");
  var footerLoader = $.get("./app/shared/footer.hbs");

  // $.when(mainLoader, headerLoader, footerLoader)
  //   .done(function (mainResult, headerResult, footerResult) {

  //     var mainHtml = $($.parseHTML(mainResult[0])).filter("#main-partial").html();
  //     var headerHtml = $($.parseHTML(headerResult[0])).filter("#header-partial").html();
  //     var footerHtml = $($.parseHTML(footerResult[0])).filter("#footer-partial").html();

  //     var template = Handlebars.compile(mainHtml);

  //     Handlebars.registerPartial({
  //       foo: headerHtml,
  //       bar: footerHtml
  //     });

  //     var data = {
  //       "test": [{
  //         foo: "Foo",
  //         "foo_bar": "Foo-Bar",
  //         bar: "Bar",
  //         bar_foo: "Bar-Foo"
  //       }, {
  //         foo: "Foo2",
  //         "foo_bar": "Foo-Bar2",
  //         bar: "Bar2",
  //         bar_foo: "Bar-Foo2"
  //       }]
  //     };

  //     $("#content").html(template(data));

  //   }).fail(function (error) {
  //     console.error(error);
  //   });

  $.when(mainLoader, headerLoader, footerLoader)
    .done(function (mainResult, headerResult, footerResult) {

      var headerHtml = $($.parseHTML(headerResult[0])).filter("#header-partial").html();
      var footerHtml = $($.parseHTML(footerResult[0])).filter("#footer-partial").html();

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


