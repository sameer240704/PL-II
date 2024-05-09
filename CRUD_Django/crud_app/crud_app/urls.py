from django.urls import path
from .views import *

urlpatterns = [
    path("", home),
    path("home/", home),
    path("add_student/", add_student),
    path("del_student/<int:id>", del_student),
    path("upd_student/<int:id>", upd_student),
    path("post_upd_student/<int:id>", post_upd_student),
]