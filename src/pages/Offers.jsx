import './Offers.css'

function Offers() {
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

      <section className="offers-section">
        <div className="offers-container">
        </div>
      </section>
    </main>
  );
}

export default Offers;