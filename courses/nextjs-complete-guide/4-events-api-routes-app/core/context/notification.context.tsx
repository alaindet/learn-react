import { createContext, ReactNode, useCallback, useEffect, useRef, useState } from 'react';

export type NotificationStatus = 'pending' | 'success' | 'error';

export interface NotificationItem {
  title: string;
  message: string;
  status: NotificationStatus;
}

export interface NotificationContextType {
  notification: NotificationItem | null;
  show: (notification: NotificationItem) => void;
  hide: () => void;
  pending: (title: string, message: string) => void;
  success: (title: string, message: string) => void;
  error: (title: string, message: string) => void;
}

export const NotificationContext = createContext<NotificationContextType>({
  notification: null,
  show: (notification: NotificationItem) => {},
  hide: () => {},
  pending: (title: string, message: string) => {},
  success: (title: string, message: string) => {},
  error: (title: string, message: string) => {},
});

export function NotificationContextProvider({ children }: { children: ReactNode}) {

  const timer = useRef<any | null>(null);
  const [notification, setNotification] = useState<NotificationItem | null>(null);

  const hide = useCallback(() => {
    if (notification === null) return;
    setNotification(null);
  }, [notification]);

  function show(notification: NotificationItem) {
    setNotification(notification);
  }

  function pending(title: string, message: string) {
    show({ title, message, status: 'pending' });
  }

  function success(title: string, message: string) {
    show({ title, message, status: 'success' });
  }

  function error(title: string, message: string) {
    show({ title, message, status: 'error' });
  }

  useEffect(() => {
    if (notification !== null) {
      timer.current = setTimeout(() => hide(), 3000);
      return () => clearTimeout(timer.current);
    }
  }, [notification, hide]);

  return (
    <NotificationContext.Provider value={{
      notification,
      hide,
      show,
      pending, 
      success,
      error
    }}>
      {children}
    </NotificationContext.Provider>
  );
}
