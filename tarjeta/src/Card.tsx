interface CardProps {
    imagen: string;
    titulo: string;
    Velocidad: number;
    Potencia: number;
    Carga: number;
  }

  const Card = ({ imagen, titulo, Potencia, Velocidad, Carga }: CardProps) => {
    return (
      <div className="card">
        <img src={imagen} alt={titulo} />
        <h2>{titulo}</h2>
        <p>Potencia: {Potencia}</p>
        <p>Velocidad: {Velocidad}</p>
        <p>Carga: {Carga}</p>
      </div>
    );
  };
  
export default Card;