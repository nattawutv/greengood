from django.test import TestCase

from .models import Site
from .models import Store
from .models import Division
from .models import Category
from .models import Price
from .models import Item
from .models import SubItem


# Create your tests here.
class SiteModelTests(TestCase):

    def test_CRUD(self):
        # create
        Site.objects.create(site_name='foo')
        site = Site.objects.get(site_name='foo')
        self.assertIsNotNone(site)
        # update
        Site.objects.filter(pk=site.pk).update(site_name='bar')
        site.refresh_from_db()
        self.assertEquals(site.site_name, 'bar')
        # delete
        site = Site.objects.get(site_name='bar')
        site.delete()
        with self.assertRaisesMessage(Exception, 'Site matching query does not exist.'):
            site.refresh_from_db()

    def test_check_duplicate_name(self):
        Site.objects.create(code='1', site_name='Too')
        with self.assertRaisesMessage(Exception,
                                      'duplicate key value violates unique constraint "portal_site_site_name_key'):
            Site.objects.create(code='2', site_name='Too')

    def test_check_duplicate_code(self):
        Site.objects.create(code='1', site_name='foo')
        with self.assertRaisesMessage(Exception,
                                      'duplicate key value violates unique constraint "portal_site_code_key'):
            Site.objects.create(code='1', site_name='bar')

    def test_check_null_name(self):
        with self.assertRaisesMessage(Exception, 'null value in column "site_name" violates not-null constraint'):
            Site.objects.create(code='1', site_name=None)

    def test_check_null_code(self):
        with self.assertRaisesMessage(Exception, 'null value in column "code" violates not-null constraint'):
            Site.objects.create(code=None, site_name='foo')


class PortalTest(TestCase):

    def test_create_shop(self):
        first_site = Site(code='0001', site_name='foo')
        first_site.save()

        first_store = Store(code='0001', store_name='freeShop', site=first_site)
        first_store.save()
        self.assertIsNotNone(first_store.site.id)

        div = Division(code='01', div_name='fruits', store=first_store)
        div.save()
        self.assertIsNotNone(div.store.id)

        cat = Category(code='01', cat_name='Organic fruits', div=div)
        cat.save()
        self.assertIsNotNone(cat.div.id)

        price = Price(sale_price='20')
        price.save()

        item = Item(code='001', itm_name='Orange', cat=cat, price=price)
        item.save()
        self.assertIsNotNone(item.cat.id)
        self.assertIsNotNone(item.price.id)

        sub1 = SubItem(code='01', sub_name='Mandarin', item=item)
        sub2 = SubItem(code='02', sub_name='shogun', item=item)
        sub1.save()
        sub2.save()
        self.assertEqual(sub1.item.id, sub2.item.id)
