# Passing Dynamic Values from views.py Django

#### Follow the steps to create and run a normal Django server...

### In views.py:

1.  Create your own data for example:

        context = {
            'title': 'Dynamic Django',
            'content': 'Welcome to the Django Dynamic App',
            'language': ['Python', 'Django', 'HTML', 'CSS', 'JavaScript']
        }

2.  Under function pass the data as paramter

        def index(request):
            return render(request, 'index.html', context)

### In templates:

To use data from view.py call the variables in double curly brackets {{variable}}.

1.  Calling a value.

        ...
        <head>
            <title>{{title}}</title>
        </head>
        ...

2.  Using for loop to call list data.

        ...
        <div>
            <h1>Languages used are:</h1>
            {% for i in language %}
                <span>{{i}}</span>
            {% endfor %}
        </div>
        ...

    {% for %}: Helps to use for loops in our html.

#### You are good to go...

### Run your project

    python manage.py migrate
    python manage.py runserver
