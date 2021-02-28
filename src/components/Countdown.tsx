import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

//

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, '0')
    .split('');

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.coundownButton}>
          Ciclo encerrado
          <img src="icons/check.svg" alt="Check" />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.coundownButton} ${styles.coundownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar o ciclo
              <img src="icons/cancel.svg" alt="Cancel" />
            </button>
          ) : (
            <button
              type="button"
              className={styles.coundownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
              <img src="icons/send.svg" alt="Iniciar" />
            </button>
          )}
        </>
      )}
    </div>
  );
}
