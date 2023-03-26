import { YourCardProps } from '../../components/Card/YourCard';

export interface YourVideosState {
  items: YourCardProps[];
  switcher: {
    isOn: boolean;
  };
  file: string | null;
  errors: {
    file: { err: boolean; msg: string };
    videoTitle: { err: boolean; msg: string };
    chanelTitle: { err: boolean; msg: string };
    date: { err: boolean; msg: string };
    select: { err: boolean; msg: string };
    terms: { err: boolean; msg: string };
  };
  snackbar: { text: string; className: string };
}
