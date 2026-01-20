import React from 'react';
import './FiltersBar.css';

function FiltersBar({
  categories,
  selectedCategory,
  onCategoryChange,
  minPrice,
  maxPrice,
  priceRange,
  onPriceChange,
  onClearFilters
}) {
  const handleMinPriceChange = (e) => {
    const value = e.target.value === '' ? '' : Number(e.target.value);
    onPriceChange([value, priceRange[1]]);
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value === '' ? '' : Number(e.target.value);
    onPriceChange([priceRange[0], value]);
  };

  return (
    <div className="filters-bar">
      <div className="filter-group">
        <label htmlFor="category-select">Categoria</label>
        <select
          id="category-select"
          className="filter-select"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="">Todas as categorias</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Faixa de Preço (R$)</label>
        <div className="price-inputs">
          <input
            type="number"
            className="price-input"
            placeholder={`Min: ${minPrice}`}
            value={priceRange[0]}
            onChange={handleMinPriceChange}
            min={0}
          />
          <span className="separator">-</span>
          <input
            type="number"
            className="price-input"
            placeholder={`Max: ${maxPrice}`}
            value={priceRange[1]}
            onChange={handleMaxPriceChange}
            min={0}
          />
        </div>
      </div>

      <button className="clear-filters" onClick={onClearFilters}>
        Limpar Filtros
      </button>
    </div>
  );
}

export default FiltersBar;
