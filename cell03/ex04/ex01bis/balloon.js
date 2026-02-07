$(function () {
  let size = 200;
  let colors = ["red", "green", "blue"];
  let i = 0;

  $("#balloon").click(function () {
    size += 10;
    i = (i + 1) % colors.length;

    if (size > 420) {
      size = 200;
      i = 0;
    }

    $(this).css({
      width: size + "px",
      height: size + "px",
      background: colors[i]
    });
  });

  $("#balloon").mouseleave(function () {
    size -= 5;
    if (size < 200) size = 200;

    i = (i - 1 + colors.length) % colors.length;

    $(this).css({
      width: size + "px",
      height: size + "px",
      background: colors[i]
    });
  });
});
