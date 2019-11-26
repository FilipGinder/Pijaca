<!-- DODAJ NOVU TEZGU-KLIJENTA -->
         <div id="forma_dodaj_novog">
                <button type="button" class="close" id="zatvori_dodavanje_formu" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h5 id="naslov_forme_unos_klijenata">Unesi novog klijenta</h5>

                <label id="label_odabir_u_koji_sektor_se_unosi" for="odabir_u_koji_sektor_se_unosi">Odaberi sektor:</label>
                <select id="odabir_u_koji_sektor_se_unosi"></select>

                <label id="label_odabir_da_li_sektor_ima_stranice_ili_ne" for="odabir_da_li_sektor_ima_stranice_ili_ne">Leva - Desna strana:</label>
                <select id="odabir_da_li_sektor_ima_stranice_ili_ne">
                  <option value="1" hidden disabled selected>Odaberi jednu od opcija</option>
                  <option value="Levo">Levo</option>
                  <option value="Desno">Desno</option>
                </select>

                 <label id="broj_tezge_unos_klijenata" for="broj_tezge">Broj Tezge:</label>
                 <input type="text" id="broj_tezge" placeholder="Broj Tezge">

                 <label id="ime_klijenta_unos_klijenata" for="ime_klijenta">Ime Klijenta:</label>
                 <input type="text" id="ime_klijenta" placeholder="Ime Klijenta">

                 <label id="broj_telefona_unos_klijenata" for="broj_telefona">Broj Telefona:</label>
                 <input type="text" id="broj_telefona" placeholder="Broj Telefona">

                 <input type="button" class="btn btn-success" id="sacuvaj" value="Dodaj">
    </div>
    <!-- DODAJ NOVU TEZGU-KLIJENTA -->
