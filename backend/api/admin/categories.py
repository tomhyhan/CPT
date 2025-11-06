from django.contrib import admin
from api.models.categories import CategoryModel

class CategoryAdmin(admin.ModelAdmin):
  search_fields = ["title"]
    
admin.site.register(CategoryModel, CategoryAdmin)