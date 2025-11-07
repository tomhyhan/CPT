from rest_framework import generics

from api.models.categories import CategoryModel
from api.serializers.categories import CategorySerializer

class CategoryList(generics.ListAPIView):
  queryset = CategoryModel.objects.all()
  serializer_class = CategorySerializer