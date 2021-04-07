import { useEffect, useState } from 'react';

import { useStore } from 'hooks/store';
import Snackbar from 'ui/snackbar';

export default function Notifications() {
  const [notifications, dispatchNotifications] = useStore('notifications');
  const [open, setOpen] = useState(false);
  const notification = notifications[0];

  function handleExited() {
    setOpen(false);
    dispatchNotifications({ type: 'shift' });
  }

  useEffect(() => {
    setOpen(!!notification);
  }, [notification]);

  return <Snackbar onExit={handleExited} open={open}>{notification}</Snackbar>;
}
