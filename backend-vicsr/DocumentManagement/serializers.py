from rest_framework import serializers
from .models import Document


class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        # fields = ('owner_id', 'filename', 'file',
        #          'date_added', 'mode', 'language', 'trans_language')

        fields = ('owner_id', 'filename', 'file',
                  'mode', 'language', 'trans_language')
