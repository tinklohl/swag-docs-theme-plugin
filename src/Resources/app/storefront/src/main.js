/*
Main JavaScript entry
==================================================
This file is used to inject custom JavaScript into your theme

It is strongly recommended to split JavaScript behaviour into Plugins,
which can be registered by PluginManager afterwards
*/

import CheckoutCartPlugin from "./plugin/checkout-cart.plugin";

PluginManager.register('CheckoutCart', CheckoutCartPlugin, '[data-checkout-cart]');
