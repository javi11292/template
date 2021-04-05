import { useStore } from 'hooks/store';
import Snackbar from 'ui/snackbar';

export default function Notifications() {
  const [notifications, dispatchNotifications] = useStore('notifications');

  function handleExited() {
    dispatchNotifications({ type: 'shift' });
  }

  const notification = notifications[0];

  return <Snackbar onExit={handleExited} open={!!notification}>{notification}</Snackbar>;
}
