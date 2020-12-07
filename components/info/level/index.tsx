import React from 'react';
import styles from './index.module.css'
import moment from 'moment'
import { LevelState } from '../../../interfaces'

class Level extends React.Component<{}, LevelState> {
  interval: NodeJS.Timeout;
  constructor(props) {
    super(props)
    this.state = {
      bday: moment([1985, 1, 23]).startOf('day'),
      now: moment(),
      delta: 0,
      previousLevel: 0,
      nextLevel: 0,
      score: 0,
      progress: 0
    }
  }

  update() {
    this.setState((state) => ({
      now: moment(),
      previousLevel: Math.floor(state.delta),
      nextLevel: Math.ceil(state.delta),
      delta: Math.abs(state.bday.diff(state.now,'years', true)),
      score: Math.round((state.previousLevel - state.delta) * -1000),
      progress: { width: (state.previousLevel - state.delta) * -100 + "%" }
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.update(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className={styles.level}>
        <div className={styles.previous}>{this.state.previousLevel}</div>
        <div className={styles.score}> {this.state.score} / 1000 XP </div>
        <div className={styles.next}>{this.state.nextLevel}</div>
        <div className={styles.progress}>
          <div className={styles.indicator} style={ {width: (this.state.previousLevel - this.state.delta) * -100 + "%"} }></div>
        </div>
        <div className={styles.currentLevel}>{this.state.delta}</div>
      </div>
    )
  }
}

export default Level
