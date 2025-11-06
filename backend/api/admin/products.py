from django.contrib import admin
from api.models.products import ProductModel

class ProductAdmin(admin.ModelAdmin):
  list_display = ["title", "description", "category"]
  search_fields = ["title", "description"]
  list_filter = ["category"]
  # To make adding tags easier
  filter_horizontal = ["tag"]
    
admin.site.register(ProductModel, ProductAdmin)