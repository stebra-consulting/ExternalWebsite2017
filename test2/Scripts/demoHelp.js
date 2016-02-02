$(document).ready(function () {
    $("#omStebra").click(function () {
        if (!$("#helper").is(":visible")) {

            $("#helper").show();
        }
        else {

            $("#helper").hide();
        }

    });
    $("#helper").click(function () {
        if ($("#colorPicker").is(":visible")) {

            $("#colorPicker").hide();
        }
        else {
            $("#colorPicker").show();
        }


    });
    $(".x").click(function () {
        if ($("#colorPicker").is(":visible")) {

            $("#colorPicker").hide();
        }
       

    });
    $(".thisColor").click(function () {
        $(".dividers1").css("background-color", $(this).text());
    });

    $("#change").click(function () {
        $(".dividers1").css("background-color", $("#customColor").val());
    });



    //Navbar Hide on click outside 
    $(".navbar-nav li a").click(function (event) {
        $(".navbar-collapse").collapse('hide');
    });
    //or inside body
    $("body").click(function (event) {
        $(".navbar-collapse").collapse('hide');
    });



    //contact us form maintain scroll position
    if (document.getElementById('isPostBack')) {
        window.location.hash = '#kontakta';
        alert("Tack, vi har tagit emot ditt meddelande");
    }
});