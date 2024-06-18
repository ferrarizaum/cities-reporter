import AbstractFormater from "./AbstractFormater.js";
import * as fs from "fs";

export default class FormaterTXT extends AbstractFormater {
  output(cities) {
    let txt = `Relatório de Nomes de Cidades
  =============================\n`;

    for (let i = 0; i < cities.length; i++) {
      txt += `- ${cities[i]["Nome"]}\n`;
    }

    fs.writeFile("./output.txt", txt, "utf8", (error) => {
      if (error) {
        console.error("An error occurred while writing to the file:", error);
        return;
      }
      console.log("File has been written successfully.");
    });

    return txt;
  }
}
