import React from "react";
import { Cards, Charts, CountryPicker } from "./components/index";
import styles from "./App.module.css";
import { fetchData } from "./Api/index";
import image from './image/image.png'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      country: "",
    };
  }

  async componentDidMount() {
    const FetchedData = await fetchData();
    this.setState({ data: FetchedData });
    // console.log(data);
  }
  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}

export default App;
