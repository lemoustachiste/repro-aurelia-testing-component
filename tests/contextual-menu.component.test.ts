import { ComponentTester, StageComponent, waitForDocumentElement } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';

// setup not working, issue open at https://stackoverflow.com/questions/62699108/aurelia-testing-failed-to-execute-replacechild-on-node-parameter-1-is-not
describe('Contextual Menu HTML View test suite', function () {
  let component: ComponentTester;

  beforeEach(function () {
    component = StageComponent
      .withResources('../../src/contextual-menu')
      .inView('<contextual-menu is-active.two-way="activateMenu"></contextual-menu>')
      .boundTo({ activateMenu: false });
  });

  it('should not add the is-active class to the root element', async function () {
    await component.create(bootstrap);
    console.log(component);
    const rootElement = await waitForDocumentElement('.qa-contextual-menu');
    expect(rootElement.classList.contains('is-active')).toBe(false);
  });

  afterEach(function () {
    component.dispose();
  });
});
