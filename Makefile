# Default command to display help
help:
	@echo "Makefile commands:"
	@echo "  make dev            - Start the development server"
	@echo "  make format         - Format code with Prettier"
	@echo "  make format-check   - Check code formatting with Prettier"

# Commands:
dev:
	pnpm run dev

format:
	pnpm run prettier

format-check:
	pnpm run prettier_check