$(function(){

    new Typed("#typedName",{
        strings: ["Isar Fridriksson"],
        typeSpeed: 40,
        callback: function(){
            shift();
        }
    });

});
function shift(){
    $(".head-wrap").addClass("shift-text");
}
