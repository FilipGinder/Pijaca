$(document).ready(function(){

  $("#dugme_registracija").click(function(){

    $("#logovanje_div").css("visibility","hidden");
    $("#registrovanje_div").css("visibility","visible");    //SA LOGOVANJA NA REGISTRACIJU
  })

  $("#nazad_sa_registracije").click(function(){

    $("#logovanje_div").css("visibility","visible");
    $("#registrovanje_div").css("visibility","hidden");    //SA REGISTRACIJE NA LOGOVANJE
  });



    $("#posalji").click(function(){
  	var email = $("#email-login").val();
 	var lozinka = $("#password").val();
    if($("#zapamti_me").is(':checked'))           //PROVERAVAMO DA LI JE CEKIRANO POLJE ZA PAMCENJE EMAILA I LOZINKE
    {
      var zapamti_me ="1";   //AKO JESTE DODELJUJEMO NEKU BEZVEZE VREDNOST VARIJABLI KOJU SALJEMO NA LOGIN.PHP
    }
    else{
      var zapamti_me ="";  //A AKO NIJE CEKIRANO ONDA SALJEMO KAO PRAZNU VREDNOST NA LOGIN.PHP PA SA empty() OPCIJOM PROVERAVAMO DA LI JE
    }              //PRAZNO / CEKIRANO ILI NE



    if(email == "" && lozinka == ""){
		   $( "#email-login" ).effect( "shake" );     //U ZAVISNOSTI OD TOGA STA JE PRAZNO/NE POPUNJENO...TO VIBRIRA
		   $( "#password" ).effect( "shake" );     //ZA OVO JE OBAVEZNO UVEZTI JQUERY DODATAK
       return;  //PREKID KODA
	}
	else if(email == "" || email == null){
		   $( "#email-login" ).effect( "shake" );
       return;  //PREKID KODA
	}
	else if(lozinka == "" || lozinka == null){
		   $( "#password" ).effect( "shake" );
       return;  //PREKID KODA
	}
var verifikacija_logovanje = "verifikacija_logovanje";
  	$.post("php/index_handler.php",{
  		  email:email,
  		  lozinka:lozinka,
        zapamti_me:zapamti_me,
        verifikacija_logovanje:verifikacija_logovanje,
      },function(data,status){

  		             var data = jQuery.parseJSON(data);

  		               if(data === "Uspesno logovanje"){

                         window.location.href = 'pomocni_elementi_stranice/glavna_strana.php';   //SA LOGOVANJA NA STRANICU SA SELECTOM

  					   }
  		               else if(data === "Nismo pronasli vas EMAIL!"){

                             swal({
                                       title: 'Nismo pronasli vas EMAIL!',
                                       icon: "warning",              //ALERT BOX
                                       timer: 2000,
                                       buttons: false,
                                       closeOnClickOutside: false,
                                   });
                                   return;


                         }
                           else if(data === "Pogresna lozinka"){

                                   swal({
                                             title: 'Pogresna lozinka!',
                                             icon: "error",              //ALERT BOX
                                             timer: 2000,
                                             buttons: false,
                                             closeOnClickOutside: false,
                                         });
                                         return;



  					    	}


  		     }
  	   );

});



$("#registruj_se").click(function(){
var email = $("#email-registracija").val();
var lozinka = $("#password-registracija").val();

if(email == "" && lozinka == ""){
   $( "#email-registracija" ).effect( "shake" );     //U ZAVISNOSTI OD TOGA STA JE PRAZNO/NE POPUNJENO...TO VIBRIRA
   $( "#password-registracija" ).effect( "shake" );     //ZA OVO JE OBAVEZNO UVEZTI JQUERY DODATAK
   return;  //PREKID KODA
}
else if(email == "" || email == null){
   $( "#email-registracija" ).effect( "shake" );
   return;  //PREKID KODA
}
else if(lozinka == "" || lozinka == null){
   $( "#password-registracija" ).effect( "shake" );
   return;  //PREKID KODA
}

var verifikacija_registracija = "verifikacija_registracija";
  	$.post("php/index_handler.php",{
  		  email:email,
  		  lozinka:lozinka,
        verifikacija_registracija:verifikacija_registracija,
      },function(data,status){
        var data = jQuery.parseJSON(data);

        if(data == "Uspesna registracija")
        {
          swal({
                    title: 'Uspesna registracija',
                    icon: "success",              //ALERT BOX
                    timer: 2000,
                    buttons: false,
                    closeOnClickOutside: false,
                });
                return;
        }
        else if(data == "Maximalan broj korisnika je vec registrovan")
        {
          swal({
                    title: 'Maximalan broj korisnika je vec registrovan',
                    icon: "error",              //ALERT BOX
                    timer: 2000,
                    buttons: false,
                    closeOnClickOutside: false,
                });
                return;
        }
        else if(data == "Nepravilno unet email")
        {
          swal({
                    title: 'Nepravilno unet email',
                    icon: "warning",              //ALERT BOX
                    timer: 2000,
                    buttons: false,
                    closeOnClickOutside: false,
                });
                return;
        }

      })

})





})
