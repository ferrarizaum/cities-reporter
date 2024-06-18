import fs from "node:fs";
import FormatterFactory from "./FormatterFactory.js";

export default class CitiesReporter {
  constructor({ formatType }) {
    console.log("Tipo Formato: " + formatType);
    this.formatter = FormatterFactory.createFormatter(formatType);
  }

  async report(filename) {
    const citiesJson = await fs.promises.readFile(filename, "utf8");
    const cities = JSON.parse(citiesJson);
    return this.formatter.output(cities);
  }
}
