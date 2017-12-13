class CopyrightElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // the HTML for this element uses Bootstrap's `text-center` property.
    this.innerHTML = `<section id="copyright" class="text-center">Copyright &copy; ${this.year} ${this.holder}.</section>`
  }
}

window.customElements.define('x-copyright', CopyrightElement);
