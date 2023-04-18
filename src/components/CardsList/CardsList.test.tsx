import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardsList from './CardsList';
import mockData from '../../data/mockData';

const { items } = mockData;

describe('Card', () => {
  it('It All have images', () => {
    render(<CardsList items={items} isLoading={false} openModal={() => {}} />);

    screen.findAllByAltText(/video-title/).then((imgList: HTMLElement[]) => {
      expect(
        imgList.every((image: HTMLElement) =>
          image.classList.contains('card-image')
        )
      );
    });
  });
});
