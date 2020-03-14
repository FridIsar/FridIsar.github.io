//thanks to matt boldt for the typed js library and some of the css!

$(document).ready(function() {
    $( "#search" ).click(function() {

        $( ".hidden" ).removeClass( "hidden" );// css unhide

        $("#presentation").hide();

        $( ".vertical-center" ).addClass( "hidden" ); //css hide google
        $( "body" ).addClass( "header" );


            // $( "#firstEditor" ).fadeTo(1000,1, function(){
            //     typeFirst();
            //     $( "#secondEditor" ).fadeTo(1000,1, function(){
            //         typeSecond();
            //         $( "#thirdEditor" ).fadeTo(1000,1, function(){
            //             typeThird();
            //             $( "#presentation" ).slideDown(3000);
            //         });});}); //js unhide

            $( "#firstEditor" ).fadeTo(50,1);
                typeFirst();
    });

});

function typeFirst() {
    new Typed("#typedFirst",{
        strings: ['isar.skills^100 `<br>["Python", "JS", "Django", "MySQL"]<br>` > isar.projects^100 `<br>"<a href="https://github.com/fridisar" target="_blank">github<a>"`<br> >'],
        typeSpeed: 50,
        onComplete: function(self){
            self.cursor.remove();
            $( "#secondEditor" ).fadeTo(50,1);
            typeSecond();
        },
        callback: function(){
            shift();
        } //faire isar.skills puis print dun coup et ainsi de suite ou alors tout est deja affiche
    });
    //skills projets contact cv education entreprise
};

function typeSecond() {
    new Typed("#typedSecond",{
        strings: ['isar.job^100 `<br>"full-stack-developer"<br>` > isar.education^100 `<br>"computer-science-dut"`<br> >'],
        typeSpeed: 50,
        onComplete: function(self){
            self.cursor.remove();
            $( "#thirdEditor" ).fadeTo(50,1);
            typeThird();
        },
        callback: function(){
            shift();
        }
    });
};

function typeThird() {
    new Typed("#typedThird",{
        strings: ['isar.contact^100 `<br>"<a href="https://www.linkedin.com/in/isar/" target="_blank">linkedin<a>"<br>` > isar.cv^100 `<br>"<a href="img/GENERAL_CV.pdf" target="_blank">my-cv<a>"`<br> >'],
        typeSpeed: 50,
        onComplete: function(){ $( "#presentation" ).slideDown(3000);},
        callback: function(){
            shift();
        }
    });
};
