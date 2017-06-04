import { VideoListPage } from './app.po';

describe('video-list App', () => {
  let page: VideoListPage;

  beforeEach(() => {
    page = new VideoListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
