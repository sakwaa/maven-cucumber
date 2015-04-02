$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("nostalgic/textadv/voxam/parser.feature");
formatter.feature({
  "id": "parsing-user-input",
  "description": "",
  "name": "Parsing User Input",
  "keyword": "Ability",
  "line": 1
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "the game parser",
  "keyword": "Given ",
  "line": 4
});
formatter.match({
  "location": "ParserSteps.the_game_parser()"
});
formatter.result({
  "duration": 107828000,
  "status": "passed"
});
formatter.scenario({
  "id": "parsing-user-input;parse-a-valid-single-word-command",
  "description": "",
  "name": "Parse a valid single word command",
  "keyword": "Scenario",
  "line": 6,
  "type": "scenario"
});
formatter.step({
  "name": "the command \"inventory\" is parsed",
  "keyword": "When ",
  "line": 7
});
formatter.step({
  "name": "the verb is \"inventory\"",
  "keyword": "Then ",
  "line": 8
});
formatter.step({
  "name": "there is no direct object",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "the parser response is \"Success\"",
  "keyword": "And ",
  "line": 10
});
formatter.match({
  "arguments": [
    {
      "val": "inventory",
      "offset": 13
    }
  ],
  "location": "ParserSteps.the_command_is_parsed(String)"
});
formatter.result({
  "duration": 1767000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "inventory",
      "offset": 13
    }
  ],
  "location": "ParserSteps.the_verb_is(String)"
});
formatter.result({
  "duration": 67000,
  "status": "passed"
});
formatter.match({
  "location": "ParserSteps.there_is_no_direct_object()"
});
formatter.result({
  "duration": 43000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 24
    }
  ],
  "location": "ParserSteps.the_parser_response_is(String)"
});
formatter.result({
  "duration": 93000,
  "status": "passed"
});
});