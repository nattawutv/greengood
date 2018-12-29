# Generated by Django 2.1.2 on 2018-11-03 16:02

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField(blank=True, null=True)),
                ('is_active', models.BooleanField(null=True)),
                ('create_date', models.DateTimeField(blank=True, default=datetime.datetime.now, verbose_name='date published')),
                ('update_date', models.DateTimeField(blank=True, default=datetime.datetime.now, verbose_name='date published')),
                ('create_by', models.CharField(default='SYSTEM', max_length=50)),
                ('update_by', models.CharField(default='SYSTEM', max_length=50)),
                ('code', models.CharField(max_length=2)),
                ('cat_name', models.CharField(max_length=100)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Division',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField(blank=True, null=True)),
                ('is_active', models.BooleanField(null=True)),
                ('create_date', models.DateTimeField(blank=True, default=datetime.datetime.now, verbose_name='date published')),
                ('update_date', models.DateTimeField(blank=True, default=datetime.datetime.now, verbose_name='date published')),
                ('create_by', models.CharField(default='SYSTEM', max_length=50)),
                ('update_by', models.CharField(default='SYSTEM', max_length=50)),
                ('code', models.CharField(max_length=2)),
                ('div_name', models.CharField(max_length=100)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField(blank=True, null=True)),
                ('is_active', models.BooleanField(null=True)),
                ('create_date', models.DateTimeField(blank=True, default=datetime.datetime.now, verbose_name='date published')),
                ('update_date', models.DateTimeField(blank=True, default=datetime.datetime.now, verbose_name='date published')),
                ('create_by', models.CharField(default='SYSTEM', max_length=50)),
                ('update_by', models.CharField(default='SYSTEM', max_length=50)),
                ('code', models.CharField(max_length=3)),
                ('itm_name', models.CharField(max_length=50)),
                ('img_path', models.CharField(max_length=100)),
                ('delivery_fee', models.DecimalField(decimal_places=2, max_digits=7)),
                ('is_recommend', models.BooleanField(null=True)),
                ('cat', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='portal.Category')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Price',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField(blank=True, null=True)),
                ('is_active', models.BooleanField(null=True)),
                ('create_date', models.DateTimeField(blank=True, default=datetime.datetime.now, verbose_name='date published')),
                ('update_date', models.DateTimeField(blank=True, default=datetime.datetime.now, verbose_name='date published')),
                ('create_by', models.CharField(default='SYSTEM', max_length=50)),
                ('update_by', models.CharField(default='SYSTEM', max_length=50)),
                ('sale_price', models.DecimalField(decimal_places=2, max_digits=7)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Site',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField(blank=True, null=True)),
                ('is_active', models.BooleanField(null=True)),
                ('create_date', models.DateTimeField(blank=True, default=datetime.datetime.now, verbose_name='date published')),
                ('update_date', models.DateTimeField(blank=True, default=datetime.datetime.now, verbose_name='date published')),
                ('create_by', models.CharField(default='SYSTEM', max_length=50)),
                ('update_by', models.CharField(default='SYSTEM', max_length=50)),
                ('code', models.CharField(blank=True, max_length=4, unique=True)),
                ('site_name', models.CharField(blank=True, max_length=100, unique=True)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='StockBal',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField(blank=True, null=True)),
                ('is_active', models.BooleanField(null=True)),
                ('create_date', models.DateTimeField(blank=True, default=datetime.datetime.now, verbose_name='date published')),
                ('update_date', models.DateTimeField(blank=True, default=datetime.datetime.now, verbose_name='date published')),
                ('create_by', models.CharField(default='SYSTEM', max_length=50)),
                ('update_by', models.CharField(default='SYSTEM', max_length=50)),
                ('total', models.IntegerField(default=0)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Store',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField(blank=True, null=True)),
                ('is_active', models.BooleanField(null=True)),
                ('create_date', models.DateTimeField(blank=True, default=datetime.datetime.now, verbose_name='date published')),
                ('update_date', models.DateTimeField(blank=True, default=datetime.datetime.now, verbose_name='date published')),
                ('create_by', models.CharField(default='SYSTEM', max_length=50)),
                ('update_by', models.CharField(default='SYSTEM', max_length=50)),
                ('code', models.CharField(blank=True, max_length=4, unique=True)),
                ('store_name', models.CharField(blank=True, max_length=100, unique=True)),
                ('site', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='portal.Site')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='SubItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField(blank=True, null=True)),
                ('is_active', models.BooleanField(null=True)),
                ('create_date', models.DateTimeField(blank=True, default=datetime.datetime.now, verbose_name='date published')),
                ('update_date', models.DateTimeField(blank=True, default=datetime.datetime.now, verbose_name='date published')),
                ('create_by', models.CharField(default='SYSTEM', max_length=50)),
                ('update_by', models.CharField(default='SYSTEM', max_length=50)),
                ('code', models.CharField(max_length=2)),
                ('sub_name', models.CharField(max_length=50)),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='portal.Item')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Unit',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField(blank=True, null=True)),
                ('is_active', models.BooleanField(null=True)),
                ('create_date', models.DateTimeField(blank=True, default=datetime.datetime.now, verbose_name='date published')),
                ('update_date', models.DateTimeField(blank=True, default=datetime.datetime.now, verbose_name='date published')),
                ('create_by', models.CharField(default='SYSTEM', max_length=50)),
                ('update_by', models.CharField(default='SYSTEM', max_length=50)),
                ('code', models.CharField(max_length=2)),
                ('unit_name', models.CharField(max_length=25)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='item',
            name='price',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='portal.Price'),
        ),
        migrations.AddField(
            model_name='division',
            name='store',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='portal.Store'),
        ),
        migrations.AddField(
            model_name='category',
            name='div',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='portal.Division'),
        ),
    ]
