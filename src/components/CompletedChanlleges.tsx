import { useContext } from 'react';
import { ChanllegeContext } from '../contexts/ChanllegesContexts';
import styles from '../styles/components/CompletedChanlleges.module.css';

export function CompletedChanlleges() {
  const { chanllegesCompleted } = useContext(ChanllegeContext);

  return (
    <div className={styles.completedChanllegesContainer}>
      <span>Desafios completos</span>
      <span>{chanllegesCompleted}</span>
    </div>
  );
}
