# AWS Serverless Application - Financial Lambda Function

## Overview

This serverless application provides financial calculation capabilities through AWS Lambda functions exposed via Amazon API Gateway. 
The primary function, **FV** (Future Value), is accessible through an API endpoint as an HTTP GET request.

## Architecture

FV is serverless lambda function running in dotnet8 runtime Docker container.

## Project Structure

| File | Description |
|------|-------------|
| **serverless.template** | AWS CloudFormation Serverless Application Model template defining Lambda functions and AWS resources |
| **Function.cs** | Contains C# methods mapped to functions declared in the template file |
| **Financial.cs** | Implements financial calculation methods including Future Value (FV) |
| **Startup.cs** | Configures dependency injection for Lambda container or function. Giving serverless functions all kinds of goodies like configs, startups and logging |
| **aws-lambda-tools-defaults.json** | Default settings for AWS deployment tools |
| **Dockerfile** | Uses Amazon ECR .NET 8.0 base image for containerized Lambda deployment |

## Container Image

This project uses Amazon ECR provided .NET 8.0 lambda/dotnet base image that includes:
- Amazon Linux Base operating system
- .NET 8.0 runtime
- Required dependencies
- Lambda Runtime Interface Client (RIC)

## Deployment

The application is deployed as a container image to AWS Lambda and exposed through Amazon API Gateway.


## Security

This Lambda function follows AWS best practices for security:
- IAM roles with least privilege
- Encryption in transit with HTTPS
- Parameter validation and sanitization

## Monitoring

The application is monitored using:
- Amazon CloudWatch Logs
- AWS X-Ray for distributed tracing
- CloudWatch Metrics for performance monitoring

---

## API Endpoints

 > NOTE: FV and other finacial functions are documented in their README.md files.

### Future Value (FV) Calculator

**Endpoint:** GET /fv

**Parameters:**
- `principal`: Initial investment amount
- `rate`: Annual interest rate (decimal)
- `periods`: Number of time periods
- `pmt`: Regular payment amount (optional)

**Response:**
```json
  "1234.56"
```