from django.contrib import admin
from django.urls import path
from books import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('cart/', views.cart, name='cart'),
    path('add/<int:book_id>/', views.add_to_cart, name='add_to_cart'),
    path('remove/<int:book_id>/', views.remove_from_cart, name='remove_from_cart'),
    path('success/', views.payment_success, name='payment_success'),


]
