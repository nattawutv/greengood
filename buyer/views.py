from django.shortcuts import get_object_or_404, render
from django.http import JsonResponse

from rest_framework import viewsets

from portal.models import Category
from portal.models import Item
from portal.models import Price

from buyer.serializers import ItemSerializer
from buyer.serializers import PricingItemSerializer


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


# Test Json
def most_popular(request):
    print('rest:connected')

    queryset = Price.objects.all()
    for row in queryset:
        print(row.item.code, row.item.itm_name)

    json = JsonResponse({'items': [{'name': 'xxx'}]})
    return json


class RecommendItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.filter(is_recommend=True)[:5]
    serializer_class = ItemSerializer


class GetTopSaleItem(viewsets.ModelViewSet):
    queryset = Item.objects.order_by('-sale_total')[:5]
    serializer_class = ItemSerializer


class GetPricingItem(viewsets.ModelViewSet):
    queryset = Price.objects.all()
    serializer_class = PricingItemSerializer
