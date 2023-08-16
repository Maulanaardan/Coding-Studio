/*? no js js needed from me */
function hiden(e) {
  const target = $(e.target);

  if ($(target).hasClass("active")) {
    $(target).html("See More").removeClass("active");
  } else {
    $(target).html("Less More").addClass("active");
  }

  const parents = $(e.target).parents(".about-exp");
  const detail = $(parents).children(".about-exp-detail");

  $(detail).slideToggle();
}

function formSubmit(e) {
  e.preventDefault();

  const email = $("#inputEmail");
  const subject = $("#inputSubject");
  const message = $("#inputMessage");

  if (!$(email).val()) {
    alert("Email is required");
  } else if (!$(subject).val()) {
    alert("Subject is required");
  } else if (!$(message).val()) {
    alert("Message is required");
  } else {
    alert("nice");
    $(email).val("");
    $(subject).val("");
    $(message).val("");
  }
}
