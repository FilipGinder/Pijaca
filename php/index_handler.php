<?php
require_once 'index_class.php';

if(isset($_POST['verifikacija_logovanje']))
{
  $objekat = new index_class();
  $rezultat = $objekat->logovanje();
  exit(json_encode($rezultat));
}

if(isset($_POST['verifikacija_registracija']))
{
  $objekat = new index_class();
  $rezultat = $objekat->registracija();
  exit(json_encode($rezultat));
}

?>
