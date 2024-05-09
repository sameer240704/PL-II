# List of commands

### Inital Commands for setup

```bash
python -m venv venv
```

```bash
venv\Scripts\activate
```

```bash
.\venv\Scripts\Activate
```

```bash
pip install django
```

```bash
django-admin
```

```bash
django-admin startproject crud_app
```

```bash
cd crud_app
```

```bash
django-admin startproject crud
```

### To run the project

```bash
python .\manage.py runserver
```

```bash
django-admin startapp crud_app
```

### Make this change in settings.py of crud

```bash
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'crud_app'
]
```

```bash
// In the same directory as crud and crud_app create a folder named templates to store the html files and make the following changes in settings.py

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, "templates")],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
```

### Changes in crud_app and crud

```bash
// Create a urls.py in crud_app folder and add the following

from django.urls import path

urlpatterns = [
    path("", home),
    path("home/", home)
]

// And make the changes in urls.py in crud folder
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path("crud_app/", include('crud_app.urls'))
]
```

#### Note: I have Bootstrap for setting up the client-side components

### After writing code in models.py

```bash

python .\manage.py makemigrations

python .\manage.py migrate
```

### Use [Online SQLite3 Database Viewer](https://sqliteviewer.app/) for viewing SQLite3 files and in the Open File Section of the website, upload your db.sqlite3 file

## [Youtube Reference](https://youtu.be/VETRxH88OUM?feature=shared)
