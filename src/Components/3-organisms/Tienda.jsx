import React from "react";
import productosTienda from "../1-atoms/productosTienda";
const Tienda = () => {
  return (
    <div className="tienda">
      <div className="contenido " id="tienda">
        <h2 className="tienda-color-h2">TIENDA</h2>
        <span>
          <strong>
            En Navi Games puedes comprar los siguientes productos.
          </strong>{" "}
          <br />
          Son los que mejor resultados y experiencias nos han dado, te las
          recomendamos...
        </span>
      </div>

      <div className="products-list">
        {productosTienda.map((i) => (
          <div key={i.h2} className="productoTienda">
            <img
              className="img-producto-tienda"
              src={i.img}
              alt={i.h2}
              loading="lazy"
            />
            <div className="producto-data">
              <h2 className="tienda-product-title">{i.h2}</h2>
              <span>
                {i.contenido1} <br /> <br/>
                {i.contenido2} <br /> <br/>
                {i.contenido3}
              </span>
            </div>

            <span className="tienda-product-price">Bs. {i.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tienda;
