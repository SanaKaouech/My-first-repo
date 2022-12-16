$("body").css("background-color" , "red");
$("h1").css({'background-color' : 'red', 'color': 'black', 'font-size': '50px' , 'text-align' : 'center'});
$( "p" ).css({ "background": "#FAEBD7", "color": "black" , "border" : "2px solid currentcolor", "border-radius": "12px", "padding": "5px", "width": "18%"});

$(document).ready(function(){
  $("button").click(function(){
    if ($("#correct").parent().is("div")) {
      alert("Your score is 10"); 
    }
  });
});

$(#caseACocher).prop(checked, true); //Méthode pour cocher la case
$(#caseACocher).prop(checked, false); //Méthode pour cocher la case






    