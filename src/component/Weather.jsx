import React, { Component } from "react";
import TopBar from "./TopBar";
import DisplayBar from "./DisplayBar";
import SearchBar from "./SearchBar";

const Api_base = "api.openweathermap.org/data/2.5/";
const Api_Key = "6933ecfc2f3807b66a3eab005d502eac";
const url =
  "https://img.freepik.com/free-vector/cloudy-blue-background_53876-82143.jpg?size=338&ext=jpg";
class Weather extends Component {
  state = {
    name: "",
    temperature: "",
    condition: "",
    iconUrl: "",
    country: "",
  };

  getCity = async (e) => {
    e.preventDefault();
    const city = e.target.elements.search.value;

    if (city !== "") {
      try {
        const api_call = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=b1afdaa2ba0c4dd7ad890137201708&q=${city}`
        );
        const data = await api_call.json();
        this.setState({
          name: data.location.name,
          condition: data.current.condition.text,
          temperature: `${data.current.temp_c}°C`,
          iconUrl: data.current.condition.icon,
          country: data.location.country,
        });

        console.log(data);
        document.getElementById("display").classList.remove("hide");
        if (data.current.temp_c > 24) {
          document.getElementById("catch").classList.toggle("hot");
        } else {
          document.getElementById("catch").classList.toggle("cold");
        }
      } catch {
        alert("Invalid City");
      }
    }
  };

  render() {
    return (
      <div>
        <div className="main-div">
          <div className="div-header" id="catch">
            <TopBar />
            <SearchBar btnClicked={this.getCity} />
            <div
              className="middle-section hide"
              id="display"
              style={{ backgroundImage: `url(${this.state.iconUrl})` }}
            >
              <div>
                <DisplayBar
                  icon={this.state.iconUrl}
                  name={this.state.name}
                  temperature={this.state.temperature}
                  condition={this.state.condition}
                  country={this.state.country}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
