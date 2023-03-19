import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import mockData from '../../data/mockData';

const { items } = mockData;
const firstCard = items[0];

describe('Card', () => {
  it('It have image', () => {
    render(<Card key={firstCard.id.videoId} snippet={firstCard.snippet} />);

    screen.findByAltText(/video-title/).then((img: HTMLElement) => {
      expect(img).toHaveClass('card-image');
    });
  });
  it('It have title', () => {
    render(<Card key={firstCard.id.videoId} snippet={firstCard.snippet} />);
    screen.findByTitle(firstCard.snippet.title).then((data: HTMLElement) => {
      expect(data).toEqual(firstCard.snippet.title);
    });
  });
});
