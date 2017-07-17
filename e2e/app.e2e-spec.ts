import { SeedFinalApplicationPage } from './app.po';

describe('seed-final-application App', () => {
  let page: SeedFinalApplicationPage;

  beforeEach(() => {
    page = new SeedFinalApplicationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
