import { useState, useMemo, useEffect } from 'react';

export function useProductFilters(products) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const { categories, minPrice, maxPrice } = useMemo(() => {
    if (!products.length)
      return { categories: [], minPrice: 0, maxPrice: 1000 };

    const cats = [...new Set(products.map((p) => p.category))];
    const prices = products.map((p) => p.price);
    const min = Math.floor(Math.min(...prices));
    const max = Math.ceil(Math.max(...prices));

    return { categories: cats, minPrice: min, maxPrice: max };
  }, [products]);

  useEffect(() => {
    if (products.length > 0) {
      setPriceRange([minPrice, maxPrice]);
    }
  }, [products, minPrice, maxPrice]);

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

  const handleClearFilters = () => {
    setSelectedCategory("");
    setPriceRange([minPrice, maxPrice]);
  };

  return {
    filteredProducts,
    categories,
    selectedCategory,
    setSelectedCategory,
    minPrice,
    maxPrice,
    priceRange,
    setPriceRange,
    handleClearFilters
  };
}

export default useProductFilters;
