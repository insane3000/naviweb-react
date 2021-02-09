import React from "react";
import premiosJson from "../1-atoms/premiosJson";

const CanjeaPuntos = () => {
  return (
    <div className="premios">
      <div className="contenido" id="reclama-puntos">
        <h2 className="reclama-puntos-color-h2">Canjea tus puntos!</h2>
        <span>
          Por cada carga de <strong>20Bs</strong>, el sistema te regala{" "}
          <strong>4 puntos</strong>. Esos puntos los puedes cambiar por crédito
          para seguir jugando o tambien los puedes cambiar por{" "}
          <strong>premios!</strong>
        </span>
      </div>

      <div className="premios-list">
        {premiosJson.map((i) => (
          <div className="producto" key={i.id}>
            <div className="producto-img">
              <img src={i.img} alt={i.premio} loading="lazy" />
            </div>
            <div className="producto-data">
              <h2>
                {i.marca}-{i.modelo}
              </h2>
              <h4>{i.descripcion}</h4>
            </div>
            <span className="precio-premio">{i.precio} Puntos</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CanjeaPuntos;
