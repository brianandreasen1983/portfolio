$(document).ready(function () {
    //alert("ready for DOMination!");

    $('h4').addClass("panel-title");
    
    function showProfilePicture(profilePicture) {
        var profilePicture = $('#profilepic');
        profilePicture.hide();
        profilePicture.fadeIn(2000);
    };

    function slideDownJumbotron(jumbotron) {
        var jumbotron = $('.jumbotron');
        jumbotron.hide();
        jumbotron.animate().slideDown(2500);
    };

    function animateBackground(background) {
        var background = $('#background');
        background.hide();
        background.animate().slideDown(2000);
    };

    function showWebProjects(webProjects) {
        var webProjects = $('#webdevproj');
        webProjects.hide();
        webProjects.slideDown(2000);
    };

    function showCsharpProjects(CsharpProjects) {
        var CsharpProjects = $('#csharp');
        CsharpProjects.hide();
        CsharpProjects.slideDown(2000);
    };

    slideDownJumbotron();
    animateBackground();
    showProfilePicture();
    showWebProjects();
    showCsharpProjects();

});
