import './Offers.css'
import useProducts from "../hooks/useProducts.jsx";
import ProductGrid from "../components/ProductGrid.jsx";

function Offers() {

  // const { width, isMobile } = useViewport();
  // const itemsPerPage = width >= 1024 ? 9 : width >= 640 ? 6 : 4;

  const {
    loading,
    error,
    products,
  } = useProducts();

  return (
    <main className="offers-page">
      <header>
        <figure className="offers-banner">
          <img
            className="offers-banner-image"
            src="https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg"
            alt="Banner principal"
          />
        </figure>

        <div className="offers-header-content">
          <h1>Ofertas da Semana</h1>
          <p>Confira os produtos em destaque com preços especiais.</p>
        </div>
      </header>

      <section
        className="offers-section"
        aria-label="Vitrine de produtos em oferta"
      >
        {loading && <p>Carregando produtos...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && (
          <>
            <ProductGrid products={products} />
          </>
        )}
      </section>
    </main>
  );
}

export default Offers;