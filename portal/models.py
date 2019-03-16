from django.db import models
from datetime import datetime


class BaseEntity(models.Model):
    description = models.TextField(null=True, blank=True)
    is_active = models.BooleanField(null=True)
    create_date = models.DateTimeField('date published', default=datetime.now, blank=True)
    update_date = models.DateTimeField('date published', default=datetime.now, blank=True)
    create_by = models.CharField(max_length=50, default='SYSTEM')
    update_by = models.CharField(max_length=50, default='SYSTEM')

    class Meta:
        abstract = True


# Account for seller that register
class Site(BaseEntity):
    code = models.CharField(max_length=4, unique=True, blank=True)
    site_name = models.CharField(max_length=100, unique=True, blank=True)

    def __str__(self):
        return '%s' % self.site_name


class Store(BaseEntity):
    code = models.CharField(max_length=4, unique=True, blank=True)
    store_name = models.CharField(max_length=100, unique=True, blank=True)
    site = models.ForeignKey(Site, on_delete=models.CASCADE)

    def __str__(self):
        return '%s' % self.store_name


class Division(BaseEntity):
    code = models.CharField(max_length=2)
    div_name = models.CharField(max_length=100)
    store = models.ForeignKey(Store, on_delete=models.CASCADE)

    def __str__(self):
        return '%s' % self.div_name


class Category(BaseEntity):
    code = models.CharField(max_length=2)
    cat_name = models.CharField(max_length=100)
    div = models.ForeignKey(Division, on_delete=models.CASCADE)

    def __str__(self):
        return '%s' % self.cat_name


class Item(BaseEntity):
    code = models.CharField(max_length=3)
    itm_name = models.CharField(max_length=50)
    img_path = models.CharField(max_length=100)
    rating = models.IntegerField(default=0)
    delivery_fee = models.DecimalField(max_digits=7, decimal_places=2)
    is_recommend = models.BooleanField(null=True)
    sale_total = models.IntegerField(default=0)
    cat = models.ForeignKey(Category, on_delete=models.CASCADE)
    short_desc = models.TextField(null=True, blank=True)
    # price = models.ForeignKey(Price, on_delete=models.CASCADE)
    # effective date start
    # effective date end

    def __str__(self):
        return '%s' % self.itm_name


class Unit(BaseEntity):
    code = models.CharField(max_length=2)
    unit_name = models.CharField(max_length=50)
    weight = models.CharField(max_length=100, null=True, blank=True)
    weight_unit = models.CharField(max_length=50, null=True, blank=True)

    def __str__(self):
        return '%s' % self.unit_name


class Price(BaseEntity):
    sale_price = models.DecimalField(max_digits=7, decimal_places=2)
    eff_start_date = models.DateTimeField('date published', default=datetime.now, blank=True)
    eff_end_date = models.DateTimeField('date published', default=datetime.now, blank=True)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    unit = models.ForeignKey(Unit, on_delete=models.CASCADE)

    def __str__(self):
        return '%s' % self.sale_price


class SubItem(BaseEntity):
    code = models.CharField(max_length=2)
    sub_name = models.CharField(max_length=50)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)

    def __str__(self):
        return '%s' % self.sub_name


class StockBal(BaseEntity):
    total = models.IntegerField(default=0)




