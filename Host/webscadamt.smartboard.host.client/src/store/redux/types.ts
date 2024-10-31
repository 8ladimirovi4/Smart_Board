export interface TemplateState {
  data: Template;
  isLoading: boolean;
  error: any;
}

export interface Template {
  id: string;
  [key: string]: string;
}

export interface TemplateAction {
  id: string;
  [key: string]: string;
}
