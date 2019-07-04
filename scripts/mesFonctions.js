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
