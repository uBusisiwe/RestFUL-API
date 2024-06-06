# Partner Portal API For Windows 11 users
![Github Action CI/CD](https://github.com/Mutualism-Investments/mutualism-django-backend/actions/workflows/ci.yml/badge.svg)
[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)
[![Flake8 Status](./flake8-badge.svg?dummy=8484744)](./reports/flake8/index.html)

This is the Mutualism partner API built in Django. 

**NB**: This API is not in Rest architecture as yet, we are yet to improve upon this.

Rest API for the Mutualism investor portal, built in Django. 

# Prerequisites

- [Python 3.9.1](https://www.python.org/downloads/)

# Local Development

### Clone the repo
Once you have Docker setup, you can clone the repo.
```powershell
git clone git@github.com:Mutualism-Investments/mutualism-django-backend.git
cd mutualism-django-backend
```

### Create virtual environment
```powershell
mkdir env
python3 -m venv env
```

### Install dependencies
```
pip install -r requirements.txt
```

### Activate virtual environment
``` powershell
source env\Scripts\activate
```

### Verify Python version
python --version

### Create environment variables
```powershell
cp .env.example .env
```

### Create database
```powershell
sqlcmd
-S <server_name> -U <username> -P <password> -Q
create database mutualism;
```

### Run migrations
```powershell
python3 manage.py migrate --settings=mutualism.settings_dev
```

Start the dev server for local development:
```powershell
python manage.py runserver
```

If you want, you can create initial super-user with next command:
```powershell
python manage.py createsuperuser
```

### Environments &amp; Settings

**Production environment is on [mutualism-app](https://mutualism-app.herokuapp.com/) and Staging environment is on [mutualism-test](https://mutualism-test.herokuapp.com/).**

We use separate settings file for development and production which all inherit from `settings.py`.

When running dev commands, ensure to use the `--settings=mutualism.settings_dev` flag.

When running production commands, ensure to use the `--settings=mutualism.settings_prod` flag. In heroku you can run `heroku config:set DJANGO_SETTINGS_MODULE=mutualism.settings_prod`.

We have `staging` settings as well.

### Error Monitoring
We use [Rollbar](https://rollbar.com) for error monitoring. You can view the errors [here](https://rollbar.com/tsmmamba/Mutualism-Backend/). 

### Secrets

We use [Python Decouple](https://python-decouple.com/) to store secrets. 
Create a `.env` file in your project root directory. You can copy the `.env.example` file to your project root directory and edit the values.

### Authentication

We use [Firebase Authentication](https://firebase.google.com/docs/auth/admin/start).

### Scheduled Tasks

We use [Celery](https://docs.celeryproject.org/en/stable/) for scheduled tasks.

In your dev environment, you can run the celery worker with the following command:
```bash
celery -A mutualism worker -l info --settings=mutualism.settings_dev
```

Ensure you have Redis installed and running. You can install Redis with the following command:
```bash
brew install redis
redis-server
```

After having done this, ensure you add these environment variables to your `.env` file:
```bash
CELERY_BROKER_URL=redis://localhost:6379
CELERY_RESULT_BACKEND=redis://localhost:6379
```

##### Integrations
For integrations with other services, we make use of an API key.

You can create an API key in the admin section of the app.

For further docs on how API works, visit this [link](https://florimondmanca.github.io/djangorestframework-api-key/).


> NOTE:
> 
> Upon creating an API key from the admin, the full API key is shown only once in a success message banner. This is what should be passed in authorization headers. After creation, only the prefix of the API key is shown in the admin site, mostly for identification purposes. If you lose the full API key, you'll need to regenerate a new one.
>
> The API key is used to authenticate requests. It is passed in the Authorization header as follows:
>> Authorization: Api-Key <API_KEY>


### Builds
- We use [GitHub Actions](.github/workflows/ci.yml)
- Code formatting is through [black](https://github.com/psf/black)
- We also use [Flake 8](https://www.flake8rules.com/) to improve code quality
- We use [Rollbar](https://rollbar.com) for error monitoring
- We use [Genbadge](https://smarie.github.io/python-genbadge/) for generating our badges for the README.
