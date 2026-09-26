import ProductCard from './ProductCard'

function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: 'The Butter Croissant',
      category: 'Viennoiserie',
      price: '$4.50',
      image:
        'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=85',
    },
    {
      id: 2,
      name: 'Velvet Berry Cake',
      category: 'Signature Cakes',
      price: '$48',
      image:
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85',
    },
    {
      id: 3,
      name: 'Pistachio Tart',
      category: 'Tarts & Desserts',
      price: '$12',
      image:
        'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=1000&q=85',
    },
  ]

  return (
    <section className="signature" id="featured">
      <div className="signature-heading">
        <p>THE COLLECTION</p>

        <h2>
          A few of our
          <span> signatures.</span>
        </h2>

        <p className="signature-intro">
          Carefully crafted pieces made with patience, precision, and
          the finest ingredients.
        </p>
      </div>

      <div className="signature-grid">
        {products.map((product) => (
          <article className="signature-card" key={product.id}>
            <div className="signature-image">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="signature-info">
              <div>
                <p>{product.category}</p>
                <h3>{product.name}</h3>
              </div>

              <span>{product.price}</span>
            </div>
          </article>
        ))}
      </div>

      <a href="#featured" className="collection-link">
        View the full collection →
      </a>
    </section>
  )
}

export default FeaturedProducts