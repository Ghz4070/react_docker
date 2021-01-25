.SILENT:
.PHONY: build start down add 
.DEFAULT_GOAL = help

DOCKER_COMPOSE=docker-compose
PORT?=3000

COM_COLOR   = \033[0;34m
OBJ_COLOR   = \033[0;36m
OK_COLOR    = \033[0;32m
ERROR_COLOR = \033[0;31m
WARN_COLOR  = \033[0;33m
NO_COLOR    = \033[m

## —— Nextjs 🤖 ———————————————————————————————————————————————————————————————
build:
	mkdir node_modules
	$(DOCKER_COMPOSE) up --build	

start: ## 		
	$(DOCKER_COMPOSE) up 	

down:	
	$(DOCKER_COMPOSE) down

add: ## Add dependencies
	docker-compose exec node yarn add

## —— Help 🛠️️ ———————————————————————————————————————————————————————————————
help: ## Liste des commandes
	@grep -E '(^[a-zA-Z0-9_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'NAME   := acmecorp/foo

