import { MDCSnackbar, strings } from '@material/snackbar';
import { useEffect, useRef, useState } from 'react';

import { useStore } from 'hooks/store';

export default function Notifications() {
  const root = useRef(null);
  const snackbar = useRef(null);
  const [notification, setNotification] = useState(null);
  const [notifications, dispatchNotifications] = useStore('notifications');

  useEffect(() => {
    function handleExited() {
      dispatchNotifications({ type: 'shift' });
    }

    snackbar.current = new MDCSnackbar(root.current);
    snackbar.current.timeoutMs = 4000;
    snackbar.current.listen(strings.CLOSED_EVENT, handleExited);

    return () => snackbar.current.destroy();
  }, [dispatchNotifications]);

  useEffect(() => {
    setNotification(notifications[0] || null);
  }, [notifications]);

  useEffect(() => {
    if (notification) {
      snackbar.current.open();
    }
  }, [notification]);

  return (
    <div ref={root} className="mdc-snackbar">
      <div className="mdc-snackbar__surface">
        <div className="mdc-snackbar__label">
          {notification}
        </div>
      </div>
    </div>
  );
}
