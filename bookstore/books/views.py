# books/views.py
from django.shortcuts import render, redirect
from .models import Book
def home(request):
    books = Book.objects.all()
    cart_items = request.session.get('cart', [])
    cart_count = len(cart_items)
    return render(request, 'books/index.html', {'books': books, 'cart_count': cart_count})

def cart(request):
    cart_items = request.session.get('cart', [])
    books = Book.objects.filter(id__in=cart_items)
    cart_count = len(cart_items)
    return render(request, 'books/cart.html', {'books': books, 'cart_count': cart_count})



def add_to_cart(request, book_id):
    cart = request.session.get('cart', [])
    if book_id not in cart:
        cart.append(book_id)
        request.session['cart'] = cart
    return redirect('home')


def remove_from_cart(request, book_id):
    cart = request.session.get('cart', [])
    if book_id in cart:
        cart.remove(book_id)
        request.session['cart'] = cart
    return redirect('cart')

def payment_success(request):
    request.session['cart'] = []  # Optional: Clear cart after payment
    return render(request, 'books/success.html')
