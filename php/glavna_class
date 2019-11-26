<?php
session_start();
class glavna_class
{
  function dodavanje_sektora()
  {
    include ('konekcija.php');
    $id = $_SESSION['id'];
    $naziv_novog_sektora = mysqli_real_escape_string($konekcija,$_POST['naziv_novog_sektora']);
    $odabir_sa_ili_bez_stranica = mysqli_real_escape_string($konekcija,$_POST['odabir_sa_ili_bez_stranica']);

    $upit="INSERT INTO sektori(id_korisnik,svi_sektori,sa_stranicama_ili_bez) VALUES ('$id','$naziv_novog_sektora','$odabir_sa_ili_bez_stranica')";
    $rezultat = $konekcija->prepare($upit);
    $rezultat->execute();
    $konekcija->close();
    exit(json_encode("Uspesan unos novog sektora"));
  }

  function prikaz_za_select()
  {
    // $date = new DateTime('now'); //ovo uzima danasnji datum za racunanje + 3 meseca a treba datum iz baze da uzima + 3 meseca
    //   $date->modify('+3 month');
    //   $date = $date->format('Y-m-d h:i:s');
      include ('konekcija.php');

      $upit = "SELECT svi_sektori FROM sektori /*datum iz baze +3 meseca < danasnjeg datuma*/";
      $rezultat = $konekcija->prepare($upit);
      $rezultat->execute();
      $rezultat->bind_result($svi_sektori);

      $rezultat_niz = array();

      while ($rezultat->fetch())
      {
       $rezultat_niz[]=array($svi_sektori);
      }
      $konekcija->close();
          exit(json_encode($rezultat_niz));
  }

  function select_svi_sektori_za_proveru_da_je_sa_stranicama_ili_ne()
  {
    include ('konekcija.php');
    $odabrana_vrednost = mysqli_real_escape_string($konekcija,$_POST['odabrana_vrednost']);
    $upit = "SELECT sa_stranicama_ili_bez FROM sektori WHERE svi_sektori = '$odabrana_vrednost'";
    $rezultat = $konekcija->prepare($upit);
    $rezultat->execute();
    $rezultat->bind_result($sa_stranicama_ili_bez);

    $rezultat_niz = array();

    while ($rezultat->fetch())
    {
     $rezultat_niz[]=array($sa_stranicama_ili_bez);
    }
    $konekcija->close();
        exit(json_encode($rezultat_niz));
  }

  function provera_pri_dodavanju_da_li_je_odabrana_strana()
  {
    include ('konekcija.php');
    $odabrana_vrednost = mysqli_real_escape_string($konekcija,$_POST['odabrana_vrednost']);
    $upit = "SELECT sa_stranicama_ili_bez,id_sektori FROM sektori WHERE svi_sektori = '$odabrana_vrednost'";
    $rezultat = $konekcija->prepare($upit);
    $rezultat->execute();
    $rezultat->bind_result($sa_stranicama_ili_bez,$id_sektori);

    $rezultat_niz = array();

    while ($rezultat->fetch())
    {
     $rezultat_niz[]=array($sa_stranicama_ili_bez,$id_sektori);
    }
    $konekcija->close();
        exit(json_encode($rezultat_niz));
  }

  function unos_nove_tezge()
  {
    include ('konekcija.php');
    $broj_tezge = mysqli_real_escape_string($konekcija,$_POST['broj_tezge']);
    $ime_klijenta = mysqli_real_escape_string($konekcija,$_POST['ime_klijenta']);
    $broj_telefona = mysqli_real_escape_string($konekcija,$_POST['broj_telefona']);
    $id_sektora = mysqli_real_escape_string($konekcija,$_POST['id_sektora']);
    $odabrana_vrednost = mysqli_real_escape_string($konekcija,$_POST['odabrana_vrednost']);
    $levo_ili_desno = mysqli_real_escape_string($konekcija,$_POST['levo_ili_desno']);

    $upit="INSERT INTO tezge(id_ka_sektoru,provera_da_li_je_iz_reda_levo_ili_desno,broj_tezge,ime_klijenta,broj_telefona) VALUES ('$id_sektora','$levo_ili_desno','$broj_tezge','$ime_klijenta','$broj_telefona')";
    $rezultat = $konekcija->prepare($upit);
    $rezultat->execute();
    exit(json_encode('Tezga je uspesno uneta'));
  }

