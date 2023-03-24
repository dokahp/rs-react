import React from 'react';
import Form from '../components/Form/Form';

type Props = object;
type State = object;

class YourVideos extends React.PureComponent<Props, State> {
  // handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log('title:', this.title.current?.value);
  //   console.log('date:', this.date.current?.value);
  // };
  render() {
    return <Form />;
  }
}

export default YourVideos;
