<?php
session_start();
class index_class
{
    function logovanje()
    {
                    include ('konekcija.php');

                    $email = mysqli_real_escape_string($konekcija,$_POST['email']);
                    $password = mysqli_real_escape_string($konekcija,$_POST['lozinka']);



                    if(isset($_POST['zapamti_me'])){
                    	$zapamti_me = $_POST['zapamti_me'];   //PREUZIMAMO VREDNOST checkbox-a BILO PRAZNA ILI NE
                    }

                    setcookie($email, $password, time() + (10), "/");


                    $upit="SELECT id_korisnik,password FROM korisnik WHERE email='$email'";
                    $rezultat=$konekcija->prepare($upit);
                    $rezultat->execute();
                    $rezultat->bind_result($id,$lozinka_iz_baze);

                    $brojac=0;
                    while($rezultat->fetch()){
                    	$brojac++;
                    }
                    $konekcija->close();


                     if($brojac==1 && $password === $lozinka_iz_baze){ //AKO JE LOZINKA INDENTICNA LOGOVANJE JE DOZVOLJENO

                    	if(!empty($zapamti_me))   //AKO NIJE PRAZNA PRAVIMO KOLACICE
                    			 {

                    																 $passwordhash = base64_encode($password);
                    																 setcookie("EMAIL", $email, time() + (86400 * 30), "/");
                    																 setcookie("pass", $passwordhash, time() + (86400 * 30), "/");  //FORMIRANI KOLACICI ZA EMAIL I PASSWORD KOJI TRAJU MESECDANA. BRAUZER IH PAMTI
                    																 $_SESSION['id']=$id;
                    																 exit(json_encode('Uspesno logovanje'));

                    			 }

                    	 else{
                  													  		$_SESSION['id']=$id;
                    										 				  exit(json_encode('Uspesno logovanje'));
                    	 		 }

                    }

                    else if ($brojac==1 && base64_encode($password) == $lozinka_iz_baze){
                    	if(!empty($zapamti_me))   //AKO NIJE PRAZNA PRAVIMO KOLACICE
                    			 {

                    													 $passwordhash = base64_encode($password);
                    													 setcookie("EMAIL", $email, time() + (86400 * 30), "/");
                    													 setcookie("pass", $passwordhash, time() + (86400 * 30), "/");  //FORMIRANI KOLACICI ZA EMAIL I PASSWORD KOJI TRAJU MESECDANA. BRAUZER IH PAMTI
                    													 $_SESSION['id']=$id;
                    													 exit(json_encode('Uspesno logovanje'));

                    			  }
                    	  else{

                    		 									 $_SESSION['id']=$id;
                    		 									 exit(json_encode('Uspesno logovanje'));


                    }
                  }
                    else if ($brojac==0){
                      	exit(json_encode('Nismo pronasli vas EMAIL!'));
                      }
                    else if ($brojac==1 && base64_encode($password) != $lozinka_iz_baze)
                                  {exit(json_encode("Pogresna lozinka"));
                    }
                    else {
                    	exit(json_encode('ERROR'));
                    }
                  }




                  function registracija()
                  {
                                          include ('konekcija.php');

                                          $email = mysqli_real_escape_string($konekcija,$_POST['email']);
                                          $lozinka = mysqli_real_escape_string($konekcija,$_POST['lozinka']);

                                          $provera = "SELECT * FROM korisnik";
                                          $rezultat_provere=$konekcija->prepare($provera);
                                          $rezultat_provere->execute();

                                          if($rezultat_provere->fetch() > 0) { exit(json_encode("Maximalan broj korisnika je vec registrovan"));}

                                          else{

                                          if(!filter_var($email, FILTER_VALIDATE_EMAIL))
                                            {
                                                     exit(json_encode("Nepravilno unet email"));
                                            }

                                                   else{

                                                  $passwordhash = password_hash("$lozinka",PASSWORD_BCRYPT); //hasuje sifru
                                                   $passwordhash = base64_encode($lozinka);

                                                   $upit="INSERT INTO korisnik(email,password) VALUES ('$email','$passwordhash')";
                                                   $rezultat = $konekcija->prepare($upit);
                                                   $rezultat->execute();

                                                   $IDtog_novog_reda_u_bazi = mysqli_insert_id($konekcija);


                                                   setcookie("EMAIL", $email, time() + (86400 * 30), "/");
                                                   setcookie("pass", $passwordhash, time() + (86400 * 30), "/");  //FORMIRANI KOLACICI ZA EMAIL I PASSWORD KOJI TRAJU MESECDANA. BRAUZER IH PAMTI

                                                   $konekcija->close();



                                            					    exit(json_encode("Uspesna registracija"));




                                                  }
                                          }
                  }

    }
