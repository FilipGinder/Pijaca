<div id="div_izmene_sektora">
      <button type="button" class="close" id="zatvori_div_izmena_sektora" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <h5 id="naslov_forme_izmeni_sektor">Izmeni sektor<br><span id="ispis_koji_sektor_menjamo"></span></h5>

      <label id="novo_ime_sektora_label" for="broj_tezge">Novo ime sektora:</label>
      <input type="text" id="novo_ime_sektora">

      <label id="label_odabir_sa_stranama_ili_bez" for="odabir_strana_ili_direktno">Odaberi sa stranama ili direktno:</label>
      <select id="odabir_strana_ili_direktno">
       <option value="bez_stranica">Bez stranica - direktno</option>
       <option value="sa_stanicama_levo_desno">Sa stranicama levo desno</option>
      </select>

     <button type="button" class="btn btn-success" id="sacuvaj_izmena_sektora" value="" name="button">Sacuvaj izmene</button>
     <br>
     <button type="button" class="btn btn-danger" id="obrisi_odredjeni_sektor" value="" name="button">Obrisi sektor</button>
  </div>
