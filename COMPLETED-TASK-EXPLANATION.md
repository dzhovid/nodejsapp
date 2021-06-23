# MFGx DevOps Exercise - Completed


1. Write a Dockerfile for this application that creates a runnable container image for the application.
   
   Dockerfile is created and tested in on Docker host. It is pushed to my GitHub public repo.
   The resulting Docker image is tagged as dzhovid/my-image and pushed to my public Docker Hub repo.

2. Write a docker-compose.yaml file with a service definition for the container image created in step #1 that binds the service through so that it can be called outside of docker.

   docker-compose.yaml file is created, tested, and pushed to my public GitHub repo. 

3. Write a Kubernetes service, deployment, and horizontal pod autoscaler definition for the application that will scale up to 10 replicas based on a CPU Utilization exceeding 50%.

   deployment.yaml, service.yaml, and autoscaler.yaml files created, tested on GCP Kubernetes Engine, and pushed to my GitHub repo.

Git Commit History:

   Logs for task 1 and 2 are provided in the file git-commit-history-task-1-2.txt

   Logs for task 3 are provided in the file git-commit-history-task-3.txt
