function ProductCard({ name, description, price }) {
  return (
    <article className="product-card">
      <div className="product-image">
        🍞
      </div>

      <div className="product-info">
        <h3>{name}</h3>

        <p>{description}</p>

        <span className="product-price">${price}</span>
      </div>
    </article>
  )
}

export default ProductCard