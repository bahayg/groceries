$(document).ready(function() {
  $("#formOne").submit(function(event) {
  var items = ["item1", "item2", "item3", "item4", "item5", "item6"];
  var orderedList = items.map(function(item) {
    return item.toUpperCase();
  });
  orderedList.forEach(function(item){
      $(".itemList").append("<li>" + items + "</li>");

  });

      $(".itemList").show();

  event.preventDefault();
  });
});
