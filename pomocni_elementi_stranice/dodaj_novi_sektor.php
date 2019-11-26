<!-- DODAJ NOV SEKTOR -->
<div id="forma_dodaj_nov_sektor">
       <button type="button" class="close" id="zatvori_dodavanje_sektora" aria-label="Close">
         <span aria-hidden="true">&times;</span>
       </button>
       <h5 id="naslov_forme_dodavanje_sektora">Dodaj novi sektor</h5>

       <label id="label_input_novi_sektor" for="novi_sektor">Ime novog sektora:</label>
        <input type="text" id="novi_sektor" placeholder="Sektor">

        <select id="odabir_sektor_sa_stranama_ili_bez">
            <option value="1" hidden disabled selected>Odaberi jednu od opcija</option>
            <option value="sa_stanicama_levo_desno">Sa stanicama levo desno</option>
            <option value="bez_stranica">Bez stranica - direktno</option>
        </select>

        <input type="button" class="btn btn-success" id="sacuvaj_novi_sektor" value="Sacuvaj">
</div>
<!-- DODAJ NOV SEKTOR -->
