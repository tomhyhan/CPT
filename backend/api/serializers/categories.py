from rest_framework.serializers import ModelSerializer

from api.models.categories import CategoryModel

class CategorySerializer(ModelSerializer):
  class Meta:
    model = CategoryModel
    fields = "__all__"