//thanks to matt boldt for the typing library!
function typeFirst() {
    new Typed("#typedFirst",{
        strings: ['isar.skills^1000 `<br>["Python", "JS", "Django"]<br>` > isar.projets ^1000 `<br>"<a href="https://github.com/fridisar" target="_blank">github<a>"`<br> >'],
        typeSpeed: 30,
        onComplete: function(self){self.cursor.remove();},
        callback: function(){
            shift();
        } //faire isar.skills puis print dun coup et ainsi de suite ou alors tout est deja affiche
    });
    //skills projets contact cv education entreprise
};

function typeSecond() {
    new Typed("#typedSecond",{
        strings: ['isar.skills^1000 `<br>["Python", "JS", "Django"]<br>` > isar.projets ^1000 `<br>"<a href="https://github.com/fridisar" target="_blank">github<a>"`<br> >'],
        typeSpeed: 30,
        onComplete: function(self){self.cursor.remove();},
        callback: function(){
            shift();
        }
        });
};

function typeThird() {
    new Typed("#typedThird",{
        strings: ['isar.skills^1000 `<br>["Python", "JS", "Django"]<br>` > isar.projets ^1000 `<br>"<a href="https://github.com/fridisar" target="_blank">github<a>"`<br> >'],
        typeSpeed: 30,
        callback: function(){
            shift();
        }
        });
};

$(document).ready(function() {
    $( "#search" ).click(function() {

        $( ".hidden" ).removeClass( "hidden" );// css unhide

        $("#presentation").hide();

        $( ".vertical-center" ).addClass( "hidden" ); //css hide google
        $( "body" ).addClass( "header" );

        $( "#presentation" ).slideDown(1000, function(){
            $( "#firstEditor" ).fadeTo(1000,1, function(){
                typeFirst();
                $( "#secondEditor" ).fadeTo(1000,1, function(){
                    typeSecond();
                    $( "#thirdEditor" ).fadeTo(1000,1, function(){
                        typeThird();
                    });});});}); //js unhide
    });

});
