import CitiesReporter from "./src/CitiesReporter.js";
import HTMLDecorator from "./src/HTMLDecorator.js";
import TXTDecorator from "./src/TXTDecorator.js";

const [cmd, script, param1] = process.argv,
  filename = "./data/cidades-2.json";

const reporter = new CitiesReporter(
  { formatType: "html" },
  (city) => new TXTDecorator(city)
);
reporter.report("./data/cidades-2.json").then(console.log);

// Added Factory creational pattern
// Added Strategy behavioral pattern
