# Portfolio website with deployment on Django

## How to start

### Clone the repository

Using git clone "link" clone it to your local folder.

### Steps to follow in the django deployment

#### Create virtual environment

    I. PL\Practice\Portfolio> python -m venv myenv

    II. PL\Practice\Portfolio> myenv/Scripts/activate

    III. PL\Practice\Portfolio> pip install django

#### Create the project and its app:

    I. PL\Practice\Portfolio> django-admin startproject portfolio

    II. PL\Practice\Portfolio> cd .\portfolio\

    III. PL\Practice\Portfolio\portfolio> django startapp portfolioApp

    IV. PL\Practice\Portfolio\portfolio> mkdir templates

#### Make Changes in the following folders:

1. templates:

   I. Add the profile.html file

2. portfolio/settings.py:

   I. Under 'INSTALLED_APPS' add 'templates', 'portfolioApp'

   II. Import os and under 'TEMPLATES' in 'DIRS' add [os.path.join(BASE_DIR, 'templates')],

3. portfolioApp/views.py

   I. Add the function:
   def index(request):
   return render(request, 'profile.html')

#### Create urls.py in portfolio

    from django.contrib import admin
    from django.urls import path
    from portfolioApp.views import index

    urlpatterns = [
        path('admin/', admin.site.urls),
        path('profile/', index),
    ]

### Run the code

    python manage.py migrate
    python manage.py runserver
