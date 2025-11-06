from api.models.products import ProductModel
from api.serializers.products import ProductSerializer
from rest_framework import generics

class ProductList(generics.ListAPIView):
  serializer_class = ProductSerializer

  def get_queryset(self):
      return ProductModel.objects.all()