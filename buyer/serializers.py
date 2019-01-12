from rest_framework import serializers

from portal.models import Item


class ItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Item
        fields = ('code', 'itm_name')
