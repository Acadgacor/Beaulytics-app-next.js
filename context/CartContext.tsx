import { createContext, useContext, useState, ReactNode } from 'react';

interface CartContextType {
  cart: any[];
  addToCart: (item: any) => void;
  removeFromCart: (itemId: any) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (item: any) => {
    setCart(prevCart => [...prevCart, item]);
  };

  const removeFromCart = (itemId: any) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
