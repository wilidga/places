import { PlacesPage } from './app.po';

describe('places App', () => {
  let page: PlacesPage;

  beforeEach(() => {
    page = new PlacesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
