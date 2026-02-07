function save() {
  document.cookie = "todo=" + $('#ft_list').html();
}

function load() {
  const c = document.cookie.split('=');
  if (c[0] === 'todo') $('#ft_list').html(c[1]);
}

$('#new').click(function () {
  const text = prompt('New TO DO');
  if (!text) return;

  const item = $('<div>').text(text);
  item.click(function () {
    if (confirm('Remove this TO DO?')) {
      $(this).remove();
      save();
    }
  });

  $('#ft_list').prepend(item);
  save();
});

load();
