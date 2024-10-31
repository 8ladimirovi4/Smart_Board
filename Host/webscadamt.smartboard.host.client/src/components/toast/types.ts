interface NotificationProps {
  severity: 'success' | 'info' | 'warn' | 'error';
  summary: string;
  detail: string;
  showToast: boolean;
}