  function prvog_selecta_da_li_ima_stranice_ili_ne()
  {
    include ('konekcija.php');
    $izabrani_sektor = mysqli_real_escape_string($konekcija,$_POST['izabrani_sektor']);
    $upit = "SELECT sa_stranicama_ili_bez,id_sektori FROM sektori WHERE svi_sektori = '$izabrani_sektor'";
    $rezultat = $konekcija->prepare($upit);
    $rezultat->execute();
    $rezultat->bind_result($sa_stranicama_ili_bez,$id_sektori);

    $rezultat_niz = array();

    while ($rezultat->fetch())
    {
     $rezultat_niz[]=array($sa_stranicama_ili_bez,$id_sektori);
    }
    $konekcija->close();
        exit(json_encode($rezultat_niz));
  }

  function prikaz_tezgi_za_sektor_bez_stanica()
  {
    include ('konekcija.php');
    $id_odabranog_sektora = mysqli_real_escape_string($konekcija,$_POST['id_odabranog_sektora']);
    $upit = "SELECT id_tezge,broj_tezge,ime_klijenta,broj_telefona FROM tezge WHERE id_ka_sektoru = '$id_odabranog_sektora'";
    $rezultat = $konekcija->prepare($upit);
    $rezultat->execute();
    $rezultat->bind_result($id_tezge,$broj_tezge,$ime_klijenta,$broj_telefona);

    $rezultat_niz = array();

    while ($rezultat->fetch())
    {
     $rezultat_niz[]=array($id_tezge,$broj_tezge,$ime_klijenta,$broj_telefona);
    }
    $konekcija->close();
        exit(json_encode($rezultat_niz));
  }

  function prikaz_tezgi_levo()
  {
    include ('konekcija.php');
    $id_odabranog_sektora = mysqli_real_escape_string($konekcija,$_POST['id_odabranog_sektora']);
    $upit = "SELECT id_tezge,broj_tezge,ime_klijenta,broj_telefona FROM tezge WHERE id_ka_sektoru = '$id_odabranog_sektora' AND provera_da_li_je_iz_reda_levo_ili_desno = 'Levo'";
    $rezultat = $konekcija->prepare($upit);
    $rezultat->execute();
    $rezultat->bind_result($id_tezge,$broj_tezge,$ime_klijenta,$broj_telefona);

    $rezultat_niz = array();

    while ($rezultat->fetch())
    {
     $rezultat_niz[]=array($id_tezge,$broj_tezge,$ime_klijenta,$broj_telefona);
    }
    $konekcija->close();
        exit(json_encode($rezultat_niz));
  }

  function prikaz_tezgi_desno()
  {
    include ('konekcija.php');
    $id_odabranog_sektora = mysqli_real_escape_string($konekcija,$_POST['id_odabranog_sektora']);
    $upit = "SELECT id_tezge,broj_tezge,ime_klijenta,broj_telefona,provera_da_li_je_iz_reda_levo_ili_desno FROM tezge WHERE id_ka_sektoru = '$id_odabranog_sektora' AND provera_da_li_je_iz_reda_levo_ili_desno = 'Desno'";
    $rezultat = $konekcija->prepare($upit);
    $rezultat->execute();
    $rezultat->bind_result($id_tezge,$broj_tezge,$ime_klijenta,$broj_telefona,$provera_da_li_je_iz_reda_levo_ili_desno);

    $rezultat_niz = array();

    while ($rezultat->fetch())
    {
     $rezultat_niz[]=array($id_tezge,$broj_tezge,$ime_klijenta,$broj_telefona,$provera_da_li_je_iz_reda_levo_ili_desno);
    }
    $konekcija->close();
        exit(json_encode($rezultat_niz));
  }

  function prikaz_tezgi_direktno_profila()
  {
    include ('konekcija.php');
    $izabrana_vrednost_selecta = mysqli_real_escape_string($konekcija,$_POST['izabrana_vrednost_selecta']);
    $upit = "SELECT id_tezge,broj_tezge,ime_klijenta,broj_telefona FROM tezge WHERE ime_klijenta = '$izabrana_vrednost_selecta'";
    $rezultat = $konekcija->prepare($upit);
    $rezultat->execute();
    $rezultat->bind_result($id_tezge,$broj_tezge,$ime_klijenta,$broj_telefona);

    $rezultat_niz = array();

    while ($rezultat->fetch())
    {
     $rezultat_niz[]=array($id_tezge,$broj_tezge,$ime_klijenta,$broj_telefona);
    }
    $konekcija->close();
        exit(json_encode($rezultat_niz));
  }


