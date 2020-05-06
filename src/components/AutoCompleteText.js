import React from "react";
import Highlight from "react-highlighter";

import "./AutoCompleteText.css";

export default class AutoCompleteText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      suggestion: [],
      text: "",
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(
        "https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "ajayakv-rest-countries-v1.p.rapidapi.com",
            "x-rapidapi-key":
              "13ed35f1b1msh4fb57898817b14ep1b50adjsn4288b45f3446",
          },
        }
      );
      const data = await res.json();
      this.setState(() => ({ items: data.map((country) => country.name) }));
    } catch (err) {
      console.log(err);
    }
  }

  onTextChange = (e) => {
    const { items } = this.state;
    const value = e.target.value;
    let suggestion = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestion = items.sort().filter((v) => regex.test(v));
    }
    this.setState(() => ({ suggestion, text: value }));
  };

  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
      suggestion: [],
    }));
  }

  renderSuggestion() {
    const { suggestion } = this.state;
    if (suggestion.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestion.map((item) => (
          <li key={item} onClick={() => this.suggestionSelected(item)}>
            <Highlight search={this.state.text}>{item}</Highlight>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { text } = this.state;
    return (
      <div className="AutoCompleteText">
        <input
          value={text}
          onChange={this.onTextChange}
          type="text"
          placeholder="Please Enter A Country Name..."
        />
        {this.renderSuggestion()}
      </div>
    );
  }
}
