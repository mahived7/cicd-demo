# CI/CD Pipeline with GitHub Actions & Docker

A full end-to-end CI/CD pipeline that automatically tests, builds, and deploys a Node.js application using GitHub Actions, Docker, and Kubernetes (Minikube).

---

## Pipeline Overview

Every time code is pushed to the \main\ branch, the pipeline automatically:

1. Runs unit tests with Jest
2. Builds a Docker image
3. Pushes the image to Docker Hub
4. The image is deployed to a Kubernetes cluster (Minikube)

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Node.js + Express | Application runtime |
| Jest + Supertest | Unit testing |
| Docker | Containerization |
| GitHub Actions | CI/CD automation |
| Docker Hub | Container image registry |
| Minikube | Local Kubernetes cluster |
| kubectl | Kubernetes CLI |

---

## Project Structure

\\\
cicd-demo/
+-- .github/
¦   +-- workflows/
¦       +-- cicd.yml
+-- k8s/
¦   +-- deployment.yml
+-- app.js
+-- app.test.js
+-- Dockerfile
+-- package.json
+-- README.md
\\\

---

## Getting Started

### Run Locally

\\\ash
git clone https://github.com/mahived7/cicd-demo.git
cd cicd-demo
npm install
npm test
node app.js
\\\

### Run with Docker

\\\ash
docker build -t cicd-demo .
docker run -p 3000:3000 cicd-demo
\\\

### Deploy to Minikube

\\\ash
minikube start --driver=docker
kubectl apply -f k8s/deployment.yml
kubectl get pods
minikube service cicd-demo-svc --url
\\\

---

## GitHub Secrets Required

| Secret | Description |
|--------|-------------|
| \DOCKERHUB_USERNAME\ | Your Docker Hub username |
| \DOCKERHUB_TOKEN\ | Docker Hub personal access token |

---

## Docker Hub

\\\
docker pull vedantanantkumaritkikar/cicd-demo:latest
\\\

---

## Author

**Mahived** — [github.com/mahived7](https://github.com/mahived7)
