docker rm -f micro-service
docker build -t dummy/micro-service .
docker run -d -p 8080:8080 --name micro-service --restart on-failure dummy/micro-service