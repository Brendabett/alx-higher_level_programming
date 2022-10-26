.ready(function () {
  $.get('https://fourtonfish.com/hellosalut/?lang=fr', function (data) {
    .text(data.hello);
  });
});
