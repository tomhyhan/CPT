from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend

from api.models.products import ProductModel
from api.serializers.products import ProductSerializer
from api.filters.products import ProductFilter

class ProductList(generics.ListAPIView):
  serializer_class = ProductSerializer
  # DjangoFilterBackend automatically takes care of filtering queries
  filter_backends = [DjangoFilterBackend]
  filterset_class = ProductFilter

  def get_queryset(self):
    return ProductModel.objects.all()