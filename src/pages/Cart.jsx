import EmptyCartState from "../components/EmptyCartState";
import { useCart } from "../context/useCart";
import CartItem from "../components/CartItem";
function Cart() {
  const {cart} = useCart();
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900">Your cart</h1>
      {cart.length > 0 ?
      <ul>
        {cart.map(item =>
          <CartItem product={item} key={item.id}/>
        )}
      </ul>
      :
      <EmptyCartState />
      
       }
    </section>
  );
}

export default Cart;
