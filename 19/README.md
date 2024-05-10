# Portfolio website with JS static file Django

Follow the steps to create and run a normal Django server.

### Add a static file:

1.  To add a static file such as js or css make the following changes.

    I. Create a folder named static in your project

    II. Add your static files such as js, css and images here.

    III. Paste this line in settings.py

        STATICFILES_DIRS = [
            os.path.join(BASE_DIR, 'static')
        ]

    IV. In your html file change the directory of files from

     <script src="/dynamicApp/index.js"></script>

    TO:

     <script src="/static/dynamicApp/index.js"></script>

#### You are good to go...

### Run your project

    python manage.py migrate
    python manage.py runserver
