var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CopyrightElement = (function (_super) {
    __extends(CopyrightElement, _super);
    function CopyrightElement() {
        return _super.call(this) || this;
    }
    CopyrightElement.prototype.connectedCallback = function () {
        // the HTML for this element uses Bootstrap's `text-center` property.
        this.innerHTML = "<section id=\"copyright\" class=\"text-center\">Copyright &copy; " + this.year + " " + this.holder + ".</section>";
    };
    return CopyrightElement;
}(HTMLElement));
window.customElements.define('x-copyright', CopyrightElement);
