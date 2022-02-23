from django.shortcuts import render
from rest_framework import viewsets
from django.contrib.auth.models import User, auth
from django.shortcuts import render, redirect
from django.contrib import messages


# Create your views here.


def register(request):

    if request.method =='POST':
        email = request.POST['email']
        username = request.POST['username']
        password = request.POST['password']
        confirmPassword = request.POST['confirmPassword']

        user = User.objects.create_user()(username=username, email=email, password=password, confirmPassword=confirmPassword)
        user.save()
        return redirect('/documentView')

    return render(request, 'register.html')


def login(request):

    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = auth.authenticate(username=username, password=password)

        if user is not None:
            auth.login(request, user)
            return redirect('/documentView')
        else:
            messages.info(request, "Username or password is invalid")
            return redirect("/login")

    else:
        return render(request, 'login.html')


def documentView(request):

    return render(request, 'documentView.html')