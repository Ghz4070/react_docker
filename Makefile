.SILENT:
.PHONY: build start down add  console help
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
build: ## Build app
	echo "Lancement de next js 🚀 : $(OK_COLOR)http://localhost:$(PORT)$(NO_COLOR)"
	$(DOCKER_COMPOSE) up --build	

modules: ## copy node modules inside the local path from the container
	echo "Copy node_modules from container to host folder ..."
	docker cp node:/app/node_modules/ .

yarnlock: ## copy yarn lock inside the local path from the container
	echo "Install and copy lockfile from container to host ..."
	$(DOCKER_COMPOSE) exec node yarn --v

start: ## Start app (with deamon add flag -d)		
	echo "Lancement de next js 🚀 : $(OK_COLOR)http://localhost:$(PORT)$(NO_COLOR)"
	$(DOCKER_COMPOSE) up 	

down: ## Shutdown app	
	$(DOCKER_COMPOSE) down

add: ## Add dependencies
	$(DOCKER_COMPOSE) exec node yarn add

console: ## Add dependencies
	$(DOCKER_COMPOSE) exec node /bin/sh

## —— Help 🛠️️ ———————————————————————————————————————————————————————————————
help: ## Liste des commandes
	@grep -E '(^[a-zA-Z0-9_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

