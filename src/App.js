import useCard from "./util/useCard";
import Header from "./Components/header/Header";
import Main from "./Components/main/Main";



function App() {
  const [card1,card2,,,] = useCard()

  return (
    <div className="w-full ">
      <Header cards={{card1,card2}} />
      <Main />
    </div>
  );
}

export default App;
