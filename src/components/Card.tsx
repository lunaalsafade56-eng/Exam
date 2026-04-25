import type { CardType } from "../data/content";

function Card({ title, description }: CardType) {
  return (
    <div className="border p-4 rounded-2xl shadow">
      <h2 className="text-2xl">{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;
