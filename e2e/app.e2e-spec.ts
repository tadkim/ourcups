import { OurcupsPage } from './app.po';

describe('ourcups App', () => {
  let page: OurcupsPage;

  beforeEach(() => {
    page = new OurcupsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
