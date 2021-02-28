import { useContext } from 'react';
import { ChanllegeContext } from '../contexts/ChanllegesContexts';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChanllegeContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/LucasAnselmoSilva12345.png" alt="Avatar" />
      <div>
        <strong>Lucas Anselmo</strong>
        <p>
          <img src="icons/level.svg" alt="Imagem de Icone" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
