import { describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import YourVideos from '../../pages/YourVideos';
import { setupStore } from '../../store/store';

const store = setupStore();

const yourVideosComponent = (
  <Provider store={store}>
    <YourVideos />
  </Provider>
);

describe('Form', () => {
  it('It have image', () => {
    render(yourVideosComponent);

    screen.findByAltText(/uploaded/).then((img: HTMLElement) => {
      expect(img).toHaveClass('uploaded-image');
    });
  });
  it('should display errors when fields not valid', async () => {
    render(yourVideosComponent);

    fireEvent.submit(screen.getByText('Submit'));
    expect(await screen.findByText(/You must upload an image/i)).toHaveClass(
      'error-block'
    );
    expect(await screen.findByText(/Video Title is required/i)).toHaveClass(
      'error-block'
    );
    expect(await screen.findByText(/Chanel Title is required/i)).toHaveClass(
      'error-block'
    );
    expect(await screen.findByText(/Publish date is required/i)).toHaveClass(
      'error-block'
    );
    expect(
      await screen.findByText(/You must accept terms of usage/i)
    ).toHaveClass('error-block');
  });
});
