# Default command to display help
help:
	@echo "Makefile commands:"
	@echo "  make install        - Install project dependencies"
	@echo "  make clean-install  - Clean install dependencies"
	@echo "  make uninstall      - Uninstall project dependencies"
	@echo "  make format         - Format code with Prettier"
	@echo "  make format-check   - Check code formatting with Prettier"
	@echo "  make dev            - Start the application in development mode"
	@echo "  make build          - Build the application"
	@echo "  make start 		 - Start the application"

# Commands:
install:
	pnpm install

clean-install:
	pnpm ci

uninstall:
	rm -rf ./node_modules

dev:
	pnpm run dev

build:
	pnpm run build

start:
	pnpm run start

format:
	pnpm run prettier

format-check:
	pnpm run prettier_check