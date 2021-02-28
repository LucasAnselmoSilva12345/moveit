import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CompletedChanlleges } from '../components/CompletedChanlleges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChanllegeBox } from '../components/ChanllegeBox';

import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChanllegesProvider } from '../contexts/ChanllegesContexts';

interface HomeProps {
  level: number;
  currentExperience: number;
  chanllegesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChanllegesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      chanllegesCompleted={props.chanllegesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Home | MoveIt</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChanlleges />
              <Countdown />
            </div>
            <div>
              <ChanllegeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChanllegesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, chanllegesCompleted } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      chanllegesCompleted: Number(chanllegesCompleted),
    },
  };
};
