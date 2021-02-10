const premiosJson = [
  {
    id: "1",
    precio: "190",
    marca: "Steam",
    modelo: "tarjeta de 25$",
    descripcion:
      "Para reclamar las tarjetas de Steam tienes que agregar a esta cuenta de Dota 2. ID: 124814842",
    img:
      "https://1.bp.blogspot.com/-8aKPlnFyxMA/YAtvpBy4x0I/AAAAAAAAI4A/g7KTQZ8fzkQK12RyGL1DoWWh3_dNEV7IwCLcBGAsYHQ/s320/premio01.jpg",
    href: "",
  },
  {
    id: "2",
    precio: "375",
    marca: "Steam",
    modelo: "tarjeta de 50$",
    descripcion:
      "Para reclamar las tarjetas de Steam tienes que agregar a esta cuenta de Dota 2. ID: 124814842",
    img:
      "https://1.bp.blogspot.com/-j4gSU6plEk8/YAtvpFnBgSI/AAAAAAAAI38/zcvEQ6gzWCQ-TxL1JGe5mqe2WQ4eucSjwCLcBGAsYHQ/s320/premio02.jpg",
    href: "",
  },
  {
    id: "3",
    precio: "750",
    marca: "Steam",
    modelo: "tarjeta de 100$",
    descripcion:
      "Para reclamar las tarjetas de Steam tienes que agregar a esta cuenta de Dota 2. ID: 124814842",
    img:
      "https://1.bp.blogspot.com/-sAj3PpfzK0A/YAtvpFJW64I/AAAAAAAAI34/KEyhqyShun4EdkhD2AF37rsys8CKa0ukgCLcBGAsYHQ/s320/premio03.jpg",
    href: "",
  },
  {
    id: "4",
    precio: "900",
    marca: "SAMSUNG",
    modelo: "Galaxy A01",
    descripcion:
      "Pantalla de 5.7 pulgadas, procesador de ocho nucleos, 2 gb de RAM doble camara y 32 Gb de almacenamiento.",
    img:
      "https://1.bp.blogspot.com/-p2FGlESko84/YBrxauL-7iI/AAAAAAAAJBU/cmXEcMEH4IoR8rZXFoDRcnoQ88PsVgJhwCLcBGAsYHQ/s1005/samsung-a01.jpg",
    href: "",
  },
  {
    id: "5",
    precio: "250",
    marca: "DELUX",
    modelo: "DGH500",
    descripcion: "Con almohadillas suaves hechas a mano de alta gama.",
    img:
      "https://1.bp.blogspot.com/-5-tPlhqFRso/YB2j7Jp5BcI/AAAAAAAAJCk/9sv7Yta6uc4SCEagHkwf6VAHDjqbH-YWwCLcBGAsYHQ/s500/delux-audifono.jpg",
    href: "",
  },
  {
    id: "6",
    precio: "180",
    marca: "DELUX",
    modelo: "M625",
    descripcion:
      "Inspirado en el famoso DeathAdder de Razer. Materiales de buena calidad, cable enmallado y goma en los laterales para un buen agarre.",
    img:
      "https://1.bp.blogspot.com/-Z26u8ILA48I/YCGGxbSWY3I/AAAAAAAAJEM/IWAFkjowtCAVvgoY2ONhnHkxo6yHIhObQCLcBGAsYHQ/s800/1-1P6211GJIb.jpg",
    href: "",
  },
  {
    id: "7",
    precio: "350",
    marca: "DELUX",
    modelo: "KM06",
    descripcion: "Teclado mecanico, iluminado y con teclas intercambiables",
    img:
      "https://1.bp.blogspot.com/-UvGrok79ZRE/YB7lTkDmeYI/AAAAAAAAJDQ/qdYb3fwnERMPlQpGalejQUO_e3YLFvjfACLcBGAsYHQ/s320/delux%2Bkeyboard.jpg",
    href: "",
  },
  {
    id: "8",
    precio: "450",
    marca: "AORUS",
    modelo: "Mouse M3",
    descripcion:
      "Sensor óptico de 6400 DPI de grado entusiasta (Pixart 3988) que le brinda la precisión óptima para juegos competitivos.",
    img:
      "https://1.bp.blogspot.com/-M3uuPSo7OHM/YAtvqXlnsFI/AAAAAAAAI4I/KehshUzAnNkX4Ct7CaQ3qpQoSEBNtvRZwCLcBGAsYHQ/s320/premio05.jpg",
    href: "",
  },
  {
    id: "9",
    precio: "290",
    marca: "LOGIC",
    modelo: "celular",
    descripcion: "Celular bolichero con Whatsapp",
    img:
      "https://1.bp.blogspot.com/-3Mby-fT8Z58/YAtvqlA9z3I/AAAAAAAAI4Q/Twx0X1N91VgXcEXyRCP2nR0pKH1E3RFMwCLcBGAsYHQ/s320/premio07.jpg",
    href: "",
  },
  {
    id: "10",
    precio: "60",
    marca: "WIN",
    modelo: "Super bass C8",
    descripcion: "Audifonos con buena calidad de sonido y fuertes bajos.",
    img:
      "https://1.bp.blogspot.com/-w4jSEVK29uI/YAtvq7jy7UI/AAAAAAAAI4U/uWudztu_AE0wCpFqfOS9FPq82s0FemOdACLcBGAsYHQ/s320/premio08.jpg",
    href: "",
  },
  {
    id: "11",
    precio: "40",
    marca: "SAMSUNG",
    modelo: "CARGADOR",
    descripcion: "Cargador de entrada normal.",
    img:
      "https://1.bp.blogspot.com/-It-AIr1hHys/YCQ3b27DaZI/AAAAAAAAJGs/TVmUQDa70JEGWh3thf36nKtAYVs79koFwCLcBGAsYHQ/s600/cargador-samsung-de-pared-usb-carga-rapida-2000-mah-blanco-portada-01.jpg",
    href: "",
  },
  {
    id: "12",
    precio: "80",
    marca: "CONVERSOR",
    modelo: "VGA a HDMI",
    descripcion: "Convierte de vga a hdmi, no necesita energia externa.",
    img:
      "https://1.bp.blogspot.com/-ANpzbmEpd0c/YCQ3b43oUAI/AAAAAAAAJGo/vNgMN8yc84oVXk2sG4HYOjGb--O4TXR4wCLcBGAsYHQ/s500/hdmi-to-vga-converter-adapter-cable-500x500.jpg",
    href: "",
  },
  {
    id: "13",
    precio: "50",
    marca: "MARVO",
    modelo: "G906",
    descripcion: "Mouse gamer de gama baja",
    img:
      "https://1.bp.blogspot.com/-AL1hXWdq9fU/YCQ3cKc76rI/AAAAAAAAJGw/l6qJTHF3eV0rjWtSB4avNIHOt385iWpdQCLcBGAsYHQ/s512/unnamed.jpg",
    href: "",
  },
];
export default premiosJson;
