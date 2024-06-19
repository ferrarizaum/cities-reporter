import fs from "node:fs";
import FormatterFactory from "./FormatterFactory.js";

export default class CitiesReporter {
  constructor({ formatType }, decorator = null) {
    console.log("Tipo Formato: " + formatType);
    this.formatter = decorator
      ? decorator(FormatterFactory.createFormatter(formatType))
      : FormatterFactory.createFormatter(formatType);
  }

  async report(filename) {
    const citiesJson = await fs.promises.readFile(filename, "utf8");
    const cities = JSON.parse(citiesJson);
    this.formatter.write(cities);
    return this.formatter.output(cities);
  }
}
