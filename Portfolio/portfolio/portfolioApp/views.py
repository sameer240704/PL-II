from django.shortcuts import render

def index(request):
    return render(request, 'profile.html')

# Create your views here.
