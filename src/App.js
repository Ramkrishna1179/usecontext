import UR1 from "./useRef/ur1";
import { UR2 } from "./useRef/ur1";
import { createContext } from "react";
import CompD from "./CompD";
import CompA from "./CompA";
import CompE from "./CompE";
import Slider from "./useReducer/slider";
import Counter from './useReducer/reduce1'
import CircularProgress from "./useReducer/slider1";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Value = createContext();
function App(props) {
  const Name = "Pablu-Pandey";
  return (
    <div className="App text-center">
      <Value.Provider value={"Guru ghantal dhaniya pandey"}>
        <CompA data={Name} />
        <CompD />
        <CompE />
      </Value.Provider>
      <UR1 />
      <UR2 />
      <br />
      <br />
      <Counter />
      <br />
      <br />
      <br />
      <Slider />
      <br />
      <br />
      <br />
      <br />
      <CircularProgress />
    </div>
  );
}
export default App;
export { Value };
