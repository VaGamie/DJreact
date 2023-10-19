from django.shortcuts import render
from rest_framework import status
# from rest_framework.views import APIView
# from rest_framework.response import Response

from rest_framework import generics

from .models import *
from .serialization import *

 
# class ReactView(APIView):
#     def get(self, request):
#         output = [{"employee": output.employee,
#                     "department": output.department}
#                     for output in React.objects.all()]
#         return Response(output)
#     def post(self, request):
#         serializer = ReactSerializer(data=request.data)
#         if serializer.is_valid(raise_exception=True):
#             serializer.save()
#             return Response(serializer.data)
            
class ReactView(generics.ListCreateAPIView):
    queryset = React.objects.all()
    serializer_class = ReactSerializer

class Schoolview(generics.ListCreateAPIView):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer


@api_view(['POST'])
def create_user(request):
    serializer = SchoolSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response('W mans')
    else:
        return Response('L mans')