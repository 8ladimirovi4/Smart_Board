import { Toast } from 'primereact/toast';
import { useEffect, useRef } from 'react';

const ToastComponent = ({ severity, summary, detail, showToast }: NotificationProps) => {
  const toast = useRef<Toast>(null);

  useEffect(() => {
    if (severity && summary && detail) toast.current?.show({ severity, summary, detail });
  }, [showToast]);

  return <Toast ref={toast} />;
};

export default ToastComponent;
