# Project OverView and Installation

## Installation
### With Docker
If you have Docker on your system, follow these steps:

```sh
git clone https://github.com/tomhyhan/CPT.git
cd CPT
```
```sh
docker compose up --build
```

**To clean up after:**
```sh
docker compose down --volumes --remove-orphans --rmi all
```

### Without Docker
```sh
git clone https://github.com/tomhyhan/CPT.git
cd CPT
```
```sh
cd backend
python -m venv venv
source ./venv/bin/activate  # On Linux
pip install -r requirements.txt
python manage.py runserver
```

```sh
cd frontend
npm install
npm run dev
```

### Access app
  - Frontend app: [localhost:5173](http://localhost:5173/)
  - backend admin panel: [localhost:8000/admin](http://localhost:8000/admin/)

**To login:**
  - username: admin
  - password: admin

## Dependencies
 1. Django: djangorestframework, django-filter, django-cors-headers
 2. React: axios, react-query, use-debounce, tailwindcss, headlessui, heroicons

## Assumptions
  1. Tags follow 'AND' Logic, so choosing multiple tags narrows down your search.
  2. Development environment is enough for this project.

## AI Attribution
  1. Generating sample data. 
  2. Frontend React Component design and styling with minor adjustments.
  3. Optimizing QueryFilter (noted in comment).
  4. Generating Docker files and I made some adjustments to make it light, simple and mimic the dev environment.