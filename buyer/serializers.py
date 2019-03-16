from rest_framework import serializers

from portal.models import Item
from portal.models import Price


class ItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Item
        fields = ('code', 'itm_name', 'img_path', 'rating', 'delivery_fee', 'is_recommend', 'sale_total')


class PricingItemSerializer(serializers.ModelSerializer):

    item =  serializers.SerializerMethodField()

    def get_item(self, obj):
        if obj.item:
            return obj.item.itm_name
        return ""

    class Meta:
        model = Price
        fields = '__all__'
