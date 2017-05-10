function move(ev) {
  var pos = 500;
  var el = ev.target;
  el.style.color = '#fff';
  el.onclick = ''

  var id = setInterval(function() {
    if (pos === 30) {
      clearInterval(id);
    } else {
      pos -= 10;
      el.style.left = pos + 'px';
    }
  }, 10);
}
