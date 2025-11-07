from django.urls import path 

from api.views.products import ProductList
from api.views.categories import CategoryList
from api.views.tags import TagList

urlpatterns = [
  path("products/", ProductList.as_view(), name="products"),
  path("categories/", CategoryList.as_view(), name="categories"),
  path("tags/", TagList.as_view(), name="tags"),
]