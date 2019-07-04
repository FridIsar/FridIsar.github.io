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