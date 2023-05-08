import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./helper/data";
import "./scss/app.scss";
import cardStyle from "./scss/card.module.scss";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className={cardStyle.cardList}>
        {data.map((item) => {
          const { id, title, desc, image } = item;
          return <Card key={id} title={title} desc={desc} image={image} />;
        })}
      </div>
    </div>
  );
}

export default App;
