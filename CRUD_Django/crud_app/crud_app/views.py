from django.shortcuts import render, redirect
from django.http import HttpResponseNotFound
from .models import Student

def home(request):
    student = Student.objects.all()

    return render(request, "crud_app/home.html", {'crud_app': student})

def add_student(request):
    if request.method == 'POST':

        # Retrieving the user input data
        student_name = request.POST.get("student_name")
        student_sap = request.POST.get("student_sap")
        student_email = request.POST.get("student_email")
        student_mobile = request.POST.get("student_mobile")
        student_address = request.POST.get("student_address")

        # Create an object for models
        student = Student()
        student.name = student_name
        student.sap_id = student_sap
        student.email = student_email
        student.mobile = student_mobile
        student.address = student_address

        student.save()
        return redirect("/crud_app/home")

    return render(request, "crud_app/add_student.html", {})

def del_student(request, id):
    try:
        student = Student.objects.get(pk=id)
        student.delete()
        return redirect("/crud_app/home")
    except Student.DoesNotExist:
        return HttpResponseNotFound("Student not found")

def upd_student(request, id):
    student = Student.objects.get(pk=id)

    return render(request, "crud_app/update_student.html", {'student': student})

def post_upd_student(request, id):
    student_name = request.POST.get("student_name")
    student_sap = request.POST.get("student_sap")
    student_email = request.POST.get("student_email")
    student_mobile = request.POST.get("student_mobile")
    student_address = request.POST.get("student_address")

    student = Student.objects.get(pk=id)
    student.name = student_name
    student.sap_id = student_sap
    student.email = student_email
    student.mobile = student_mobile
    student.address = student_address

    student.save()

    return redirect("/crud_app/home")