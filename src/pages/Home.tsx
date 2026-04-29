import Boutton from "../components/common/Button"
import  {homCards} from "../data/content"
import Card from"../components/common/Card"
function Home() {
  return (
    <div className="bg-linear-to-r from-(--bg-color2) via-(--bg-color3) to-(--bg-color2) py-4 h-screen" >
        <section className="m-auto text-center py-5 ">
            <h1 className="text-(--main-color) text-3xl">Welcome Home</h1>
            <p className="text-xl mb-2">Simple description</p>
            <Boutton to="/about">Click me</Boutton>
        </section>
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4  ">
          { homCards.map((card,i)=>(
<Card key={i} title={card.title} description={card.description}/>
          )

          )}
        </section>
    </div>
  )
}

export default Home