from django.contrib import admin

# Register your models here.
from .models import Image

@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    '''Images will be available on the address domain/media/images/name_of_image'''
    pass