  function cifra_za_placanje_i_vreme()
  {
    include ('konekcija.php');
    $izabrani_id_klijenta_za_platiti = mysqli_real_escape_string($konekcija,$_POST['izabrani_id_klijenta_za_platiti']);
    $cifra_za_placanje = mysqli_real_escape_string($konekcija,$_POST['cifra_za_placanje']);
    $datum_izabrani = mysqli_real_escape_string($konekcija,$_POST['datum_izabrani']);

    if($datum_izabrani != "" || $datum_izabrani != null)  //ZA SLUCAJ DA JE ODABRAN DATUM PLACANJA ONDA UNOSIMO U BAZU ZELJENI DATUM
    {
      $upit="INSERT INTO placanje(id_od_tezge,cifra_placena,vreme_placanja) VALUES ('$izabrani_id_klijenta_za_platiti','$cifra_za_placanje','$datum_izabrani')";
      $rezultat = $konekcija->prepare($upit);
      $rezultat->execute();
      exit(json_encode('Uspesno placeno'));
    }
    else if($datum_izabrani == "" || $datum_izabrani == null)  //ZA SLUCAJ DA NIJE ODABRAN DATUM ONDA UNOSIMO TRENUTNO TACNO VREME
    {
      $upit="INSERT INTO placanje(id_od_tezge,cifra_placena) VALUES ('$izabrani_id_klijenta_za_platiti','$cifra_za_placanje')";
      $rezultat = $konekcija->prepare($upit);
      $rezultat->execute();
      exit(json_encode('Uspesno placeno'));
    }


  }

  function prikaz_tabele_istorija_placanja()
  {
    include ('konekcija.php');
    $izabrani_id_klijenta = mysqli_real_escape_string($konekcija,$_POST['izabrani_id_klijenta']);
    $upit = "SELECT vreme_placanja,cifra_placena FROM placanje WHERE id_od_tezge = '$izabrani_id_klijenta'";
    $rezultat = $konekcija->prepare($upit);
    $rezultat->execute();
    $rezultat->bind_result($izabrani_id_klijenta,$cifra_placena);

    $rezultat_niz = array();

    while ($rezultat->fetch())
    {
     $rezultat_niz[]=array($izabrani_id_klijenta,$cifra_placena);
    }
    $konekcija->close();
        exit(json_encode($rezultat_niz));
  }

  function prikaz_tabele_istorija_placanja_refresh()
  {
    include ('konekcija.php');
    $izabrani_id_klijenta_za_platiti = mysqli_real_escape_string($konekcija,$_POST['izabrani_id_klijenta_za_platiti']);
    $upit = "SELECT vreme_placanja,cifra_placena FROM placanje WHERE id_od_tezge = '$izabrani_id_klijenta_za_platiti' ORDER BY id_od_tezge DESC LIMIT 1";
    $rezultat = $konekcija->prepare($upit);
    $rezultat->execute();
    $rezultat->bind_result($izabrani_id_klijenta,$cifra_placena);

    $rezultat_niz = array();

    while ($rezultat->fetch())
    {
     $rezultat_niz[]=array($izabrani_id_klijenta,$cifra_placena);
    }
    $konekcija->close();
        exit(json_encode($rezultat_niz));
  }

  function samo_ime_izabranog_klijenta_za_prikaz_istorije()
  {
    include ('konekcija.php');
    $izabrani_id_klijenta = mysqli_real_escape_string($konekcija,$_POST['izabrani_id_klijenta']);
    $upit = "SELECT ime_klijenta FROM tezge WHERE id_tezge = '$izabrani_id_klijenta'";
    $rezultat = $konekcija->prepare($upit);
    $rezultat->execute();
    $rezultat->bind_result($ime_klijenta);

    $rezultat_niz = array();

    while ($rezultat->fetch())
    {
     $rezultat_niz[]=array($ime_klijenta);
    }
    $konekcija->close();
        exit(json_encode($rezultat_niz));
  }

  function samo_ime_izabranog_klijenta_za_prikaz_istorije_leva_strana()
  {
    include ('konekcija.php');
    $izabrani_id_klijenta = mysqli_real_escape_string($konekcija,$_POST['izabrani_id_klijenta']);
    $upit = "SELECT ime_klijenta FROM tezge WHERE id_tezge = '$izabrani_id_klijenta'";
    $rezultat = $konekcija->prepare($upit);
    $rezultat->execute();
    $rezultat->bind_result($ime_klijenta);

    $rezultat_niz = array();

    while ($rezultat->fetch())
    {
     $rezultat_niz[]=array($ime_klijenta);
    }
    $konekcija->close();
        exit(json_encode($rezultat_niz));
  }

  function prikaz_tabele_istorija_placanja_leva_strana()
  {
    include ('konekcija.php');
    $izabrani_id_klijenta = mysqli_real_escape_string($konekcija,$_POST['izabrani_id_klijenta']);
    $upit = "SELECT vreme_placanja,cifra_placena FROM placanje WHERE id_od_tezge = '$izabrani_id_klijenta'";
    $rezultat = $konekcija->prepare($upit);
    $rezultat->execute();
    $rezultat->bind_result($izabrani_id_klijenta,$cifra_placena);

    $rezultat_niz = array();

    while ($rezultat->fetch())
    {
     $rezultat_niz[]=array($izabrani_id_klijenta,$cifra_placena);
    }
    $konekcija->close();
        exit(json_encode($rezultat_niz));
  }

