interface UserProps {
  name: string;
  age: number;
  hobby: string;
}

const Card = ({ name, age, hobby }: UserProps) => {
  return (
    <ul className="cardUser">
      <li>{name}</li>
      <li>{age}</li>
      <li>{hobby}</li>
    </ul>
  );
};

export default Card;
