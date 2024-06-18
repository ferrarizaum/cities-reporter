import Decorator from "./Decorator.js";

export default class HTMLDecorator extends Decorator {
  constructor(formater) {
    super(formater);
  }

  output(cities) {
    let enhancedHtml = this.decorated.output(cities);
    enhancedHtml += `<p>This is an enhancement added by the HTMLDecorator.</p>`;
    return enhancedHtml;
  }
}
