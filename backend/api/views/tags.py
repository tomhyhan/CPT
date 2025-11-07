from rest_framework import generics

from api.models.tags import TagModel
from api.serializers.tags import TagSerializer

class TagList(generics.ListAPIView):
  queryset = TagModel.objects.all()
  serializer_class = TagSerializer