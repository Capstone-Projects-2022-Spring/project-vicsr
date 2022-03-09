from django.urls import path
from .views import AccountAPIView
from rest_framework.authtoken.views import obtain_auth_token
from django.conf.urls import url
from.import views

app_name='accounts'

urlpatterns = [
    path('register/', AccountAPIView.as_view(), name='register'),
    path('login/', obtain_auth_token, name='login'),
    path('logout/', AccountAPIView.as_view(), name='logout'),

    url(r'^signup/$', views.signup_view, name="signup"),
    url(r'^login/$', views.login_view, name="login"),
    url(r'^logout/$', views.logout_view, name='logout'),
]
