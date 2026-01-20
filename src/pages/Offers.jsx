import { useState, useMemo, useEffect } from 'react';
import './Offers.css'
import useProducts from "../hooks/useProducts.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import Pagination from "../components/Pagination.jsx";
import useViewport from "../hooks/useViewport.jsx";
import FiltersBar from "../components/FiltersBar.jsx";

function Offers() {
  const { width } = useViewport();
  const itemsPerPage = width >= 1024 ? 6 : width >= 640 ? 4 : 3;
  
  const [currentPage, setCurrentPage] = useState(1);

  const {
    loading,
    error,
    products,
  } = useProducts();

  const currentProducts = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return products.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, itemsPerPage, products]);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
              onCategoryChange={handleCategoryChange}
              minPrice={minPrice}
              maxPrice={maxPrice}
              priceRange={priceRange}
              onPriceChange={handlePriceChange}
              onClearFilters={handleClearFilters}
            />
            <ProductGrid products={currentProducts} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </section>
    </main>
  );
}

export default Offers;