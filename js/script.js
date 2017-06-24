$(document).ready(function () {
    //alert("ready for DOMination!");

    $('h4').addClass("panel-title");

    $('#webdevproj').children().first().siblings().hide();
    $('#csharp').children().first().siblings().hide();
    
    //If you click on the Web Projects header it will toggle the projects to show and hide.
    var webDevProjects = $('#webdevproj').children().first().click(function () {
        $(webDevProjects).siblings().toggle();
    });

    var cSharpProjects = $('#csharp').children().first().click(function(){
        $(cSharpProjects).siblings().toggle();
    });
    
    var background = $('#background').children().first().click(function(){
        $(background).siblings().toggle();
    });
    //var background = $('#background').children().next().toggle();

    function animateProfilePicture(profilePicture) {
        var profilePicture = $('#profilepic');
        profilePicture.hide();
        profilePicture.fadeIn(2000);
    };

    function animateJumbotron(jumbotron) {
        var jumbotron = $('.jumbotron');
        jumbotron.hide();
        jumbotron.animate().slideDown(1000);
    };

    function animateBackground(background) {
        var background = $('#background');
        background.hide();
        background.animate().slideDown(2000);
    };

    function animateWebProjects(webProjects) {
        var webProjects = $('#webdevproj');
        webProjects.hide();
        webProjects.slideDown(1500);
    };

    function animateCsharpProjects(CsharpProjects) {
        var CsharpProjects = $('#csharp');
        CsharpProjects.hide();
        CsharpProjects.slideDown(1500);
    };

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
    animateJumbotron();
    animateBackground();
    animateProfilePicture();
    animateWebProjects();
    animateCsharpProjects();
});