  function prikaz_tabele_istorija_placanja_refresh_levo()
  {
    include ('konekcija.php');
    $izabrani_id_klijenta_za_platiti = mysqli_real_escape_string($konekcija,$_POST['izabrani_id_klijenta_za_platiti']);
    $upit = "SELECT vreme_placanja,cifra_placena FROM placanje WHERE id_od_tezge = '$izabrani_id_klijenta_za_platiti' ORDER BY id_od_tezge DESC LIMIT 1";
    $rezultat = $konekcija->prepare($upit);
    $rezultat->execute();
    $rezultat->bind_result($izabrani_id_klijenta,$cifra_placena);

    $rezultat_niz = array();

    while ($rezultat->fetch())
    {
     $rezultat_niz[]=array($izabrani_id_klijenta,$cifra_placena);
    }
    $konekcija->close();
        exit(json_encode($rezultat_niz));
  }

//DESNA STRANA
  function samo_ime_izabranog_klijenta_za_prikaz_istorije_desna_strana()
  {
    include ('konekcija.php');
    $izabrani_id_klijenta = mysqli_real_escape_string($konekcija,$_POST['izabrani_id_klijenta']);
    $upit = "SELECT ime_klijenta FROM tezge WHERE id_tezge = '$izabrani_id_klijenta'";
    $rezultat = $konekcija->prepare($upit);
    $rezultat->execute();
    $rezultat->bind_result($ime_klijenta);

    $rezultat_niz = array();

    while ($rezultat->fetch())
    {
     $rezultat_niz[]=array($ime_klijenta);
    }
    $konekcija->close();
        exit(json_encode($rezultat_niz));
  }

  function prikaz_tabele_istorija_placanja_desna_strana()
  {
    include ('konekcija.php');
    $izabrani_id_klijenta = mysqli_real_escape_string($konekcija,$_POST['izabrani_id_klijenta']);
    $upit = "SELECT vreme_placanja,cifra_placena FROM placanje WHERE id_od_tezge = '$izabrani_id_klijenta'";
    $rezultat = $konekcija->prepare($upit);
    $rezultat->execute();
    $rezultat->bind_result($izabrani_id_klijenta,$cifra_placena);

    $rezultat_niz = array();

    while ($rezultat->fetch())
    {
     $rezultat_niz[]=array($izabrani_id_klijenta,$cifra_placena);
    }
    $konekcija->close();
        exit(json_encode($rezultat_niz));
  }

  function prikaz_tabele_istorija_placanja_refresh_desno()
  {
    include ('konekcija.php');
    $izabrani_id_klijenta_za_platiti = mysqli_real_escape_string($konekcija,$_POST['izabrani_id_klijenta_za_platiti']);
    $upit = "SELECT vreme_placanja,cifra_placena FROM placanje WHERE id_od_tezge = '$izabrani_id_klijenta_za_platiti' ORDER BY id_od_tezge DESC LIMIT 1";
    $rezultat = $konekcija->prepare($upit);
    $rezultat->execute();
    $rezultat->bind_result($izabrani_id_klijenta,$cifra_placena);

    $rezultat_niz = array();

    while ($rezultat->fetch())
    {
     $rezultat_niz[]=array($izabrani_id_klijenta,$cifra_placena);
    }
    $konekcija->close();
        exit(json_encode($rezultat_niz));
  }

//DESNA STRANA

  function izmena_sektora()
  {
    include ('konekcija.php');
    $novo_ime_sektora = mysqli_real_escape_string($konekcija,$_POST['novo_ime_sektora']);
    $vrednost_selecta = mysqli_real_escape_string($konekcija,$_POST['vrednost_selecta']);
    $id_sektora = mysqli_real_escape_string($konekcija,$_POST['id_sektora']);
    $upit = "UPDATE sektori SET svi_sektori = '$novo_ime_sektora', sa_stranicama_ili_bez = '$vrednost_selecta' WHERE id_sektori = '$id_sektora'";
    $rezultat = $konekcija->prepare($upit);
    $rezultat->execute();
    $konekcija->close();
    exit(json_encode('Uspesno izmenjeni podaci'));
  }

  function brisanje_sektora()
  {
    include ('konekcija.php');
    $id_ovog_izabranog_sektora = mysqli_real_escape_string($konekcija,$_POST['id_ovog_izabranog_sektora']);
    $upit = "DELETE FROM sektori WHERE id_sektori = '$id_ovog_izabranog_sektora'";
    $rezultat = $konekcija->prepare($upit);
    $rezultat->execute();
    $konekcija->close();
    exit(json_encode('Uspesno obrisan sektor'));
  }

}
?>
