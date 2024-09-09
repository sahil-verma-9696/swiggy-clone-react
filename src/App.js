import useCard from "./util/useCard";
import Header from "./Components/header/Header";
import Main from "./Components/main/Main";



function App() {
  const [card1,,,,card5] = useCard()
  console.log(card1)
  console.log(card5)


  return (
    <div className="w-full ">
      <Header />
      <Main />
    </div>
  );
}

export default App;
