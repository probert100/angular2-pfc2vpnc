import { Angular2Pfc2vpncPage } from './app.po';

describe('angular2-pfc2vpnc App', () => {
  let page: Angular2Pfc2vpncPage;

  beforeEach(() => {
    page = new Angular2Pfc2vpncPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
