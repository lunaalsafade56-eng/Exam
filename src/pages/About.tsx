import Card from "../components/common/Card";
import { aboutCards } from "../data/content";
function About() {
  return (
    <div className="bg-linear-to-r from-(--bg-color2) via-(--bg-color3) to-(--bg-color2) h-screen py-7">
      <div className="text-center m-auto">
        <h1 className="text-3xl text-(--main-color)">About Us</h1>
        <p>We aer a simple company...</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4  mx-auto  py-6">
        {aboutCards.map((item, i) => (
          <Card key={i} title={item.title} description={item.description}  />
        ))}
      </div>
    </div>
  );
}

export default About;
