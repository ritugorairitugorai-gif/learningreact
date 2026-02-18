# myproject/views.py
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required


# Login page
def login_view(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('index')
    return render(request, "login.html")

# Signup page
from django.contrib.auth.models import User
def signup_view(request):
    if request.method == "POST":
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        User.objects.create_user(username=username, email=email, password=password)
        return redirect('login')
    return render(request, "signup.html")

# Logout
def logout_view(request):
    logout(request)
    return redirect('login')

# Pages (require login)
@login_required
def index(request):
    return render(request, "index.html")

@login_required
def about(request):
    return render(request, "about.html")

@login_required
def contact(request):
    return render(request, "contact.html")

@login_required
def booking(request):
    return render(request, "booking.html")

@login_required
def gallery(request):
    return render(request, "gallery.html")

@login_required
def packages(request):
    return render(request, "packages.html")

@login_required
def services(request):
    return render(request, "services.html")

@login_required
def testimonials(request):
    return render(request, "testimonials.html")
