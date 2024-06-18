import Decorator from "./Decorator.js";

export default class TXTDecorator extends Decorator {
  constructor(formater) {
    super(formater);
  }

  output(cities) {
    let enhancedTxt = this.decorated.output(cities);
    enhancedTxt += `\n\nAdditional information added by the TXTDecorator.`;
    return enhancedTxt;
  }
}
