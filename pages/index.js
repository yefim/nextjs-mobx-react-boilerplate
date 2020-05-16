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
  }

  onclick = () => {
    this.store.toggleDisplay();
  }

  render() {
    let cookie = {};

    // TODO: force second render (https://twitter.com/dan_abramov/status/1232081825939546112)
    if (typeof window !== 'undefined') {
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
