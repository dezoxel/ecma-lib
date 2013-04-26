require.config({
  baseUrl: "specs",
  paths: {
    "vendor": "../../vendor",
    "src": "../../src",
  },
  shim: {
    "vendor/jasmine/jasmine-html": {
      deps: ["vendor/jasmine/jasmine"],
      exports: "jasmine"
    },
    "string-spec": {
      deps: ["src/string"],
    },
    "array-spec": {
      deps: ["src/array"],
    },
  },
});

modules = ["vendor/jasmine/jasmine-html",
  "src/string", "string-spec",
  "src/array", "array-spec",
];

require(modules, function(jasmine){
  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  jasmineEnv.execute();
});
