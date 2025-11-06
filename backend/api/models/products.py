from django.db import models
from api.models.categories import CategoryModel
from api.models.tags import TagModel

class ProductModel(models.Model):
  title = models.CharField(max_length=64)
  description = models.TextField()

  # Game can have only one Category 
  # Category can have multiple Games
  category = models.ForeignKey(CategoryModel, on_delete=models.CASCADE)
  # Game can have multiple Tags
  # Tag can have multiple Games
  tag = models.ManyToManyField(TagModel)
  
  def __str__(self):
    return self.title