import ProductsList from "../components/ProductsList";
import Hero from "../assets/hero.jpg";
function Home() {
  return (
    <>
      <section className="mx-auto flex max-w-7xl items-center justify-center gap-20 px-6 py-12">
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
            Thoughtfully selected
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Everyday essentials.
          </h1>

          <p className="mt-3 max-w-xl text-gray-600">
            Discover simple, functional pieces designed for everyday life.
          </p>
        </div>
        <img className="h-[380px] w-[600px] object-cover rounded-lg" src={Hero} alt="" />
      </section>

      <ProductsList />
    </>
  );
}

export default Home;
