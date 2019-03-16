from rest_framework import serializers

from portal.models import Item
from portal.models import Price
from portal.models import Category


class ItemSerializer(serializers.ModelSerializer):

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
        fields = ('code', 'itm_name', 'img_path', 'rating', 'delivery_fee', 'is_recommend', 'sale_total')


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


class DivCatSerializer(serializers.ModelSerializer):

    div_name = serializers.SerializerMethodField()

    @staticmethod
    def get_div_name(obj):
        return obj.div.div_name

    class Meta:
        model = Category
        fields = '__all__'
