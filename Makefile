# Create a network
.PHONY: network
network:
	docker network create my_network

# Build and up dev
.PHONY: dev
dev:
	docker-compose -f docker-compose.dev.yml build
	docker-compose -f docker-compose.dev.yml up

# Build and up prod in detached mode
.PHONY: prod
prod:
	docker-compose -f docker-compose.prod.yml build
	docker-compose -f docker-compose.prod.yml up -d

# Build and up prod without multistage in detached mode
.PHONY: prod-without-multistage
prod-without-multistage:
	docker-compose -f docker-compose.prod-without-multistage.yml build
	docker-compose -f docker-compose.prod-without-multistage.yml up -d

# --- Useful commands ---

# Stop all running containers
.PHONY: kill
kill:
	docker kill $(docker ps -aq) && docker rm $(docker ps -aq)

# Free space
.PHONY: free
free:
	docker system prune -af --volumes