$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var items = ["item1", "item2", "item3", "item4", "item5", "item6"];
    var userValue = [];
    items.forEach(function(item) {
      var userInput = $('input#' + item).val().toUpperCase();
      userValue.push(userInput);
    });
    userValue.sort();
    userValue.forEach(function(val){
      $(".itemList").append("<li>" + val + "</li>");
    });
    $("form").hide();
  //    $(".itemList").show();
  });
});
