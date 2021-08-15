$(function () {
  $("p, h1, .river, .moon").click(function () {
    $(this).slideUp(1000);
  });

  $(".head-left").click(function () {
    $("p, h1, .river, .moon").slideDown(2000);
  });

  $("#login-show").click(function () {
    $("#signup-modal").fadeIn();
    $(".form-control").show();
    $(".form-message").text("Emailで登録");
  });

  $(".close-modal").click(function () {
    $("#signup-modal").fadeOut();
  });

  $("#submit-btn").click(function () {
    $(".form-control").slideUp();
    $(".form-message").text("あんぱん");
  });

  $(".footer-icon").hover(
    function () {
      $(this).animate(
        {
          "font-size": "3000px"
        },
        300
      );
    },
    function () {
      $(this).animate(
        {
          "font-size": "24px"
        },
        300
      );
    }
  );

  $(".top-btn").click(function () {
    $("html, body, footer").animate(
      {
        scrollTop: 0
      },
      500
    );
  });

  $(".head-right a").click(function () {
    let id = $(this).attr("href");
    let position = $(id).offset().top;
    $("html, body, footer").animate(
      {
        scrollTop: position
      },
      500
    );
  });
});
