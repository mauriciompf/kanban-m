type SetString = (value: string) => void;

export interface NewItem {
  title: string;
  priority: string;
}

export interface TaskDetailsProps {
  setShowTaskDetails: (value: boolean) => void;
  addItem: (title: string, priority: string) => void;
  setTitleValue: SetString;
  titleValue: string;
  setPriority: SetString;
  priority: string;
}

export interface PrioritiesProps {
  setPriority: SetString;
  priority: string;
}
