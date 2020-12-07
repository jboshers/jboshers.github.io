import React from 'react';
import styles from './intro.module.css'
import {things, whos } from '../../utils/madlibs'
import {randomNumber} from '../../utils/utils'
import { IntroState } from '../../interfaces'

class Intro extends React.Component<{}, IntroState> {
  interval: any;
  constructor(props) {
    super(props);
    this.state = { thing: things[0], who: whos[0], for: whos[0] };
  }

  update() {
    this.setState(() => ({
      thing: things[randomNumber(0,15)],
      who: whos[randomNumber(0,15)],
      for: whos[randomNumber(0,15)]
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.update(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className={styles.intro}>
        <div>
          <div className={styles.greeting}>Hello, my name is Jeff Boshers.</div>
          <div className={styles.description}>I make <span className={styles.emphasis}>{this.state.thing}</span> with <span className={styles.emphasis}>{this.state.who}</span> for <span className={styles.emphasis}>{this.state.for}</span>.</div>
        </div>
      </div>
    )
  }
}

export default Intro
