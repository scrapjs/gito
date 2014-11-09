MOCHA = ./node_modules/.bin/mocha
TESTS = $(wildcard test/*.js)

all:
	npm install

test:
	$(MOCHA) ./test/commandline.js

.PHONY: test