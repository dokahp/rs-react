import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import mockData from '../../data/mockData';
import YourCard from './YourCard';

const { items } = mockData;
const firstCard = items[0];
const component = (
  <YourCard
    key={firstCard.id.videoId}
    file={firstCard.snippet.thumbnails.high.url}
    title={firstCard.snippet.title}
    channelTitle={firstCard.snippet.channelTitle}
    publishedAt={firstCard.snippet.publishedAt}
    videoType="Video"
    adultContent={false}
    advertising
  />
);

describe('YourCard', () => {
  it('It have image', () => {
    render(component);

    screen.findByAltText(/video-title/).then((img: HTMLElement) => {
      expect(img).toHaveClass('card-image');
    });
  });
  it('It have title', () => {
    render(component);
    screen.findByTitle(firstCard.snippet.title).then((data: HTMLElement) => {
      expect(data).toEqual(firstCard.snippet.title);
    });
  });
  it('It have video chip', () => {
    render(component);

    const chip: HTMLImageElement = screen.getByAltText('video-type');
    expect((chip.src = './assets/video.svg'));
  });

  it('It have advertising chip', () => {
    render(component);

    const adv: HTMLImageElement = screen.getByAltText('advertising');
    expect((adv.src = './assets/advertising.svg'));
  });
});
