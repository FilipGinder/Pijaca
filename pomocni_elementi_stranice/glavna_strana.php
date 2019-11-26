<?php
    session_start();

    if(isset($_SESSION['id'])){
    ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/chosen/1.4.2/chosen.jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/chosen/1.4.2/chosen.min.css"> -->
    <script type="text/javascript" src="../dodaci/chosen.jquery.min.js"></script>
    <script type="text/javascript" src="../dodaci/chosen.jquery.js"></script>
      <link rel="stylesheet" href="../dodaci/chosen.min.css">
    <script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script> <!--  DODATAK ZA VIBRACIJU INPUTA PRILIKOM PRAZNOG POLJA-->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta charset="utf-8">
    <!-- <link rel="stylesheet" href="src/css/style.css"> -->
    <link rel="stylesheet" href="../src/css/stile_glavna_strana.css">
    <script type="text/javascript" src="../src/js/glavna_strana_script.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>    <!-- alert-->
    <title>Auto Gaca Pijaca</title>
  </head>
  <body>

<div id="glavni">
      <div id="wait"><img src='../slike/loading.gif' width="100" height="100" /></div>
  <!-- <h1 id="naslov_glavni">Auto Gaca - Pijaca</h1> -->
  <?php
  include('prvi_div_cim_udjemo_u_aplikaciju.php');
  include('div_gde_prikazujemo_tezge_bez_stranica_levo_desno.php');
  include('div_gde_prikazujemo_tezge_sa_stranicama_levo_desno.php');
  include('dodaj_novu_tezgu.php');
  include('dodaj_novi_sektor.php');
  include('izmena_sektora.php');
  include('izmena_tezge.php');
  include('prikaz_tabele_placanja.php');
   ?>
</div>
<?php
}
else{
	header('location: ../index.php');
}
 ?>
</body>
</html>
