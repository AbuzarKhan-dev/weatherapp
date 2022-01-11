import "./App.css";
import HeaderInput from "./Header_Input";
import Footer from "./Footer";
import MoreDetails from "./More_Details";
import { useEffect } from "react";
import axios from "axios";
import About from "./About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getData } from "./store/Action_Creator";

function App() {
  useEffect(() => {
    onSearch("Islamabad");
  }, []);

  const dispatch = useDispatch();

  const onSearch = async (text) => {
    const url = `http://api.weatherstack.com/current?access_key=a74943082487cb768c8718e5751cee08&query=${text}`;
    await axios.get(url).then((res) => {
      const data = res.data;
      dispatch(getData(data));
    });
  };

  return (
    <Router>
      <div className="App">
        <Route
          path="/weatherapp"
          exact
          render={(prop) => (
            <>
              <div className="Child_div">
                <HeaderInput onSearch={onSearch} />
                <MoreDetails />
              </div>
            </>
          )}
        />

        <Route
          path="/"
          exact
          render={() => (
            <>
              <About />
            </>
          )}
        />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
