from rest_framework.serializers import ModelSerializer

from api.models.tags import TagModel

class TagSerializer(ModelSerializer):
  class Meta:
    model = TagModel
    fields = "__all__"