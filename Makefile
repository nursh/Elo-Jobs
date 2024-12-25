# Load environment variables from .env file
include .env
export $(shell sed 's/=.*//' .env)

build-image:
	docker build --platform linux/amd64 -t crgdevaikawader.azurecr.io/ict_front_end:1.0.0 .

run-docker:
	docker run -d -p 80:80 --name poc crgdevaikawader.azurecr.io/ict_front_end:1.0.0
	docker logs -f poc

login-docker:
	@docker login crgdevaikawader.azurecr.io -u crgdevaikawader -p $(AZURE_CONTAINER_REGISTRY_KEY)

push-image: login-docker
	docker push crgdevaikawader.azurecr.io/ict_front_end:1.0.0

