import { useContext } from 'react';
import { ChanllegeContext } from '../contexts/ChanllegesContexts';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChanllegeBox.module.css';

export function ChanllegeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChanllegeContext
  );

  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.chanllegeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.chanllegeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Imagem" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.chanllegeFailsButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>

            <button
              type="button"
              className={styles.chanllegeCompletedButton}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.chanllegeNotActive}>
          <strong>
            Inicie um ciclo para receber desafios a serem completados
          </strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Avançe de level completando desafios
          </p>
        </div>
      )}
    </div>
  );
}
