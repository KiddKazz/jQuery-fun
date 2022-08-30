//*I unlinked this external js file to attempt doing the jQuery embedded.*
var hide = false,
    show = false,
    toggle = false,
    fadeOut = false,
    fadeIn = false,
    slideUp = false,
    slideDown = false,
    slideToggle = false,
    fadeTo = false,
    restore = false;

function setFalse(variable){
    return false;
}
function hideButton(){
    hide = true;
}

function showButton(){
    show = true;
}

function toggleButton(){
    toggle = true;
}
function fadeOutButton(){
    fadeOut = true;
}
function fadeInButton(){
    fadeIn = true;
}
function slideUpButton(){
    slideUp = true;
}
function slideDownButton(){
    slideDown = true;
}
function slideToggleButton(){
    slideToggle = true;
}
function fadeToButton(){
    fadeTo = true;
} 

//Ready jQuery
$(document).ready(function() {
    $("button.apply").click(function() {


        if (hide == true){
            $("img.picture").hide("slow", function(){
                hide = false;
            });
        }
        if (show == true){
            $("img.picture").show("slow", function(){
                show = false;
            });
        }  

        if (toggle == true){
            $("img.picture").toggle("fast");
        }    
        if (fadeOut == true){
            $("img.picture").fadeOut("fast", function(){
                fadeOut = false;
            });
        }
        if (fadeIn == true){
            $("img.picture").fadeIn("fast", function(){
                fadeIn = false;
            });
        }
        if (slideUp == true){
            $("img.picture").slideUp("slow", function(){
                slideUp = false;
            })
        }
        if (slideDown == true){
            $("img.picture").slideDown("slow", function(){
                slideDown = false;
            })
        }
        if (slideToggle == true){
            $("img.picture").slideDown("fast")
        }
        if (fadeTo == true){
            $("img.picture").fadeTo("slow", 0.15, function(){
                fadeTo = false;
            })
        }
    
    })
    $('button.restore').on('click', function() {
        $("img.picture").show()
        $("img.picture").fadeTo("",1.0);
    })
});     
