import Card from "./Card";
import "./App.css"

const CardList = () => {

  const tarjetas = [
    {
      imagen: 'https://pokelore.com/img/pkmn/art/squirtle.png',
      titulo: 'Squirtle',
      Potencia: 65,
      Velocidad: 43,
      Carga: 43
    },

    {
      imagen: 'https://pokelore.com/img/pkmn/art/charmander.png',
      titulo: 'Charmander',
      Potencia:95,
      Velocidad:65,
      Carga: 65
    },

    {
      imagen: 'https://pokelore.com/img/pkmn/art/sandslash.png',
      titulo: 'Sandslash',
      Potencia:110,
      Velocidad: 65,
      Carga: 100
    },
    {
        imagen: 'https://pokelore.com/img/pkmn/art/wigglytuff.png',
        titulo: 'Wigglytuff',
        Potencia: 70,
        Velocidad:45,
        Carga: 85
      },
      {
        imagen: 'https://pokelore.com/img/pkmn/art/raichu.png',
        titulo: 'Raichu',
        Potencia: 90,
        Velocidad:110,
        Carga: 55
      },
      {
        imagen: 'https://pokelore.com/img/pkmn/art/dewgong.png',
        titulo: 'Dewgong',
        Potencia: 80,
        Velocidad:70,
        Carga: 95
      },
  ];

  return (
    <div className="carta-lista">
      {tarjetas.map((tarjeta, index) => (
        <Card
          key={index}
          imagen={tarjeta.imagen}
          titulo={tarjeta.titulo}
          Potencia={tarjeta.Potencia} 
          Velocidad={tarjeta.Velocidad}  
          Carga={tarjeta.Carga}
        />
      ))}
    </div>
  );
};

export default CardList;
