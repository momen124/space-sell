export interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
    imgSrc: string;
  }
  
  export interface CartItemProps {
    product: {
      name: string;
      price: number;
      quantity: number;
      imgSrc: string;
    };
    onQuantityChange: (quantity: number) => void;
  }
 export interface CartSummaryProps {
    subtotal: number;
    shipping: string;
  }
  

 export interface CartContextType {
    items: CartItem[]
    addToCart: (item: Omit<CartItem, 'quantity'>) => void
    removeItem: (id: number) => void
    updateQuantity: (id: number, quantity: number) => void
    clearCart: () => void
    totalItems: number
    totalPrice: number
  }