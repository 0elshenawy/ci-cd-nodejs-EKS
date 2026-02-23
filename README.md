# Node.js CI/CD with EKS

This project demonstrates a complete **CI/CD pipeline** for a simple Node.js application deployed on **AWS EKS** using **GitHub Actions**.

## Project Overview

- A simple Node.js app that prints:  
  `hello from mahmoud abdel latif`
- Dockerized and pushed to **AWS ECR**.
- Deployed to **EKS cluster** with a **LoadBalancer Service**.
- CI/CD pipeline automates:
  - Docker image build and push
  - Deployment updates on EKS

## Features

- **Continuous Integration:**  
  Automatically installs dependencies and runs a sanity check.
- **Continuous Deployment:**  
  Pushes Docker images to ECR and updates Kubernetes Deployment & Service.
- **AWS Integration:**  
  Works with EKS, ECR, and CloudWatch logging enabled.


## How to Use

1. Set up **AWS credentials** as GitHub secrets:  
   `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_ACCOUNT_ID`, `AWS_REGION`
2. Trigger the **CI workflow** on push to build and test the Node.js app.
3. Trigger the **CD workflow** manually via GitHub Actions to build, push, and deploy the Docker image to EKS.

## Notes

- Kubernetes manifests are located in the `k8s` folder.
- The CI/CD pipeline is fully automated with GitHub Actions.

---

**Author:** Mahmoud Abdel Latif
