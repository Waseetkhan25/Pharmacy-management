 # 💊 Pharmacy Management System

A Node.js REST API for managing pharmacy inventory, built with Express and MongoDB. Includes a fully automated CI/CD pipeline using GitHub Actions and Docker Hub.

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | Backend Runtime |
| Express.js | Web Framework |
| MongoDB | Database |
| Mongoose | ODM for MongoDB |
| Docker | Containerization |
| Docker Compose | Multi-container Setup |
| GitHub Actions | CI/CD Pipeline |
| Vitest | Unit Testing |

---

## 📁 Project Structure

```
pharmacy-management/
├── .github/
│   └── workflows/
│       └── pharmacy-ci-cd.yml   # CI/CD Pipeline
├── server/
│   ├── index.js                 # Main Server File
│   ├── models/
│   │   └── medicine.js          # Medicine Schema
│   ├── routes/
│   │   └── medicines.js         # API Routes
│   └── index.test.js            # Unit Tests
├── Dockerfile                   # Docker Image Blueprint
├── docker-compose.yml           # Multi-container Setup
└── package.json                 # Project Dependencies
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Health Check |
| GET | `/api/medicines` | Get All Medicines |
| POST | `/api/medicines` | Add New Medicine |
| PUT | `/api/medicines/:id` | Update Medicine |
| DELETE | `/api/medicines/:id` | Delete Medicine |

---

## ⚙️ CI/CD Pipeline

Every push to `main` branch automatically triggers the pipeline:

```
Push to main
      │
      ▼
┌─────────────────┐
│  Install & Test  │  ← npm ci → vitest run
└────────┬────────┘
         │ PASSED ✅
         ▼
┌──────────────────────┐
│  Build & Push Docker  │  ← Build → Push to Docker Hub
└──────────────────────┘
```

### Pipeline Steps:
1. **Checkout Code** — Download code onto GitHub runner
2. **Setup Node.js** — Install Node.js v20
3. **Install Dependencies** — Run `npm ci`
4. **Run Tests** — Run Vitest test suite
5. **Login to Docker Hub** — Authenticate using GitHub Secrets
6. **Build Docker Image** — Build with `:latest` and `:commit-sha` tags
7. **Push to Docker Hub** — Push both tags to registry

---

## 🐳 Docker Setup

### Run with Docker Compose:
```bash
# Start the app and database
npm run docker:up

# Stop everything
npm run docker:down
```

### Pull from Docker Hub:
```bash
docker pull waseetkhan/pharmacy-management:latest
```

---

## 🛠️ Local Development

### Prerequisites:
- Node.js v20+
- MongoDB
- Docker Desktop

### Steps:
```bash
# Clone the repo
git clone https://github.com/Waseetkhan25/pharmacy-management.git

# Go into the folder
cd pharmacy-management

# Install dependencies
npm install

# Run the app
npm start

# Run tests
npm test
```

---

## 🔐 Environment Variables

| Variable | Description | Default |
|---|---|---|
| `PORT` | Server Port | `5000` |
| `MONGODB_URI` | MongoDB Connection String | `mongodb://localhost:27017/pharmacy-management` |
| `JWT_SECRET` | JWT Secret Key | — |

---

## 👨‍💻 Author

**Wasee Khan**
- GitHub: [@Waseetkhan25](https://github.com/Waseetkhan25)
- Docker Hub: [waseetkhan](https://hub.docker.com/u/waseetkhan)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
