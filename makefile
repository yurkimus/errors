# Variables

Bold := \033[1m
Green := \033[32m
Reset := \033[0m

# Targets

help:
	@echo "\nAvailable Commands:"
	@echo ""
	@echo "  $(Bold)$(Green)npm$(Reset)    install npm dependencies."
	@echo "  $(Bold)$(Green)deno$(Reset)   install deno dependencies."
	@echo ""

npm:
	npm install --save-exact

deno:
	deno install --reload --entrypoint source/*
