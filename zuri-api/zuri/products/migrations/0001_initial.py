# Generated by Django 4.2.7 on 2023-12-23 13:49

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import products.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('created', models.DateField(default=django.utils.timezone.now)),
                ('published', products.models.AutoDateTimeField(default=django.utils.timezone.now)),
            ],
            options={
                'verbose_name': 'Category',
                'verbose_name_plural': 'Categories',
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=30)),
                ('price', models.FloatField()),
                ('quantity', models.IntegerField()),
                ('description', models.TextField()),
                ('offer', models.BooleanField(default=False)),
                ('img1', models.ImageField(upload_to='images/')),
                ('img2', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('img3', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('img4', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('advert_video', models.FileField(upload_to='')),
                ('created', models.DateField(default=django.utils.timezone.now)),
                ('published', products.models.AutoDateTimeField(default=django.utils.timezone.now)),
                ('category', models.ForeignKey(default='N/A', on_delete=django.db.models.deletion.PROTECT, to='products.category')),
            ],
            options={
                'verbose_name': 'Product',
                'verbose_name_plural': 'Products',
            },
        ),
    ]
