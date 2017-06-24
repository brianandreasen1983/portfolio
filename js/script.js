$(document).ready(function () {
    //alert("ready for DOMination!");
    
    //Still need to clean up the code quite a bit.
    
    //Setting the h4 css class for bootstrap this mainly affects the green headers within the page.
    var greenHeaders = $('h4').addClass("panel-title");
    
    //Hiding the web dev projects and c sharp projects on page load.
    var hideWebProjects = $('#webdevproj').children().first().siblings().hide();
    var hideCSharpProjects = $('#csharp').children().first().siblings().hide();
    
    //This block contains click handlers for the toggle functionality of background, web projects and c sharp project headers.
    var webDevProjects = $('#webdevproj').children().first().click(function () {
        $(webDevProjects).siblings().toggle();
    });

    var cSharpProjects = $('#csharp').children().first().click(function(){
        $(cSharpProjects).siblings().toggle();
    });
    
    var background = $('#background').children().first().click(function(){
        $(background).siblings().toggle();
    });
    
    //Animations

    //Functional component that provides the fade in for the profile picture.
    var profilePicture = $('#profilepic');
    profilePicture.hide();
    profilePicture.fadeIn(2000);

    //Functional component that provides the slide down animation of the jumbotron on load.
    var jumbotron = $('.jumbotron');
    jumbotron.hide();
    jumbotron.animate().slideDown(1000);

    //Functional component that provides the slide down animation to the background on load.
    var background = $('#background');
    background.hide();
    background.animate().slideDown(2000);

    //Functional component that provides the slide down funtionality for the web projects on load.
    var webProjects = $('#webdevproj');
    webProjects.hide();
    webProjects.slideDown(1500);
    

    //Functional Component that provides the slide down functionality for the c sharp projects on load.
    var CsharpProjects = $('#csharp');
    CsharpProjects.hide();
    CsharpProjects.slideDown(1500);

    

    //    function animateNavigationBar(navBar) {
    //        var navBar = $('nav');
    //        navBar.animate({
    //            top: "+30",
    //        }, 1000, function () {
    //
    //        });
    //    };
    //    
    //    function realignNavBar(navBar){
    //      var navBar = $('nav');
    //                navBar.animate({
    //            top: "0",
    //        }, 1000, function () {
    //
    //        });
    //    }

    //    animateNavigationBar();

});
