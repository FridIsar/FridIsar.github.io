function alertUser() {
    alert("SALUT");
}

function showMe() {
    document.getElementById("avatar").style.visibility = "";
}
/*
$(document).ready(function(){
  $("#btnIHM").click(function(){
    $("#projIHM").toggle(600);
  });
});
*/
function toggleDiv(divId) {
        $("#"+divId).toggle(100);
    }

function openNav() {
  $(".sidenav").width(160);
  $('.main').css({'margin-left':'160px'});
  $("#hidenav").delay(500).fadeIn(0);
  $("#shownav").hide();
}

function closeNav() {
  $(".sidenav").width(0);
  $('.main').css({'margin-left':'0'});
  $("#shownav").delay(500).fadeIn(0);
  $("#hidenav").hide();
}

function openNavMobile() {
  $(".sidenav").width('50%');
  $("#hidenavmobile").delay(500).fadeIn(0);
  $("#shownavmobile").hide();
}

function closeNavMobile() {
  $(".sidenav").width(0);
  $("#shownavmobile").delay(500).fadeIn(0);
  $("#hidenavmobile").hide();
}

var tStart = 100 // Start transition 100px from top
  , tEnd = 2500   // End at 500px
  , cStart = [35, 35, 37]  // Gold
  , cEnd = [223, 196, 205]   // Lime
  , cDiff = [cEnd[0] - cStart[0], cEnd[1] - cStart[1], cEnd[2] - cStart[2]];

$(document).ready(function(){
    $(document).scroll(function() {
        var p = ($(this).scrollTop() - tStart) / (tEnd - tStart); // % of transition
        p = Math.min(1, Math.max(0, p)); // Clamp to [0, 1]
        var cBg = [Math.round(cStart[0] + cDiff[0] * p), Math.round(cStart[1] + cDiff[1] * p), Math.round(cStart[2] + cDiff[2] * p)];
        $("body").css('background-color', 'rgb(' + cBg.join(',') +')');
    });
});

$(document).ready(function () {
    $(window).scroll(function(){
        var ScrollTop = parseInt($(window).scrollTop());
        console.log(ScrollTop);

        if (ScrollTop > 100 && ScrollTop < 550) {
          $("#currPres").addClass("current");
          $("#currPar").removeClass("current");
          $("#currComp").removeClass("current");
          $("#currProj").removeClass("current");
        }

        if (ScrollTop > 551 && ScrollTop < 1460) {
            $("#currPar").addClass("current");
            $("#currPres").removeClass("current");
            $("#currComp").removeClass("current");
            $("#currProj").removeClass("current");
        }

        if (ScrollTop > 1460 && ScrollTop < 1800) {
            $("#currComp").addClass("current");
            $("#currPar").removeClass("current");
            $("#currPres").removeClass("current");
            $("#currProj").removeClass("current");
        }

        if (ScrollTop > 1800) {
            $("#currProj").addClass("current");
            $("#currComp").removeClass("current");
            $("#currPar").removeClass("current");
            $("#currPres").removeClass("current");
        }
    });
});
