import { createContext, useContext, useState, ReactNode } from 'react';

interface CompareContextType {
  compareItems: any[];
  addToCompare: (item: any) => void;
  removeFromCompare: (itemId: any) => void;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const CompareProvider = ({ children }: { children: ReactNode }) => {
  const [compareItems, setCompareItems] = useState<any[]>([]);

  const addToCompare = (item: any) => {
    setCompareItems(prevItems => [...prevItems, item]);
  };

  const removeFromCompare = (itemId: any) => {
    setCompareItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  return (
    <CompareContext.Provider value={{ compareItems, addToCompare, removeFromCompare }}>
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (context === undefined) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
};
