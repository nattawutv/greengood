from django.shortcuts import get_object_or_404, render
from django.http import JsonResponse

from rest_framework import viewsets

from portal.models import Category
from portal.models import Item

from buyer.serializers import ItemSerializer


def home(request):
    print('home')
    cat_list = Category.objects.all()
    item_list = Item.objects.all()

    context = {'cat_list': cat_list, 'item_list': item_list}
    return render(request, 'home.html', context)


def detail(request, cat_id):
    print('detail cat id :', cat_id)
    item = get_object_or_404(Item, pk=cat_id)
    print(item)
    return render(request, 'home.html', {'item': item})


# old fashion
def most_popular(request):
    print('rest:connected')

    json = JsonResponse({'items': [{'name': 'xxx'}]})
    return json


class ItemViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
