import React from "react";
import './Translation.css'; 

function Translation() {
  return (
    <table className="cool-table">
      <caption className="caption">
        Gherkin termini
      </caption>
      <thead>
        <tr>
          <th scope="col">English</th>
          <th scope="col">Latviešu</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row">Feature</td>
          <td>Funkcionalitāte</td>
        </tr>
        <tr>
          <td scope="row">Background</td>
          <td>Konteksts</td>
        </tr>
        <tr>
          <td scope="row">Scenario</td>
          <td>Piemērs, Scenārijs</td>
        </tr>
        <tr>
          <td scope="row">Scenario Outline</td>
          <td>Scenārijs pēc parauga</td>
        </tr>
        <tr>
          <td scope="row">Examples</td>
          <td>Piemēri</td>
        </tr>
        <tr>
          <td scope="row">Given</td>
          <td>Kad</td>
        </tr>
        <tr>
          <td scope="row">When</td>
          <td>Ja</td>
        </tr>
        <tr>
          <td scope="row">Then</td>
          <td>Tad</td>
        </tr>
        <tr>
          <td scope="row">And</td>
          <td>Un</td>
        </tr>
        <tr>
          <td scope="row">But</td>
          <td>Bet</td>
        </tr>
        <tr>
          <td scope="row">Or</td>
          <td>Vai</td>
        </tr>
        <tr>
          <td scope="row">Kas un kāpēc ir funkcionālā iezīme?</td>
          <td>Skaidri un strukturēti aprakstītu sistēmas uzvedību.</td>
        </tr>
        <tr>
          <td scope="row">Kādā formātā veidot lietotājstāstus?</td>
          <td>Kā autors, es vēlos dabūt epilepsiju, lai sasniegtu mērķi nomirt.</td>
        </tr>
        <tr>
          <td scope="row">Kā veidot scenārijus?</td>
          <td>Given – sākotnējie nosacījumi vai priekšnosacījumi. When – darbība vai notikums, kas tiek veikts. Then – paredzamais rezultāts vai sistēmas reakcija.</td>
        </tr>
        <tr>
          <td scope="row">Kā Rubika kubs ļauj skatīties uz funkcionālajām iezīmēm?</td>
          <td>Katrs pagrieziens simbolizē jaunu skatījumu uz funkcionalitāti.</td>
        </tr>
        <tr>
          <td scope="row">Kas ir veiksmīgā iznākuma scenārijs?</td>
          <td>Veiksmīgā iznākuma scenārijs ir ideālais gadījums, kurā funkcionalitāte darbojas bez problēmām un visi nosacījumi ir izpildīti.</td>
        </tr>
      </tbody>
    </table>
    
  );
  
}


export default Translation;
