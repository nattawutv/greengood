from django.shortcuts import get_object_or_404, render

from portal.models import Category
from portal.models import Item

from django.http import JsonResponse


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


def rest(request):
    print('rest:connected')
    json = JsonResponse({'items':[{'name':'xxx'}]})
    print('data', json)
    return json
