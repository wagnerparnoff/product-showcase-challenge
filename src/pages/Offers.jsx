import { useState, useMemo, useEffect } from "react";
import "./Offers.css";
import useProducts from "../hooks/useProducts.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import Pagination from "../components/Pagination.jsx";
import useViewport from "../hooks/useViewport.jsx";
import FiltersBar from "../components/FiltersBar.jsx";

function Offers() {
  const { width } = useViewport();
  const itemsPerPage = width >= 1024 ? 6 : width >= 640 ? 4 : 3;

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 10000]);

  const { loading, error, products } = useProducts();

  const { categories, minPrice, maxPrice } = useMemo(() => {
    if (!products.length)
      return { categories: [], minPrice: 0, maxPrice: 1000 };

    const cats = [...new Set(products.map((p) => p.category))];
    const prices = products.map((p) => p.price);
    const min = Math.floor(Math.min(...prices));
    const max = Math.ceil(Math.max(...prices));

    return { categories: cats, minPrice: min, maxPrice: max };
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory = selectedCategory
        ? product.category === selectedCategory
        : true;
      const matchPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchCategory && matchPrice;
    });
  }, [products, selectedCategory, priceRange]);

  const currentProducts = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return filteredProducts.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, itemsPerPage, filteredProducts]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePriceChange = (newRange) => {
    setPriceRange(newRange);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSelectedCategory("");
    setPriceRange([minPrice, maxPrice]);
    setCurrentPage(1);
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
