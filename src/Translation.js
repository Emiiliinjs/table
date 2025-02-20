import React from "react";
import './Translation.css';  // Create a CSS file to hold the styles

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
      </tbody>
    </table>
  );
}

export default Translation;
