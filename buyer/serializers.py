from rest_framework import serializers

from portal.models import Item
from portal.models import Price


class ItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Item
        fields = ('code', 'itm_name', 'img_path', 'rating', 'delivery_fee', 'is_recommend', 'sale_total')


class PricingItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Price
        fields = ('sale_price', 'eff_start_date', 'item')
