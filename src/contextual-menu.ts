import { bindable, containerless } from 'aurelia-templating';

@containerless
export class ContextualMenu {
  @bindable isActive: boolean = false;
  @bindable trigger: HTMLElement = null;
  public wrapperElement: HTMLElement = null;

  constructor () {
    this.close = this.close.bind(this);
    this.handleClickInDocument = this.handleClickInDocument.bind(this);
  }

  attached () {
    document.addEventListener('click', this.handleClickInDocument, true);
  }

  handleClickInDocument (ev: Event) {
    if (!this.isActive) {
      return false;
    }

    if (this.trigger && (ev.target === this.trigger || (ev.target as HTMLElement).parentElement === this.trigger)) {
      return false;
    }

    if (ev.target === this.wrapperElement) {
      return false;
    }

    this.close();
  }

  close () {
    this.isActive = false;
  }
}
