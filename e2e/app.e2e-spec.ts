import { ComponentLibraryPage } from './app.po';

describe('component-library App', () => {
  let page: ComponentLibraryPage;

  beforeEach(() => {
    page = new ComponentLibraryPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
