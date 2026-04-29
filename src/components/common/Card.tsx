import type { CardType } from "../../data/content";

function Card({ title, description }: CardType) {
  return (
    <div className="border p-4 rounded-2xl border-gray-400 mx-3 h-64 shadow">
      <h2 className="text-3xl">{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;
