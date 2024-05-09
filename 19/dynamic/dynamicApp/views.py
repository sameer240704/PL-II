from django.shortcuts import render


context = {
    'title': 'Dynamic Django',
    'content': 'Welcome to the Django Dynamic App',
    'language': ['Python', 'Django', 'HTML', 'CSS', 'JavaScript']
}

def index(request):
    return render(request, 'index.html', context)

# Create your views here.
