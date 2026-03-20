# Task 7: Environment Variables & PATH

## 📌 Overview
This project demonstrates how to work with **Environment Variables** and **PATH** configuration on Linux (and Windows). It covers viewing, creating, modifying, persisting, testing, and debugging environment variables.

---

## 🛠️ Tools Used
- **Primary:** Linux Shell (Bash)
- **Alternative:** Windows Command Prompt / PowerShell

---

## 📁 Project Structure
```
task7-env-vars/
├── README.md               ← This file
├── docs/
│   ├── step-by-step.md     ← Detailed guide for all 7 steps
│   └── env_config.txt      ← Documented environment configuration
├── screenshots/
│   └── (add your terminal screenshots here)
└── scripts/
    └── setup_env.sh        ← Shell script to automate setup
```

---

## 🚀 Steps Completed

| Step | Task | Status |
|------|------|--------|
| 1 | View environment variables | ✅ Done |
| 2 | Create custom variables | ✅ Done |
| 3 | Modify PATH variable | ✅ Done |
| 4 | Make variables persistent | ✅ Done |
| 5 | Test changes | ✅ Done |
| 6 | Debug PATH issues | ✅ Done |
| 7 | Document configuration | ✅ Done |

---

## ⚡ Quick Start

Clone the repo and run the setup script:
```bash
git clone https://github.com/YOUR_USERNAME/task7-env-vars.git
cd task7-env-vars
chmod +x scripts/setup_env.sh
./scripts/setup_env.sh
```

---

## 📝 Key Commands Reference

### View Variables
```bash
printenv              # All environment variables
echo $PATH            # View PATH
echo $HOME            # View HOME
```

### Create Variables
```bash
export MY_NAME="John"
export MY_APP_PORT=8080
```

### Modify PATH
```bash
export PATH=$PATH:/home/user/my-scripts
```

### Make Persistent
```bash
echo 'export MY_NAME="John"' >> ~/.bashrc
echo 'export MY_APP_PORT=8080' >> ~/.bashrc
source ~/.bashrc
```

### Debug PATH
```bash
echo $PATH | tr ':' '\n'         # Readable PATH list
which python3                     # Find command location
echo $PATH | tr ':' '\n' | sort | uniq -d  # Find duplicates
```

---

## 🎯 Final Outcome
Intern understands runtime configuration — how to set, persist, and debug environment variables across Linux and Windows systems.

---

## 👤 Author
- **Name:** Your Name
- **Internship Task:** Task 7 — Environment Variables & PATH
- **Date:** February 2026
