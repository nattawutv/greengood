from rest_framework import serializers

from portal.models import Item
from portal.models import Price
from portal.models import Category


class ItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = Item
        fields = '__all__'


class PricingItemSerializer(serializers.ModelSerializer):

    item_name = serializers.SerializerMethodField()

    @staticmethod
    def get_item_name(obj):
        return obj.item.itm_name

    class Meta:
        model = Price
        fields = '__all__'


class DivCatSerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'
