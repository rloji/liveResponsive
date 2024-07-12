// javascript
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  }
  function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  }
  
  // jQuery 
  // function openNav() {
  //   $("#myNav").css("width","100%");
  // }
  // function closeNav() {
  //   $("#myNav").css("width","0%");
  // }
  
  
  // jQuery 
  $(function () {
    // layer popup
    $(".layerPopup").on("click", function () {
      $(".popup, .bg").fadeIn();
    });
    $(".close, .bg").on("click", function () {
      $(".popup, .bg").fadeOut();
    });
  });