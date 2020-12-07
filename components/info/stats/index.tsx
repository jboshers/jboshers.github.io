import dnd from '../../../utils/stats'
import styles from './index.module.css'

const Stats = () => {
  return (
    <div>
      <div className={styles.stats}>
        {dnd.map((stat, i) => (
          <div className={styles.statBlock} key={i}>
            <div className={styles.statName} >{stat.name}</div>
            <div className={styles.statValue} >{stat.value}</div>
          </div>
        ))}
      </div>
      <div className={styles.details}>
        <div>
          <strong>Armor Class</strong>
        </div>
        <div>16</div>
        <div>
          <strong>Hit Points</strong>
        </div>
        <div> 27 (5d8 + 5)</div>
        <div>
          <strong>Speed</strong>
        </div>
        <div>30 ft.</div>
      </div>
    </div>
  )
}

export default Stats
