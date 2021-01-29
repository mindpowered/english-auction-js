
englishauction
==============
Online auctions with ascending price and time limit

![Build Status](https://mindpowered.dev/assets/images/github-badges/build-passing.svg)

Contents
========

* [Source Code and Documentation](#source-code-and-documentation)
* [Licensing](#licensing)
* [About](#about)
* [Requirements](#requirements)
* [Installation](#installation)
* [Usage](#usage)
* [Support](#support)

# Source Code and Documentation
- Source Code: [https://github.com/mindpowered/english-auction-js](https://github.com/mindpowered/english-auction-js)
- Documentation: [https://mindpowered.github.io/english-auction-js](https://mindpowered.github.io/english-auction-js)

# Licensing
To obtain a version of this package under the MIT License, follow the instructions to [get a license][purchase]. The MIT License has no restrictions on commercial use and permits reuse within proprietary software.

# About
An English auction is the most common form of auction. When an auction opens, the price starts low and increases as buyers bid for the item. Live auctions usually end when there is no new highest bid for a period of time. For online auctions, an end time is usually set. To prevent items selling for a loss, sometimes the seller will place a reserve." A reserve is the least amount to sell the item for, although the auction may start at a lower price than this. Another common feature of online auctions is the ability to pay a set price to win and end the auction.

This package aims to provide functionality of online English auctions.

# Requirements
- ES6
- npm


Third-party dependencies may have additional requirements.

# Installation
## npm

You can retrieve the englishauction package using npm https://www.npmjs.com/. After initializing your packages.json file in your project’s directory with `npm init`, you can install the englishauction package with
```
npm i @mindpowered/englishauction --save
```
hint: the `--save` option will add the newly installed dependency in your packages.json file.

## package.json

You can also add the package directly to your packages.json file.

...


# Usage
```javascript

let mpcea = require('@mindpowered/englishauction');
const {EnglishAuction} = mpcea;

let ea = new EnglishAuction();
ea.EnglishAuction(0, 10, "start", true);

```


# Support
We are here to support using this package. If it doesn't do what you're looking for, isn't working, or you just need help, please [Contact us][contact].

There is also a public [Issue Tracker][bugs] available for this package.



[bugs]: https://github.com/mindpowered/english-auction-js/issues
[contact]: https://mindpowered.dev/support.html?ref=english-auction-js/
[docs]: https://mindpowered.github.io/english-auction-js/
[licensing]: https://mindpowered.dev/?ref=english-auction-js
[purchase]: https://mindpowered.dev/purchase/
