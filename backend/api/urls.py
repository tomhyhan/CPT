from django.urls import path 

from api.views.products import ProductList

urlpatterns = [
  path("products/", ProductList.as_view(), name="products")
]