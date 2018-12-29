from django.contrib import admin

from .models import Site
from .models import Store
from .models import Division
from .models import Category
from .models import Price
from .models import Item
from .models import SubItem

admin.site.empty_value_display = '(None)'


@admin.register(Site)
class SiteAdmin(admin.ModelAdmin):
    list_display = ('code', 'site_name')


@admin.register(Store)
class StoreAdmin(admin.ModelAdmin):
    list_display = ('code', 'store_name', 'view_site_name')

    def view_site_name(self, obj):
        return obj.site.site_name
        view_site_name.short_description = 'Site Name'
        view_site_name.admin_order_field = 'site'


@admin.register(Division)
class DivisionAdmin(admin.ModelAdmin):
    list_display = ('code', 'div_name', 'view_store_name')

    def view_store_name(self, obj):
        return obj.store.store_name
        view_store_name.short_description = 'Store Name'
        view_store_name.admin_order_field = 'store'


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('code', 'cat_name', 'view_div_name')

    def view_div_name(self, obj):
        return obj.div.div_name
        view_div_name.short_description = 'div Name'
        view_div_name.admin_order_field = 'div'


admin.site.register(Price)
admin.site.register(Item)
admin.site.register(SubItem)
