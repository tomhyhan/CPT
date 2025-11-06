from django_filters import rest_framework as filters

from api.models.products import ProductModel
from api.models.tags import TagModel

class ProductFilter(filters.FilterSet):
  # form the AND of the selected choices 
  tag = filters.ModelMultipleChoiceFilter(
    queryset = TagModel.objects.all(),
    conjoined=True,
  )
  class Meta:
    model = ProductModel
    # Filter based on category and tag
    fields = ['category', 'tag']