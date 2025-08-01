import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { AuthProvider } from '../context/AuthContext';
import { CartProvider } from '../context/CartContext';
import { CompareProvider } from '../context/CompareContext';

function MyApp({ Component, pageProps }: AppProps) {
  console.log('Starting MyApp');
  return (
    <AuthProvider>
      <CartProvider>
        <CompareProvider>
          <Component {...pageProps} />
        </CompareProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default MyApp;
