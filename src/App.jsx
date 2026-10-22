import { Routes, Route } from "react-router";
import Home from "./pages/Home";
// import Cart from "./pages/Cart";
import Header from "./components/header";
import { CartProvider } from "./context/CartProvider";
import { lazy, Suspense } from "react";
function App() {

  const Cart = lazy(() => import("./pages/Cart"));
  return (
    <CartProvider>
      <Header />

      <main className="min-h-screen bg-gray-50">
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Suspense>
      </main>
    </CartProvider>
  );
}

export default App;
