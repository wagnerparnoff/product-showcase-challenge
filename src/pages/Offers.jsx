import "./Offers.css";
import useProducts from "../hooks/useProducts.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import Pagination from "../components/Pagination.jsx";
import FiltersBar from "../components/FiltersBar.jsx";
import useProductFilters from "../hooks/useProductFilters.jsx";
import usePagination from "../hooks/usePagination.jsx";

function Offers() {
  const { loading, error, products } = useProducts();

  const {
    filteredProducts,
    categories,
    selectedCategory,
    setSelectedCategory,
    minPrice,
    maxPrice,
    priceRange,
    setPriceRange,
    handleClearFilters,
  } = useProductFilters(products);

  const { currentItems, currentPage, totalPages, changePage } =
    usePagination(filteredProducts);

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
            <FiltersBar
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              minPrice={minPrice}
              maxPrice={maxPrice}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
              onClearFilters={handleClearFilters}
            />
            <ProductGrid products={currentItems} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={changePage}
            />
          </>
        )}
      </section>
    </main>
  );
}

export default Offers;
