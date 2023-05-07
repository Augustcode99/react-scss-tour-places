import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./helper/data";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      {data.map((item) => {
        const { id, title, desc, image } = item;
        return <Card key={id} title={title} desc={desc} image={image} />;
      })}
    </div>
  );
}

export default App;
