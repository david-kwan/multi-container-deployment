#!/bin/bash
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_ID" --password-stdin
docker push davidkwan/multi-container-deployment-client
docker push davidkwan/multi-container-deployment-nginx
docker push davidkwan/multi-container-deployment-server
docker push davidkwan/multi-container-deployment-worker