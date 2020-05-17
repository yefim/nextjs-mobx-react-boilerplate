import { parse } from 'cookie'
import "../styles/styles.scss";
import {observer } from 'mobx-react';
import React, { Component } from 'react';
import SampleStore from "../stores/SampleStore";


@observer
class IndexPage extends Component {

  constructor(props) {
    super(props);
    this.store = new SampleStore();
    this.state = {isClient: false};
  }

  onclick = () => {
    this.store.toggleDisplay();
  }

  componentDidMount() {
    this.setState({isClient: true});
  }

  render() {
    let cookie = {};

    if (this.state.isClient) {
      cookie = parse(document.cookie);
      console.log(cookie);
    }

    return (
      <div>
        {
          cookie.isLoggedIn ? <h1>Welcome logged in user</h1> : <h1>please log in</h1>
        }

        <button
          onClick={this.onclick}
          className={"p-2 border border bg-gray-100 bg-teal-100"}>
          Toggle State
        </button>

        {this.store.isVisible &&  (
          <p className={"p-4"}>👋 World!</p>
        )}

      </div>
    )
  }
}

export default IndexPage;
