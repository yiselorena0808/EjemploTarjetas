interface CardProps {
    imagen: string;
    titulo: string;
    Velocidad: number;
    Potencia: number;
    Carga: number;
  }

  const Card = ({ imagen, titulo, Potencia, Velocidad, Carga }: CardProps) => {
    const ver=()=>{
      alert(` la tarjeta es ${titulo}, la potencia es: ${Potencia},la velocidad:${Velocidad},la carga es:${Carga}`);
    }
    return (
      <div className="card">
        <img src={imagen} alt={titulo} />
        <h2>{titulo}</h2>
        <button className="botones" onClick={ver}>INFORMACION</button>
      </div>
    );
  };
  
export default Card;