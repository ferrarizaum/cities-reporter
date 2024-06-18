import FormaterHTML from "./FormaterHTML.js";
import FormaterTXT from "./FormaterTXT.js";

export default class FormatterFactory {
  static createFormatter(formatType) {
    switch (formatType) {
      case "html":
        return new FormaterHTML();
      case "txt":
        return new FormaterTXT();
      default:
        throw new Error("Invalid formatter type");
    }
  }
}
