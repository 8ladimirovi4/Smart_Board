import { ReactNode } from 'react';

interface Tab {
  header: string;
  content: ReactNode;
}

export interface TabViewComponentProps {
  tabs: Tab[];
  defaultTab: number;
}
