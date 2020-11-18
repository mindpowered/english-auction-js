
englishauction
==============

Contents
========

* [About](#about)
* [Requirements](#requirements)
* [Installation](#installation)
* [Configuration](#configuration)
* [Usage](#usage)
* [Licensing](#licensing)
* [Support](#support)

# About
A Timed Auction library starting at a low price and increasing until the auction ends.

# Requirements
ES6
npm


Third-party dependencies may have additional requirements.

# Installation
You can retrieve the englishauction package using npm https://www.npmjs.com/. After initializing your packages.json file in your project’s directory with `npm init`, you can install the englishauction package with
```
npm i @mindpowered/englishauction --save
```
hint: the `--save` option will add the newly installed dependency in your packages.json file. 


# Configuration
You must configure the storage and retrieval of auctions and bids. Before we can make use of englishauction's functions, we have to create Callback functions for englishauction to use whenever it needs to use any persistent data regarding auctions and bids. A common way of storing persistent data is using SQL. Each setup function bridges the gap between your auction data and the englishauction package's functionality.

# Usage
You are using js


More examples to come

# Licensing
Additional [licensing options][licensing] are available.

# Support
For bug fixes, please raise an issue in the [Issue Tracker][bugs].

For feature requests, and general support, please [Contact us][contact].



[bugs]: https://github.com/mindpowered/english-auction-js/issues
[contact]: https://mindpowered.dev/support.html?ref=english-auction-js/
[docs]: https://mindpowered.github.io/english-auction-js/
[licensing]: https://mindpowered.dev/?ref=english-auction-js
