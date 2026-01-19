function ProductCard({ product }) {
    return (
        <article className="product-card">
            <div className="product-image-wrapper">
                <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                    loading="lazy"
                />
            </div>
            <div className="product-info">
                <h2 className="product-title">{ product.title }</h2>
                <p className="product-price">
                    {product.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency:'USD'
                    })}
                </p>
                <button type="button" className="buy-button">
                    Comprar
                </button>
            </div>
        </article>
    )
}

export default ProductCard;