/*? no js js needed from me */
function hiden(e) {
  const target = $(e.target)

  if($(target).hasClass("active")) {
    $(target).html("See More").removeClass("active")
  }
  else{
    $(target).html("Less More").addClass("active")
  }

  const parents =  $(e.target).parents(".about-exp")
  const detail = $(parents).children(".about-exp-detail")

  $(detail).slideToggle()

  
}