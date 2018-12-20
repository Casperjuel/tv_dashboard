import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Article from './components/Article';
import Header from './components/Header';
import Footer from './components/Footer';

import style from './root.css';
import logo from './icons/logo.svg';

import { mockData } from './mockdata';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = mockData;
    return (
      <>
        <Header title="Novasol KPI" logo={logo} />
        <div className={style.articleList}>
          {data.map(item => (
            <Article
              key={item.name}
              name={item.name}
              previous={item.previous}
              value={item.value}
              chartData={item.chartData}
              symbol={item.symbol}
              negative={item.negative}/>
          ))}
        </div>
        <Footer />
      </>
    );
  }
}

export default hot(module)(App);
