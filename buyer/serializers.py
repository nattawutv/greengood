from rest_framework import serializers

from portal.models import Item
from portal.models import Price
from portal.models import Category


class ItemCatDivStoreSerializer(serializers.ModelSerializer):

    div_name = serializers.SerializerMethodField()

    store_name = serializers.SerializerMethodField()

    @staticmethod
    def get_store_name(obj):
        return obj.cat.div.store.store_name

    @staticmethod
    def get_div_name(obj):
        return obj.cat.div.div_name

    class Meta:
        model = Item
        fields = '__all__'


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

    div_name = serializers.SerializerMethodField()

    @staticmethod
    def get_div_name(obj):
        return obj.div.div_name

    class Meta:
        model = Category
        fields = '__all__'
