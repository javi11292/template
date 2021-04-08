import dynamic from 'next/dynamic';
import { useEffect } from 'react';

import styles from './index.module.scss';

const Notifications = dynamic(() => import('components/notifications'));

export default function Main({ children }) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/service-worker.js');
    }
  }, []);

  return (
    <div className={styles.root}>
      <Notifications />
      {children}
    </div>
  );
}
