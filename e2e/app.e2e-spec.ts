import { HomeRoutingPage } from './app.po';

describe('home-routing App', () => {
  let page: HomeRoutingPage;

  beforeEach(() => {
    page = new HomeRoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
