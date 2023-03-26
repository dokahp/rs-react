interface References {
  formRef: React.RefObject<HTMLFormElement>;
  videoTitleRef: React.RefObject<HTMLInputElement>;
  chanelTitleRef: React.RefObject<HTMLInputElement>;
  dateRef: React.RefObject<HTMLInputElement>;
  selectRef: React.RefObject<HTMLSelectElement>;
  fileRef: React.RefObject<HTMLInputElement>;
  switchElemRef: React.RefObject<HTMLInputElement>;
  termsCheckboxRef: React.RefObject<HTMLInputElement>;
  advCheckboxRef: React.RefObject<HTMLInputElement>;
  notificationCheckboxRef: React.RefObject<HTMLInputElement>;
}

interface Errors {
  file: { err: boolean; msg: string };
  videoTitle: { err: boolean; msg: string };
  chanelTitle: { err: boolean; msg: string };
  date: { err: boolean; msg: string };
  select: { err: boolean; msg: string };
  terms: { err: boolean; msg: string };
}

interface Switcher {
  isOn: boolean;
}

export interface FormProps {
  references: References;
  handleFormSubmit: (event: React.SyntheticEvent) => void;
  handleChangeFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSwitch: () => void;
  switcher: Switcher;
  file: string | null;
  errors: Errors;
}
