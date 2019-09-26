// run only after document is loaded
$(document).ready(function () {
  // click event
  //selector like js (".","#","element")
  $(".btnHtml").click(function () {
    //inner HTML
    $(".btnHtml").html("i'm new html from jq")
  })

//hide
  $(".hide").click(function(){
    $(".hide").hide()
  })
})

