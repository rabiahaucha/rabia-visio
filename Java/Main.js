$(document).ready(function () {
    $(".next").on("click", function () {
      var currentImg = $(".active");
      var nextImg = currentImg.next();
      var indicate = $(".indicator");
  
      var count = ($(this).data("count") || 0) + 1;
      $(this).data("count", count);
  
      if (count === 4) {
        location.reload();
        return;
      }
  
      if (nextImg.length) {
        currentImg.removeClass().css("z-index", -10);
        nextImg.addClass("active").css("z-index", 10);
      }
  
      indicate.css({
        opacity: "1",
        transform: "rotate(0deg)",
      });
  
      var activeIndex = count % indicate.length;
      indicate.eq(activeIndex).css({
        opacity: "0.5",
        transform: "rotate(120deg)",
      });
    });
  });
  