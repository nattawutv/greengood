from django.shortcuts import render

from .models import Site


def index(request):

    latest_question_list = Site.objects.filter(pk=1)
    context = {'latest_question_list': latest_question_list}
    return render(request, 'index.html', context)
