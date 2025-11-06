from rest_framework.serializers import ModelSerializer

from api.models.products import ProductModel
from api.serializers.tags import TagSerializer
from api.serializers.categories import CategorySerializer

class TagSerializer(ModelSerializer):
  # This shows title instead of only ID
  # NOTE: REST does not provide optimization for nested relationship
  category = CategorySerializer(read_only=True)
  tag = TagSerializer(many=True, read_only=True)

  class meta:
    model = ProductModel
    fields = "__all__"