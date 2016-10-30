import { SpottyPage } from './app.po';

describe('spotty App', function() {
  let page: SpottyPage;

  beforeEach(() => {
    page = new SpottyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
