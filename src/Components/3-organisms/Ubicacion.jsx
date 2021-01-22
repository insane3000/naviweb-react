import React from "react"

const Ubicacion = () => {
    return (
        <div className="ubicacion">
            <div className="contenido " id="ubicacion">
                <h2 className="ubicacion-color-h2">NUESTRA UBICACIÓN</h2>
                <span>
                    Calle Jordan entre 16 de julio y antezana Nº723 acera norte. <br />
                    <strong>Planta baja del instituto INAP.</strong> <br />
                    Abrimos de 7:30 am a 10:00 pm. <br/>
                    Y lechu los fines de semana... :D
                </span>
            </div>

            <iframe title="mapa" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15229.448610247093!2d-66.1514648!3d-17.3943994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x718e0fb972b7017e!2s%5BNavi%20Games%20Dota%202%5D!5e0!3m2!1ses-419!2sbo!4v1609808792320!5m2!1ses-419!2sbo" width="600" height="450" aria-hidden="false" ></iframe>
        </div>
    )
}


export default Ubicacion