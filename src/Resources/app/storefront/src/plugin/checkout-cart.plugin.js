/*
An example Plugin
==================================================
The following JavaScript adds a simple "Product added" message to the "Add to cart" button, if clicked.
*/

// Base Storefront plugin class
import Plugin from "src/plugin-system/plugin.class";

export default class CheckoutCartPlugin extends Plugin {

    // every Plugin needs to define the mandatory init() method
    init() {
        this.__getCheckoutButton();

        if (!this._button) {
            throw new Error(`No button found for the plugin: ${this.constructor.name}`)
        }

        this.__createNewConfirmedMessageElement();
        this.__registerEvents();
    }

    __getCheckoutButton() {
        if (this.el && this.el.nodeName === 'BUTTON') {
            this._button = this.el;
        } else {
            this._button = this.el.closest('button');
        }
    }

    __createNewConfirmedMessageElement() {
        this.message = document.createElement('span');
        this.message.appendChild(document.createTextNode('Product added'));
    }

    __registerEvents() {
        this.el.addEventListener('click', this.__checkoutButtonClicked.bind(this));
    }

    /**
     * On click on checkout button alert the user, that a new product was added to cart
     * @param {Event} event
     * @private
     */
    __checkoutButtonClicked(event) {
        this.el.appendChild(this.message);
    }
}
