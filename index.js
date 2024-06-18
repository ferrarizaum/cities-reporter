import CitiesReporter from "./src/CitiesReporter.js";

const [cmd, script, param1] = process.argv,
  filename = "./data/cidades-2.json";

const reporter = new CitiesReporter({ formatType: param1 });
reporter.report("./data/cidades-2.json").then(console.log);

// Added Factory creational pattern
// Added Strategy behavioral pattern
