import { ShoppingBag, Minus, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/store/hooks/hooks';
import { removeFromCart, updateQuantity } from '@/store/slices/cartSlice';

export function CartDropdown() {
  const { items, totalItems, totalAmount } = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <div className="w-full  bg-white rounded-md shadow-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <ShoppingBag className="h-5 w-5 text-rose-500 mr-2" />
          <h3 className="font-medium">Shopping Cart ({totalItems})</h3>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="py-8 text-center">
          <ShoppingBag className="h-12 w-12 mx-auto text-gray-300 mb-3" />
          <p className="text-gray-500">Your cart is empty</p>
          <Button variant="outline" className="mt-4">
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <>
          <ScrollArea className="max-h-[1500px] md:max-w-full max-w-[300px] ">
            {items.map((item) => (
              <div key={item.id} className="flex py-3">
                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div className="flex justify-between text-sm font-medium">
                    <h3 className="line-clamp-2">{item.name}</h3>
                    <p className="ml-4">${item.price.toFixed(2)}</p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm mt-auto">
                    <div className="flex items-center border rounded">
                      <button 
                        className="p-1"
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="px-2">{item.quantity}</span>
                      <button 
                        className="p-1"
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <button 
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-rose-500 hover:text-rose-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </ScrollArea>

          <Separator className="my-3" />
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <p>Subtotal</p>
              <p className="font-medium">${totalAmount.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-sm">
              <p>Shipping</p>
              <p className="font-medium">Calculated at checkout</p>
            </div>
            <Separator className="my-2" />
            <div className="flex justify-between">
              <p className="font-medium">Total</p>
              <p className="font-bold">${totalAmount.toFixed(2)}</p>
            </div>
          </div>
          
          <div className="mt-4 space-y-2">
            <Link href= {`/checkout/465`} className="w-full">
            <Button className="w-full bg-rose-500 hover:bg-rose-600 cursor-pointer">
              Checkout
            </Button>
            </Link>
            <Button variant="outline" className="w-full cursor-pointer">
              <Link href="/cart">View Cart</Link>
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
