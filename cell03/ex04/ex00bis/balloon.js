$(function () {
  let size = 200;
  let colors = ["red", "green", "blue"];
  let index = 0;

  $("#balloon").click(function () {
    size += 10;
    index = (index + 1) % colors.length;

    if (size > 420) {
      size = 200;
      index = 0;
    }

    $(this).css({
      width: size + "px",
      height: size + "px",
      background: colors[index]
    });
  });

  $("#balloon").mouseleave(function () {
    size -= 5;
    if (size < 200) size = 200;

    index = (index - 1 + colors.length) % colors.length;

    $(this).css({
      width: size + "px",
      height: size + "px",
      background: colors[index]
    });
  });
});
