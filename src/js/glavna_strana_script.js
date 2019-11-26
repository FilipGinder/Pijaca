$(document).ready(function(){
  promena_divova();
  dodavanje_novog_sektora();
  prikaz_sektora();
  provera_pre_unosa_tezge();
  dodavanje_nove_tezge();
  prikaz_tezgi_ili_strana_levo_desno_posle_prvog_selecta();
  prikaz_istorije_placanja_klijenta();
  ucitavanje_ajaxa();
  brisanje_sektora();



$("#sacuvaj_izmena_sektora").click(function(){

  var novo_ime_sektora = $("#novo_ime_sektora").val();
  var vrednost_selecta = $("#odabir_strana_ili_direktno").val();
  var id_sektora = $("#sacuvaj_izmena_sektora").val();

  var verifikacija_izmena_sektora = "verifikacija_izmena_sektora";
  $.post("../php/glavna_handler.php",{
    novo_ime_sektora:novo_ime_sektora,
    vrednost_selecta:vrednost_selecta,
    id_sektora:id_sektora,
    verifikacija_izmena_sektora:verifikacija_izmena_sektora
  },function(data,status){
    var data = jQuery.parseJSON(data);
    if(data == "Uspesno izmenjeni podaci")
    {
      swal({
                title: 'Uspesno izmenjeni podaci',
                icon: "warning",              //ALERT BOX
                timer: 2000,
                buttons: false,
                closeOnClickOutside: false,
            });
            $("#div_izmene_sektora").css("visibility","hidden");
            $("#prva_forma").css("visibility","visible");
            prikaz_sektora();
            return;
    }

  });
});



$("#plati_sada").click(function(){
          var izabrani_id_klijenta_za_platiti = $(this).val();
           var verifikacija_cifra_za_placanje_i_vreme = "verifikacija_cifra_za_placanje_i_vreme";
           var datum_izabrani = $("#datum_za_izabrati").val();

           var cifra_za_placanje = prompt("Unesi zeljenu cifru za placanje","");
           if(cifra_za_placanje == null || cifra_za_placanje == "")
           {
             return;
           }
           else{
           $.post("../php/glavna_handler.php",{
             datum_izabrani:datum_izabrani,
             izabrani_id_klijenta_za_platiti:izabrani_id_klijenta_za_platiti,
             cifra_za_placanje:cifra_za_placanje,
             verifikacija_cifra_za_placanje_i_vreme:verifikacija_cifra_za_placanje_i_vreme   //OVO SLUZI ZA REFRESH KAD PLATIMO DA ODMAH PRIKAZE REZULTATE DIREKTNO
           },function(data,status){

if(provera_odakle_je_otvoren_prikaz_istorije == "otvoreno_iz_sektora_sa_direktnim_klijentima")
{
          var verifikacija_prikaz_tabele_istorija_placanja_refresh = "verifikacija_prikaz_tabele_istorija_placanja_refresh";
          $.post("../php/glavna_handler.php",{
            izabrani_id_klijenta_za_platiti:izabrani_id_klijenta_za_platiti,
            verifikacija_prikaz_tabele_istorija_placanja_refresh:verifikacija_prikaz_tabele_istorija_placanja_refresh
          },function(data,status){
            var data = jQuery.parseJSON(data);
            var rezultat='';
                for(var i=0; i<data.length;i++)
                {
                  rezultat+="<tr><td>"+data[i][0]+"</td> <td>"+data[i][1]+"&nbsp;RSD</td></tr>";
                }
                  $("#tabela_body_istorija_placanja").append(rezultat);

          });
            return;
}
else if(provera_odakle_je_otvoren_prikaz_istorije == "otvoreno_iz_sektora_sa_levom_stranom_reda")
{
          var verifikacija_prikaz_tabele_istorija_placanja_refresh_levo = "verifikacija_prikaz_tabele_istorija_placanja_refresh_levo";
          $.post("../php/glavna_handler.php",{
            izabrani_id_klijenta_za_platiti:izabrani_id_klijenta_za_platiti,
            verifikacija_prikaz_tabele_istorija_placanja_refresh_levo:verifikacija_prikaz_tabele_istorija_placanja_refresh_levo
          },function(data,status){
            var data = jQuery.parseJSON(data);    //OVO SLUZI ZA REFRESH KAD PLATIMO DA ODMAH PRIKAZE REZULTATE LEVO
            var rezultat='';
                for(var i=0; i<data.length;i++)
                {
                  rezultat+="<tr><td>"+data[i][0]+"</td> <td>"+data[i][1]+"&nbsp;RSD</td></tr>";
                }
                  $("#tabela_body_istorija_placanja").append(rezultat);

          });
          return;
}
else if(provera_odakle_je_otvoren_prikaz_istorije == "otvoreno_iz_sektora_sa_desnom_stranom_reda")
{
          var verifikacija_prikaz_tabele_istorija_placanja_refresh_desno = "verifikacija_prikaz_tabele_istorija_placanja_refresh_desno";
          $.post("../php/glavna_handler.php",{
            izabrani_id_klijenta_za_platiti:izabrani_id_klijenta_za_platiti,
            verifikacija_prikaz_tabele_istorija_placanja_refresh_desno:verifikacija_prikaz_tabele_istorija_placanja_refresh_desno
          },function(data,status){
            var data = jQuery.parseJSON(data);    //OVO SLUZI ZA REFRESH KAD PLATIMO DA ODMAH PRIKAZE REZULTATE LEVO
            var rezultat='';
                for(var i=0; i<data.length;i++)
                {
                  rezultat+="<tr><td>"+data[i][0]+"</td> <td>"+data[i][1]+"&nbsp;RSD</td></tr>";
                }
                  $("#tabela_body_istorija_placanja").append(rezultat);

          });
          return;
}


               var verifikacija_prikaz_tabele_istorija_placanja_refresh = "verifikacija_prikaz_tabele_istorija_placanja_refresh";
               $.post("../php/glavna_handler.php",{
                 izabrani_id_klijenta:izabrani_id_klijenta,
                 verifikacija_prikaz_tabele_istorija_placanja_refresh:verifikacija_prikaz_tabele_istorija_placanja_refresh
               },function(data,status){
                 var data = jQuery.parseJSON(data);
                 var rezultat='';
                     for(var i=0; i<data.length;i++)
                     {
                       rezultat+="<tr><td>"+data[i][0]+"</td> <td>"+data[i][1]+"&nbsp;RSD</td></tr>";
                     }
                       $("#tabela_body_istorija_placanja").html(rezultat);

               });
     });
     $("#datum_za_izabrati").val('');  //posle uspesnog placanja resetuje input za odabir datuma
   }
});

 $(document).on('click','#prikazi_klijentova_placanja_levo',function(){
   provera_odakle_je_otvoren_prikaz_istorije = "otvoreno_iz_sektora_sa_levom_stranom_reda";
   var izabrani_id_klijenta = $(this).val();
   $("#div_tabela_klijenti_levo").css("visibility","hidden");
   $("#tabela_prikaza_vremena_placanja").css("visibility","visible");
   $("#plati_sada").val(izabrani_id_klijenta);

   var verifikacija_samo_ime_izabranog_klijenta_za_prikaz_istorije_leva_strana = "verifikacija_samo_ime_izabranog_klijenta_za_prikaz_istorije_leva_strana";
   $.post("../php/glavna_handler.php",{
     izabrani_id_klijenta:izabrani_id_klijenta,
     verifikacija_samo_ime_izabranog_klijenta_za_prikaz_istorije_leva_strana:verifikacija_samo_ime_izabranog_klijenta_za_prikaz_istorije_leva_strana
   },function(data,status){
     var data = jQuery.parseJSON(data);
     var rezultat='';
           $("#ime_klijenta_tabela_vreme_placanja").html(data[0]);
   });

   var verifikacija_prikaz_tabele_istorija_placanja_leva_strana = "verifikacija_prikaz_tabele_istorija_placanja_leva_strana";

   $.post("../php/glavna_handler.php",{
     izabrani_id_klijenta:izabrani_id_klijenta,
     verifikacija_prikaz_tabele_istorija_placanja_leva_strana:verifikacija_prikaz_tabele_istorija_placanja_leva_strana
   },function(data,status){
     var data = jQuery.parseJSON(data);
     var rezultat='';
         for(var i=0; i<data.length;i++)
         {
           rezultat+="<tr><td>"+data[i][0]+"</td> <td>"+data[i][1]+"&nbsp;RSD</td></tr>";
         }
           $("#tabela_body_istorija_placanja").html(rezultat);

   });

  });

  $(document).on('click','#prikazi_klijentova_placanja_desno',function(){
    provera_odakle_je_otvoren_prikaz_istorije = "otvoreno_iz_sektora_sa_desnom_stranom_reda";
    var izabrani_id_klijenta = $(this).val();
    $("#div_tabela_klijenti_desno").css("visibility","hidden");
    $("#tabela_prikaza_vremena_placanja").css("visibility","visible");
    $("#plati_sada").val(izabrani_id_klijenta);

    var verifikacija_samo_ime_izabranog_klijenta_za_prikaz_istorije_desna_strana = "verifikacija_samo_ime_izabranog_klijenta_za_prikaz_istorije_desna_strana";
    $.post("../php/glavna_handler.php",{
      izabrani_id_klijenta:izabrani_id_klijenta,
      verifikacija_samo_ime_izabranog_klijenta_za_prikaz_istorije_desna_strana:verifikacija_samo_ime_izabranog_klijenta_za_prikaz_istorije_desna_strana
    },function(data,status){
      var data = jQuery.parseJSON(data);
      var rezultat='';
            $("#ime_klijenta_tabela_vreme_placanja").html(data[0]);
    });

    var verifikacija_prikaz_tabele_istorija_placanja_desna_strana = "verifikacija_prikaz_tabele_istorija_placanja_desna_strana";

    $.post("../php/glavna_handler.php",{
      izabrani_id_klijenta:izabrani_id_klijenta,
      verifikacija_prikaz_tabele_istorija_placanja_desna_strana:verifikacija_prikaz_tabele_istorija_placanja_desna_strana
    },function(data,status){
      var data = jQuery.parseJSON(data);
      var rezultat='';
          for(var i=0; i<data.length;i++)
          {
            rezultat+="<tr><td>"+data[i][0]+"</td> <td>"+data[i][1]+"&nbsp;RSD</td></tr>";
          }
            $("#tabela_body_istorija_placanja").html(rezultat);

    });
   });

})
function promena_divova()
{
  $("#dodaj_novog").click(function(){

    $("#prva_forma").css("visibility","hidden");
    $("#forma_dodaj_novog").css("visibility","visible");    //SA LOGOVANJA NA REGISTRACIJU
    $("#naslov_glavni").html("");
  })

  $("#zatvori_dodavanje_formu").click(function(){

    $("#forma_dodaj_novog").css("visibility","hidden");
    $("#prva_forma").css("visibility","visible");    //SA UNOS NOVE TEZGE NA PRVI GLAVNI DIV
    $("#odabir_u_koji_sektor_se_unosi").val("1");
    $("#odabir_da_li_sektor_ima_stranice_ili_ne").val("1");
    $("#broj_tezge").val('');
    $("#ime_klijenta").val('');
    $("#broj_telefona").val('');
    $("#naslov_glavni").html("Auto Gaca - Pijaca");
  })

  $("#dodaj_novi_sektor").click(function(){

    $("#prva_forma").css("visibility","hidden");
    $("#forma_dodaj_nov_sektor").css("visibility","visible");    //DODAVANJE NOVOG SEKTORA
  })

  $("#zatvori_dodavanje_sektora").click(function(){

    $("#forma_dodaj_nov_sektor").css("visibility","hidden");
    $("#prva_forma").css("visibility","visible");    //DODAVANJE NOVOG SEKTORA
    $("#novi_sektor").val('');
    $("#odabir_sektor_sa_stranama_ili_bez").val("1");
  })

  $("#zatvori_select_za_prikaz_tezgi_bez_levo_desno").click(function(){

    $("#forma_jedan_select_sa_tezgama").css("visibility","hidden");
    $("#prva_forma").css("visibility","visible");
    $("#naslov_glavni").html("Auto Gaca - Pijaca");
  })

  $("#zatvori_select_za_prikaz_tezgi_sa_levo_desno").click(function(){

    $("#prva_forma").css("visibility","visible");
    $("#forma_sa_odabirom_strane_levo_desno_prikaza_tezgi").css("visibility","hidden");
    $("#div_tabela_klijenti_levo").css("display","none");  //sklanjane leve tabele
    $("#div_tabela_klijenti_desno").css("display","none");  //sklanjanje desne tabele
    $("#prikazi_levu_stranu").css("display","block");  //vracanje levog dugmeta
    $("#prikazi_desnu_stranu").css("display","block");  //vracanje desnog dugmeta
    $("#izaberi_postojeceg").val("1");
    $("#naslov_glavni").html("Auto Gaca - Pijaca");
  })

  $("#zatvori_pregled_klijenta").click(function(){

    $("#forma_jedan_select_sa_tezgama").css("visibility","visible");
    $("#div_prikaz_klijenta").css("visibility","hidden");
    $("#samo_tezge_za_direktni_odabir_sektora").val("1");
  })

  $("#prikazi_levu_stranu").click(function(){

    $("#prikazi_levu_stranu").css("display","none");
    $("#prikazi_desnu_stranu").css("display","none");
    $("#forma_sa_odabirom_strane_levo_desno_prikaza_tezgi").css("display","none");
    $("#div_tabela_klijenti_levo").css("display","block");
    $("#prikaz_koja_je_strana_reda").html(" (Leva strana) ");
    $("#ispis_da_je_strana_levo").html(" (Leva strana) ");
  })

  $("#prikazi_desnu_stranu").click(function(){

    $("#prikazi_levu_stranu").css("display","none");
    $("#prikazi_desnu_stranu").css("display","none");
    $("#forma_sa_odabirom_strane_levo_desno_prikaza_tezgi").css("display","none");
    $("#div_tabela_klijenti_desno").css("display","block");
    $("#prikaz_koja_je_strana_reda").html(" (Desna strana) ");
    $("#ispis_da_je_strana_desno").html(" (Desna strana) ");
  })

  $("#zatvori_tabelu_klijenata_levo").click(function(){

    $("#div_tabela_klijenti_levo").css("display","none");
    $("#prikazi_levu_stranu").css("display","block");
    $("#prikazi_desnu_stranu").css("display","block");
    $("#forma_sa_odabirom_strane_levo_desno_prikaza_tezgi").css("display","grid");
    $("#prikaz_koja_je_strana_reda").html("");

  })
  $("#zatvori_tabelu_klijenata_desno").click(function(){

    $("#div_tabela_klijenti_desno").css("display","none");
    $("#prikazi_levu_stranu").css("display","block");
    $("#prikazi_desnu_stranu").css("display","block");
    $("#forma_sa_odabirom_strane_levo_desno_prikaza_tezgi").css("display","grid");
    $("#prikaz_koja_je_strana_reda").html("");
  })

  $("#zatvori_tabelu_prikaz_placanja").click(function()
  {

    if(provera_odakle_je_otvoren_prikaz_istorije == "otvoreno_iz_sektora_sa_direktnim_klijentima")
    {
      $("#tabela_prikaza_vremena_placanja").css("visibility","hidden");
      $("#forma_jedan_select_sa_tezgama").css("visibility","visible");
      $('#tabela_vremena_placanja tbody').empty();
      provera_odakle_je_otvoren_prikaz_istorije = "";
    }
    else if(provera_odakle_je_otvoren_prikaz_istorije == "otvoreno_iz_sektora_sa_levom_stranom_reda")
    {
      $("#tabela_prikaza_vremena_placanja").css("visibility","hidden");
      $("#div_tabela_klijenti_levo").css("visibility","visible");
      $('#tabela_vremena_placanja tbody').empty();
      provera_odakle_je_otvoren_prikaz_istorije = "";
    }
    else if(provera_odakle_je_otvoren_prikaz_istorije == "otvoreno_iz_sektora_sa_desnom_stranom_reda")
    {
      $("#tabela_prikaza_vremena_placanja").css("visibility","hidden");
      $("#div_tabela_klijenti_desno").css("visibility","visible");
      $('#tabela_vremena_placanja tbody').empty();
      provera_odakle_je_otvoren_prikaz_istorije = "";
    }
  });

  $("#logout").click(function(){
    if (confirm('Da li ste sigurni da zelite da se izlogujete') == true)
    {
        window.location.href = "../php/logout.php";
    }
    else{
         return;
        }
  })

  $("#podesavanje_za_brisanje_sektora_i_preimenovanje").click(function(){
    $("#forma_jedan_select_sa_tezgama").css("visibility","hidden");
    $("#div_izmene_sektora").css("visibility","visible");
    provera_odakle_je_otvoreno_podesavanje_izmene_sektora = "direktno";
  });

  $("#podesavanje_za_brisanje_sektora_i_preimenovanje_redova").click(function(){
    $("#forma_sa_odabirom_strane_levo_desno_prikaza_tezgi").css("visibility","hidden");
    $("#div_izmene_sektora").css("visibility","visible");
   provera_odakle_je_otvoreno_podesavanje_izmene_sektora = "sa_stranicama";
  });

        $("#zatvori_div_izmena_sektora").click(function()
        {
              if(provera_odakle_je_otvoreno_podesavanje_izmene_sektora == "direktno")
              {
                $("#forma_jedan_select_sa_tezgama").css("visibility","visible");
                $("#div_izmene_sektora").css("visibility","hidden");
              }
              else if(provera_odakle_je_otvoreno_podesavanje_izmene_sektora == "sa_stranicama")
              {
                $("#forma_sa_odabirom_strane_levo_desno_prikaza_tezgi").css("visibility","visible");
                $("#div_izmene_sektora").css("visibility","hidden");
              }
        });



    $("#slika_podesavanje").click(function(){
      $("#tabela_prikaza_vremena_placanja").css("visibility","hidden");
      $("#div_izmene_tezge").css("visibility","visible");
    })
    $("#zatvori_div_izmena_tezge").click(function(){
      $("#tabela_prikaza_vremena_placanja").css("visibility","visible");
      $("#div_izmene_tezge").css("visibility","hidden");
    })

}
function dodavanje_novog_sektora()
{
  $("#sacuvaj_novi_sektor").click(function(){

    var naziv_novog_sektora = $("#novi_sektor").val();
    var odabir_sa_ili_bez_stranica = $("#odabir_sektor_sa_stranama_ili_bez").val();
    var verifikacija_dodavanje_sektora = "verifikacija_dodavanje_sektora";

    if(naziv_novog_sektora == "")
    {
      swal({
                title: 'Polje ime sektora je obavezno',
                icon: "warning",              //ALERT BOX
                timer: 2000,
                buttons: false,
                closeOnClickOutside: false,
            });
       $("#novi_sektor").val('');
       $("#odabir_sektor_sa_stranama_ili_bez").val('1');
      return;
    }
    else if(odabir_sa_ili_bez_stranica == null || odabir_sa_ili_bez_stranica == '1')
    {
      swal({
                title: 'Morate odabrati jednu od opcija sa ili bez stranica',
                icon: "warning",              //ALERT BOX
                timer: 2000,
                buttons: false,
                closeOnClickOutside: false,
            });
       $("#odabir_sektor_sa_stranama_ili_bez").val('1');
      return;
    }
   else{


    $.post("../php/glavna_handler.php",{
      naziv_novog_sektora:naziv_novog_sektora,
      odabir_sa_ili_bez_stranica:odabir_sa_ili_bez_stranica,
      verifikacija_dodavanje_sektora:verifikacija_dodavanje_sektora
    },function(data,status){
      var data = jQuery.parseJSON(data);

      if(data == "Uspesan unos novog sektora")
       {
         prikaz_sektora();
         $("#forma_dodaj_nov_sektor").css("visibility","hidden");
         $("#prva_forma").css("visibility","visible");
         $("#novi_sektor").val('');
         $('#odabir_sektor_sa_stranama_ili_bez').val("1");
         swal({
                   title: 'Uspesan unos novog sektora',
                   icon: "success",              //ALERT BOX
                   timer: 2000,
                   buttons: false,
                   closeOnClickOutside: false,
               });
       }

    })
}
  })
}
function prikaz_sektora()
{
 $("#odabir_da_li_sektor_ima_stranice_ili_ne").prop('disabled', 'disabled');
  var verifikacija_prikaz_za_select = 'verifikacija_prikaz_za_select';
  $.post("../php/glavna_handler.php",{
    verifikacija_prikaz_za_select:verifikacija_prikaz_za_select
  },function(data,status){
    var data = jQuery.parseJSON(data);
    var rezultat='';
        for(var i=0; i<data.length;i++)
        {
          rezultat+="<option value='1' hidden disabled selected>Sektori</option><option>"+data[i][0]+"</option>";
        }
          $("#izaberi_postojeceg").html(rezultat);
          $("#odabir_u_koji_sektor_se_unosi").html(rezultat);
  })
}
function provera_pre_unosa_tezge()
{
  $("#odabir_u_koji_sektor_se_unosi").change(function(){
    var odabrana_vrednost = $("#odabir_u_koji_sektor_se_unosi").val();
    var verifikacija_select_svi_sektori_za_proveru_da_je_sa_stranicama_ili_ne = 'verifikacija_select_svi_sektori_za_proveru_da_je_sa_stranicama_ili_ne';
    $.post("../php/glavna_handler.php",{
      odabrana_vrednost:odabrana_vrednost,
      verifikacija_select_svi_sektori_za_proveru_da_je_sa_stranicama_ili_ne:verifikacija_select_svi_sektori_za_proveru_da_je_sa_stranicama_ili_ne
    },function(data,status){
      var data = jQuery.parseJSON(data);
      if(data == "sa_stanicama_levo_desno")
      {
          $("#odabir_da_li_sektor_ima_stranice_ili_ne").prop('disabled', false);
      }
      else if(data == "bez_stranica")
      {
         $("#odabir_da_li_sektor_ima_stranice_ili_ne").prop('disabled', 'disabled');
         $("#odabir_da_li_sektor_ima_stranice_ili_ne").val("1");

      }
    })
  })
}
function dodavanje_nove_tezge()
{
  $("#sacuvaj").click(function(){
  //provera pri dodavanju da li je odabrana strana ako je u pitanju sektor sa stranicama levo desno
  var odabrana_vrednost = $("#odabir_u_koji_sektor_se_unosi").val();
  var levo_ili_desno = $("#odabir_da_li_sektor_ima_stranice_ili_ne").val();
  if(levo_ili_desno == null || levo_ili_desno == "")
  {
    levo_ili_desno = "Direktno";
  }
  var verifikacija_provera_pri_dodavanju_da_li_je_odabrana_strana = 'verifikacija_provera_pri_dodavanju_da_li_je_odabrana_strana';
  var broj_tezge = $("#broj_tezge").val();
  var ime_klijenta = $("#ime_klijenta").val();
  var broj_telefona = $("#broj_telefona").val();
  if(odabrana_vrednost == '1' || odabrana_vrednost == "" || odabrana_vrednost == null)
  {
    swal({
              title: 'Odaberite sektor kom zelite da dodate novu tezgu',
              icon: "warning",              //ALERT BOX
              timer: 2000,
              buttons: false,
              closeOnClickOutside: false,
          });
    return;
  }
  else if(broj_tezge == "" || ime_klijenta == "" || broj_telefona == "")
  {
    swal({
              title: 'Popunite sva polja za nastavak',
              icon: "warning",              //ALERT BOX
              timer: 2000,
              buttons: false,
              closeOnClickOutside: false,
          });
    return;
  }
  else{
        $.post("../php/glavna_handler.php",{
          odabrana_vrednost:odabrana_vrednost,
          verifikacija_provera_pri_dodavanju_da_li_je_odabrana_strana:verifikacija_provera_pri_dodavanju_da_li_je_odabrana_strana
        },function(data,status){
          var data = jQuery.parseJSON(data);
          id_sektora = data[0][1];
          if(data[0][0] == "sa_stanicama_levo_desno")
          {
                  if($("#odabir_da_li_sektor_ima_stranice_ili_ne").val() == null || $("#odabir_da_li_sektor_ima_stranice_ili_ne").val() == "" || $("#odabir_da_li_sektor_ima_stranice_ili_ne").val() == "1")
                  {
                    swal({
                              title: 'Odaberite levu ili desnu stranu za tezgu',
                              icon: "warning",              //ALERT BOX
                              timer: 2000,
                              buttons: false,
                              closeOnClickOutside: false,
                          });
                    return;
                  }
          }

           var verifikacija_unos_nove_tezge = "verifikacija_unos_nove_tezge";
          $.post("../php/glavna_handler.php",{
            broj_tezge:broj_tezge,
            ime_klijenta:ime_klijenta,
            broj_telefona:broj_telefona,
            odabrana_vrednost:odabrana_vrednost,
            levo_ili_desno:levo_ili_desno,
            id_sektora:id_sektora,
            verifikacija_unos_nove_tezge:verifikacija_unos_nove_tezge
          },function(data,status){
            var data = jQuery.parseJSON(data);
                if(data == "Tezga je uspesno uneta")
                {
                  $("#odabir_u_koji_sektor_se_unosi").val("1");
                  $("#odabir_da_li_sektor_ima_stranice_ili_ne").val("1");
                  $("#broj_tezge").val('');
                  $("#ime_klijenta").val('');
                  $("#broj_telefona").val('');
                  swal({
                            title: 'Tezga je uspesno uneta',
                            icon: "success",              //ALERT BOX
                            timer: 2000,
                            buttons: false,
                            closeOnClickOutside: false,
                        });
                }
                else{
                  swal({
                            title: 'Doslo je do greske prilikom unosa tezge',
                            icon: "error",              //ALERT BOX
                            timer: 2000,
                            buttons: false,
                            closeOnClickOutside: false,
                        });
                }
          });
        });


  }
  });
}
function prikaz_tezgi_ili_strana_levo_desno_posle_prvog_selecta()
{
  $("#izaberi_postojeceg").change(function(){
     $("#naslov_glavni").html("");
     var izabrani_sektor = $("#izaberi_postojeceg").val();
     var verifikacija_prvog_selecta_da_li_ima_stranice_ili_ne = "verifikacija_prvog_selecta_da_li_ima_stranice_ili_ne";
     $.post("../php/glavna_handler.php",{
       izabrani_sektor:izabrani_sektor,
       verifikacija_prvog_selecta_da_li_ima_stranice_ili_ne:verifikacija_prvog_selecta_da_li_ima_stranice_ili_ne
     },function(data,status){
       var data = jQuery.parseJSON(data);
       var id_odabranog_sektora = data[0][1];
       if(data[0][0] == "sa_stanicama_levo_desno")
       {
         //LEVA STRANA
                   //ovde treba prikazati dva selecta levo i desno
                   $("#prva_forma").css("visibility","hidden");
                   $("#forma_sa_odabirom_strane_levo_desno_prikaza_tezgi").css("visibility","visible");
                   var verifikacija_prikaz_tezgi_levo = "verifikacija_prikaz_tezgi_levo";
                   $.post("../php/glavna_handler.php",{
                     id_odabranog_sektora:id_odabranog_sektora,
                     verifikacija_prikaz_tezgi_levo:verifikacija_prikaz_tezgi_levo
                   },function(data,status){
                     var data = jQuery.parseJSON(data);

                       var rezultat='';
                       for(var i=0; i<data.length;i++)
                       {
                      //   rezultat+="<option value='1' hidden disabled selected>Leva strana reda</option><option>"+data[i][2]+"</option>";
                         rezultat+="<tr><td>"+data[i][1]+"</td><td id='ime_levo'>"+data[i][2]+"</td><td>"+data[i][3]+"</td><td><button id='prikazi_klijentova_placanja_levo' value="+data[i][0]+">Prikazi</button></td></tr>";
                       }
                       $("#ispis_koji_je_red").html(izabrani_sektor);
                       $("#ispis_koji_je_red_i_strana_levo").html(izabrani_sektor);
                       $("#ime_sektora_tabela_vreme_placanja").html(izabrani_sektor);
                       $("#ispis_koji_sektor_menjamo").html(izabrani_sektor);  //ovo
                       $("#novo_ime_sektora").val(izabrani_sektor);   //i ovo proba
                       $("#sacuvaj_izmena_sektora").val(id_odabranog_sektora);   //dugme za promene u vezi sektora
                       $("#obrisi_odredjeni_sektor").val(id_odabranog_sektora); //dugme za brisanje sektora
                       $("#body_tabele_levo").html(rezultat);


                   })
             //LEVA STRANA
             //DESNA STRANA
                   var verifikacija_prikaz_tezgi_desno = "verifikacija_prikaz_tezgi_desno";
                   $.post("../php/glavna_handler.php",{
                     id_odabranog_sektora:id_odabranog_sektora,
                     verifikacija_prikaz_tezgi_desno:verifikacija_prikaz_tezgi_desno
                   },function(data,status){
                     var data = jQuery.parseJSON(data);

                       var rezultat='';
                       for(var i=0; i<data.length;i++)
                       {

                  //       rezultat+="<option value='1' hidden disabled selected>Desna strana reda</option><option>"+data[i][2]+"</option>";
                         rezultat+="<tr><td>"+data[i][1]+"</td><td id='ime_desno'>"+data[i][2]+"</td><td>"+data[i][3]+"</td><td><button id='prikazi_klijentova_placanja_desno' value="+data[i][0]+">Prikazi</button></td></tr>";
                       }
                       $("#ispis_koji_je_red").html(izabrani_sektor);
                       $("#ispis_koji_je_red_i_strana_desno").html(izabrani_sektor);
                       $("#ime_sektora_tabela_vreme_placanja").html(izabrani_sektor);
                       $("#ispis_koji_sektor_menjamo").html(izabrani_sektor);  //ovo
                       $("#novo_ime_sektora").val(izabrani_sektor);   //i ovo proba
                       $("#sacuvaj_izmena_sektora").val(id_odabranog_sektora);   //dugme za promene u vezi sektora
                       $("#obrisi_odredjeni_sektor").val(id_odabranog_sektora); //dugme za brisanje sektora
                       $("#body_tabele_desno").html(rezultat);


                   })
             //DESNA STRANA
       }
       else if(data[0][0] == "bez_stranica")
       {
                //a ovde odmah sve rezultate za trazeni sektor
                var verifikacija_prikaz_tezgi_za_sektor_bez_stanica = "verifikacija_prikaz_tezgi_za_sektor_bez_stanica";
               $.post("../php/glavna_handler.php",{
                 id_odabranog_sektora:id_odabranog_sektora,
                 verifikacija_prikaz_tezgi_za_sektor_bez_stanica:verifikacija_prikaz_tezgi_za_sektor_bez_stanica
               },function(data,status){
                    //ovde treba EKRANIZOVATI REZULTATE ZA ZELENI SEKTOR
  // ZA SADA JE OVO RESENJE VIDECEMO DA LI TREBA DRUGACIJE PRIKAZATI PODATKE
                    var data = jQuery.parseJSON(data);
                    if(data == null || data == "")
                    {
                      swal({
                                title: 'Odabrani sektor trenutno ne sadrzi tezge',
                                icon: "warning",              //ALERT BOX
                                timer: 2000,
                                buttons: false,
                                closeOnClickOutside: false,
                            });
                        $("#izaberi_postojeceg").val("1");
                        return;
                    }
                    else{
                          var rezultat='';
                          for(var i=0; i<data.length;i++)
                          {                                               //za sada cupa sve podatke o tezgi odmah ali je dovoljno samo ime pa posle toga sve
                        //    rezultat+="<option value='1' hidden disabled selected>"+izabrani_sektor+"</option><option>"+data[i][2]+"</option>";
                            rezultat+="<tr><td>"+data[i][1]+"</td><td>"+data[i][2]+"</td><td>"+data[i][3]+"</td><td><button id='prikazi_klijentova_placanja_direktno' value="+data[i][0]+">Prikazi</button></td></tr>";
                          }
                            $("#ispis_koji_je_sektor").html(izabrani_sektor);
                            $("#ime_sektora_tabela_vreme_placanja").html(izabrani_sektor);
                            $("#ispis_koji_sektor_menjamo").html(izabrani_sektor);
                            $("#novo_ime_sektora").val(izabrani_sektor);
                            $("#sacuvaj_izmena_sektora").val(id_odabranog_sektora);   //dugme za promene u vezi sektora
                            $("#obrisi_odredjeni_sektor").val(id_odabranog_sektora); //dugme za brisanje sektora
                            $("#body_tabele1").html(rezultat);
                            $("#prva_forma").css("visibility","hidden");
                            $("#forma_jedan_select_sa_tezgama").css("visibility","visible");
                            $("#izaberi_postojeceg").val("1");
                    }
               })
       }
     })
  })
}
function prikaz_istorije_placanja_klijenta()  //OVO JE ZA DIREKTNE TEZGE BEZ STRANICA LEVO DESNO
{
  $(document).on('click','#prikazi_klijentova_placanja_direktno',function(){
     provera_odakle_je_otvoren_prikaz_istorije = "otvoreno_iz_sektora_sa_direktnim_klijentima";
     izabrani_id_klijenta = $(this).val();
     $("#forma_jedan_select_sa_tezgama").css("visibility","hidden");
     $("#tabela_prikaza_vremena_placanja").css("visibility","visible");
     $("#plati_sada").val(izabrani_id_klijenta);

     var verifikacija_samo_ime_izabranog_klijenta_za_prikaz_istorije = "verifikacija_samo_ime_izabranog_klijenta_za_prikaz_istorije";
     $.post("../php/glavna_handler.php",{
       izabrani_id_klijenta:izabrani_id_klijenta,
       verifikacija_samo_ime_izabranog_klijenta_za_prikaz_istorije:verifikacija_samo_ime_izabranog_klijenta_za_prikaz_istorije
     },function(data,status){
       var data = jQuery.parseJSON(data);
       var rezultat='';
             $("#ime_klijenta_tabela_vreme_placanja").html(data[0]);

     });


     var verifikacija_prikaz_tabele_istorija_placanja = "verifikacija_prikaz_tabele_istorija_placanja";

     $.post("../php/glavna_handler.php",{
       izabrani_id_klijenta:izabrani_id_klijenta,
       verifikacija_prikaz_tabele_istorija_placanja:verifikacija_prikaz_tabele_istorija_placanja
     },function(data,status){
       var data = jQuery.parseJSON(data);
       var rezultat='';
           for(var i=0; i<data.length;i++)
           {
             rezultat+="<tr><td>"+data[i][0]+"</td> <td>"+data[i][1]+"&nbsp;RSD</td></tr>";
           }
             $("#tabela_body_istorija_placanja").html(rezultat);


     });
   });
}
function ucitavanje_ajaxa()
{
  $(document).ajaxStart(function(){
    $("#wait").css("display", "block"); //pri ucitavanju ajax poziva on aktivira ovaj div za ucitavanje

    });
    $(document).ajaxComplete(function(){   //kad se ajax zavrsi on ga gasi i prikazuje ono sto ajax treba da prikaze
      $("#wait").css("display", "none");   //ovo je za ucitavanje prilikom slanja emaila treba ga namestiti za sve na body
    });
}
function brisanje_sektora()
{
  $("#obrisi_odredjeni_sektor").click(function(){
    if (confirm('Da li ste sigurni da zelite da izbrisete ovaj sektor, s njim ce te izbrisati i sve njegove tezge') == true)
    {
              var id_ovog_izabranog_sektora = $("#obrisi_odredjeni_sektor").val();

              var verifikacija_brisanje_sektora = "verifikacija_brisanje_sektora";
              $.post("../php/glavna_handler.php",{
                id_ovog_izabranog_sektora:id_ovog_izabranog_sektora,
                verifikacija_brisanje_sektora:verifikacija_brisanje_sektora
              },function(data,status){
                var data = jQuery.parseJSON(data);
                    if(data == "Uspesno obrisan sektor")
                        {
                          swal({
                                    title: 'Uspesno obrisan sektor',
                                    icon: "warning",              //ALERT BOX
                                    timer: 2000,
                                    buttons: false,
                                    closeOnClickOutside: false,
                                });
                                $("#div_izmene_sektora").css("visibility","hidden");
                                $("#prva_forma").css("visibility","visible");
                                prikaz_sektora();
                                return;
                        }

              });
    }
 else{
             return;
     }
  });
}
