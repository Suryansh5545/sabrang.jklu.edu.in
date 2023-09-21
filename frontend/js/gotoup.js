$(document).ready(function () {
  $(".gototop").click(function (event) {
    event.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, 1000);
  });
});
