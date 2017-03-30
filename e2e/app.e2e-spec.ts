import { PrimengtestPage } from './app.po';

describe('primengtest App', () => {
  let page: PrimengtestPage;

  beforeEach(() => {
    page = new PrimengtestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
