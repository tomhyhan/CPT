from django.contrib import admin
from api.models.tags import TagModel

# Register your models here.
class TagAdmin(admin.ModelAdmin):
  search_fields = ["title"]
    
admin.site.register(TagModel, TagAdmin)