import { AngularTackleboxPage } from './app.po';

describe('angular-tacklebox App', function() {
  let page: AngularTackleboxPage;

  beforeEach(() => {
    page = new AngularTackleboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hello World! This is the main app component');
  });
});
