import { GContactsPage } from './app.po';

describe('gcontacts App', () => {
  let page: GContactsPage;

  beforeEach(() => {
    page = new GContactsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
