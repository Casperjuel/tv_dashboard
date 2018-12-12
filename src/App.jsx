import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Article from './components/Article';
import style from './root.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = [65, 59, 80, 81, 56, 55, 40];

    return (
      <>
        <div className={style.articleList}>
          <Article
            negative
            symbol="%"
            value={0.45}
            title="Overall bounce rate"
            before={0.47}
          />
          <Article
            symbol="%"
            value={0.45}
            title="E-Conversion rate"
            before={0.48}
            chartData={data}
          />
          <Article
            symbol="Users"
            value={1431221}
            title="users"
            before={131221}
          />
        </div>
        <div className={style.articleList}>
          <Article symbol="%" value={0.49} title="Goal 1" before={0.47} />
          <Article symbol="%" value={1.05} title="Goal 2" before={0.48} />
          <Article symbol="%" value={0.32} title="Goal 3" before={0.31} />
          <Article symbol="%" value={0.015} title="Goal 4" before={0.012} />
        </div>
      </>
    );
  }
}

export default hot(module)(App);
