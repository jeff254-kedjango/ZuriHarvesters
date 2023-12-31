# Generated by Django 4.2.7 on 2023-12-23 13:49

from django.db import migrations, models
import django.utils.timezone
import staff.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Staff',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('img1', models.ImageField(upload_to='images/')),
                ('bio', models.TextField(max_length=150)),
                ('twitter', models.CharField(blank=True, max_length=1000, null=True)),
                ('facebook', models.CharField(blank=True, max_length=1000, null=True)),
                ('linkedIn', models.CharField(blank=True, max_length=1000, null=True)),
                ('instagram', models.CharField(blank=True, max_length=1000, null=True)),
                ('created', models.DateField(default=django.utils.timezone.now)),
                ('published', staff.models.AutoDateTimeField(default=django.utils.timezone.now)),
            ],
            options={
                'verbose_name': 'Staff',
                'verbose_name_plural': 'Staff',
                'ordering': ['name'],
            },
        ),
    ]
