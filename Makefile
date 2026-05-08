.PHONY: help install-hooks dev build data test test-integration smoke lint fmt pages-preview clean hooks-pre-commit hooks-commit-msg hooks-pre-push release

help:
	@printf "%s\n" \
		"make install-hooks     wire .githooks" \
		"make dev               run the Vite dev server" \
		"make build             build GitHub Pages output into docs/" \
		"make data              validate static data artifacts" \
		"make test              run unit tests" \
		"make test-integration  run Playwright e2e tests" \
		"make smoke             build, serve docs/, and run Playwright" \
		"make lint              run all linters" \
		"make fmt               autoformat" \
		"make pages-preview     serve docs/ locally like Pages" \
		"make release           tag v$$(node -p \"require('./package.json').version\")" \
		"make clean             remove generated local outputs"

install-hooks:
	git config core.hooksPath .githooks
	chmod +x .githooks/*

dev:
	npm run dev

build:
	npm run build

data:
	npm run data

test:
	npm run test

test-integration:
	npm run test:e2e

smoke:
	npm run smoke

lint:
	npm run lint
	npm run fmt:check
	npm run typecheck
	npm run audit

fmt:
	npm run fmt

pages-preview:
	npm run preview

hooks-pre-commit:
	npm run hooks:pre-commit

hooks-commit-msg:
	npm run hooks:commit-msg -- .git/COMMIT_EDITMSG

hooks-pre-push:
	npm run hooks:pre-push

release:
	git tag v$$(node -p "require('./package.json').version")
	git push origin v$$(node -p "require('./package.json').version")

clean:
	rm -rf coverage playwright-report test-results tmp dist
