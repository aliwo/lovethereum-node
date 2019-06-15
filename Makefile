test:
  @./node_modules/.bin/mocha -u tdd --reporter spec --require esm

.PHONY: test