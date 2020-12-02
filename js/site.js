function dropdownToggle() {
  if (document.querySelector(".drop_list").classList.contains("show")) {
      document.querySelector(".drop_list").classList.remove("show");
  } else {
      document.querySelector(".drop_list").classList.add("show");
  }
}
  
  window.onclick = function(event) {
  if (!event.target.matches('.drop_button')) {
    var items = document.getElementsByClassName("drop_list");
    for (var i = 0; i < items.length; i++) {
      var open = items[i];
      if (open.classList.contains('show')) {
        open.classList.remove('show');
      }
    }
  }
}