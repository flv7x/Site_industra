from django.shortcuts import render
# Create your views here.

def loginpg(request):
    return render(request, 'login/login.html')

def home(request):
    return render(request, 'usuarios/home.html',)