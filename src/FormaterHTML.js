import AbstractFormater from "./AbstractFormater.js";
import * as fs from "fs";

export default class FormaterHTML extends AbstractFormater {
  output(cities) {
    let html = `
  <!DOCTYPE HTML>
  <html>
    <head>
      <meta http-equiv="content-type" content="text/html; charset=utf-8" />
      <title>Relatório de Nomes de Cidades</title>
    </head>
    <body>
      <h1>Relatório de Nomes de Cidades</h1>
      <ul>
  `;

    for (let i = 0; i < cities.length; i++) {
      html += `     <li>${cities[i]["Nome"]}</li>\n`;
    }

    html += `
      </ul>
    </body>
  </html>`;

    fs.writeFile("./report.html", html, (err) => {
      if (err) {
        console.error("Erro ao escrever o arquivo HTML:", err);
      } else {
        console.log("Arquivo HTML gerado com sucesso.");
      }
    });

    return html;
  }
}
