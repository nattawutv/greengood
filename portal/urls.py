from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    #path('portal/templates/index.html', views.index),
]
