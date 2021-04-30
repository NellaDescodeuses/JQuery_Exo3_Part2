// $(document).ready(function() {
//     //Au clic sur le bouton,
//     $('#afficher').click(function () { 
//         $('#text').show();
//     });
//     $('#cacher').click(function () { 
//         $('#text').hide();
//     });
// });
//Ou
$(document).ready(function () {
    //au click sur le bouton #show_hide
    $('#show_hide').click(function () { 
        //je bascule (.toggle) d'afficher à masquer
        $('div').toggle();
        
    });
});