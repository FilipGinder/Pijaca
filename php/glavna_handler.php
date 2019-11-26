<?php
require_once 'glavna_class.php';

if(isset($_POST['verifikacija_dodavanje_sektora']))
{
  $objekat = new glavna_class();
  $rezultat = $objekat->dodavanje_sektora();
  exit(json_encode($rezultat));
}

if(isset($_POST['verifikacija_prikaz_za_select']))
{
  $objekat = new glavna_class();
  $rezultat = $objekat->prikaz_za_select();
  exit(json_encode($rezultat));
}

if(isset($_POST['verifikacija_select_svi_sektori_za_proveru_da_je_sa_stranicama_ili_ne']))
{
  $objekat = new glavna_class();
  $rezultat = $objekat->select_svi_sektori_za_proveru_da_je_sa_stranicama_ili_ne();
  exit(json_encode($rezultat));
}

if(isset($_POST['verifikacija_provera_pri_dodavanju_da_li_je_odabrana_strana']))
{
  $objekat = new glavna_class();
  $rezultat = $objekat->provera_pri_dodavanju_da_li_je_odabrana_strana();
  exit(json_encode($rezultat));
}

if(isset($_POST['verifikacija_unos_nove_tezge']))
{
  $objekat = new glavna_class();
  $rezultat = $objekat->unos_nove_tezge();
  exit(json_encode($rezultat));
}

if(isset($_POST['verifikacija_prvog_selecta_da_li_ima_stranice_ili_ne']))
{
  $objekat = new glavna_class();
  $rezultat = $objekat->prvog_selecta_da_li_ima_stranice_ili_ne();
  exit(json_encode($rezultat));
}

if(isset($_POST['verifikacija_prikaz_tezgi_za_sektor_bez_stanica']))
{
  $objekat = new glavna_class();
  $rezultat = $objekat->prikaz_tezgi_za_sektor_bez_stanica();
  exit(json_encode($rezultat));
}

if(isset($_POST['verifikacija_prikaz_tezgi_levo']))
{
  $objekat = new glavna_class();
  $rezultat = $objekat->prikaz_tezgi_levo();
  exit(json_encode($rezultat));
}

if(isset($_POST['verifikacija_prikaz_tezgi_desno']))
{
  $objekat = new glavna_class();
  $rezultat = $objekat->prikaz_tezgi_desno();
  exit(json_encode($rezultat));
}

if(isset($_POST['verifikacija_prikaz_tezgi_direktno_profila']))
{
  $objekat = new glavna_class();
  $rezultat = $objekat->prikaz_tezgi_direktno_profila();
  exit(json_encode($rezultat));
}

if(isset($_POST['verifikacija_cifra_za_placanje_i_vreme']))
{
  $objekat = new glavna_class();
  $rezultat = $objekat->cifra_za_placanje_i_vreme();
  exit(json_encode($rezultat));
}

if(isset($_POST['verifikacija_prikaz_tabele_istorija_placanja']))
{
  $objekat = new glavna_class();
  $rezultat = $objekat->prikaz_tabele_istorija_placanja();
  exit(json_encode($rezultat));
}
if(isset($_POST['verifikacija_prikaz_tabele_istorija_placanja_refresh']))
{
  $objekat = new glavna_class();
  $rezultat = $objekat->prikaz_tabele_istorija_placanja_refresh();
  exit(json_encode($rezultat));
}
if(isset($_POST['verifikacija_samo_ime_izabranog_klijenta_za_prikaz_istorije']))
{
  $objekat = new glavna_class();
  $rezultat = $objekat->samo_ime_izabranog_klijenta_za_prikaz_istorije();
  exit(json_encode($rezultat));
}
if(isset($_POST['verifikacija_samo_ime_izabranog_klijenta_za_prikaz_istorije_leva_strana']))
{
  $objekat = new glavna_class();
  $rezultat = $objekat->samo_ime_izabranog_klijenta_za_prikaz_istorije_leva_strana();
  exit(json_encode($rezultat));
}
if(isset($_POST['verifikacija_prikaz_tabele_istorija_placanja_leva_strana']))
{
  $objekat = new glavna_class();
  $rezultat = $objekat->prikaz_tabele_istorija_placanja_leva_strana();
  exit(json_encode($rezultat));
}
if(isset($_POST['verifikacija_prikaz_tabele_istorija_placanja_refresh_levo']))
{
  $objekat = new glavna_class();
  $rezultat = $objekat->prikaz_tabele_istorija_placanja_refresh_levo();
  exit(json_encode($rezultat));
}
if(isset($_POST['verifikacija_samo_ime_izabranog_klijenta_za_prikaz_istorije_desna_strana']))
{
  $objekat = new glavna_class();
  $rezultat = $objekat->samo_ime_izabranog_klijenta_za_prikaz_istorije_desna_strana();
  exit(json_encode($rezultat));
}
if(isset($_POST['verifikacija_prikaz_tabele_istorija_placanja_desna_strana']))
{
  $objekat = new glavna_class();
  $rezultat = $objekat->prikaz_tabele_istorija_placanja_desna_strana();
  exit(json_encode($rezultat));
}
if(isset($_POST['verifikacija_prikaz_tabele_istorija_placanja_refresh_desno']))
{
  $objekat = new glavna_class();
  $rezultat = $objekat->prikaz_tabele_istorija_placanja_refresh_desno();
  exit(json_encode($rezultat));
}
if(isset($_POST['verifikacija_izmena_sektora']))
{
  $objekat = new glavna_class();
  $rezultat = $objekat->izmena_sektora();
  exit(json_encode($rezultat));
}
if(isset($_POST['verifikacija_brisanje_sektora']))
{
  $objekat = new glavna_class();
  $rezultat = $objekat->brisanje_sektora();
  exit(json_encode($rezultat));
}
?>
