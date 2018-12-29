from django.urls import path

from . import views

app_name = 'buyer'
urlpatterns = [
    path('', views.home, name='home'),
    path('<int:cat_id>/', views.detail, name='detail'),
    path('rest', views.rest, name='rest'),
]
