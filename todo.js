$(document).ready(function(){
 
     function nbrtaches(){
            let nb = $("#liste li").length; //chercher tous les li dans liste et donner le nbr total d'elements trouvés 
            $('#compteur').text(nb); //il va remplacer la valeur qu'il y a dans compteur par nb 
        }

        //a l'appuie de ajouter
        $('#ajouter').on('click',function(){ //a chque fois qu'on clique sur ajouter

             let text = $("#text").val(); //on lis la valeur du text

             
          if(text != ""){
             $("#liste").append("<li class='tache'>"+ text + "<button class='supprimer'> X </button></li>");
            }

            $("#text").val(""); //on le remet a vide

          nbrtaches();
    
        });


        $(document).on('click',".supprimer",function(){

            $(this).parent().remove(); //parent cad le li si je met pas parent ca va juste supprimer le bouton 
            nbrtaches();
        })

        //a l'appuie de supprimer
        $("#vider").click(function(){

            $("#liste").empty();
            nbrtaches();

        })
    
       

      
});




