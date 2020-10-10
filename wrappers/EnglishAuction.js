/**
 * Copyright Mind Powered Corporation 2020
 * 
 * https://mindpowered.dev/
 */

const maglev = require('@mindpowered/maglev');
const englishauction = require('@mindpowered/englishauction');

/**
 * An Auction Library
 * Timed auction starting at a low price and increasing until no more bids are made.
 * Also supports reserve price and automatic bidding.
 */
class EnglishAuctionWrapper {
	constructor() {
		let bus = maglev.maglev.MagLev.getInstance('default');
		let lib = new englishauction.englishauction.EnglishAuction(bus);
	}

	/**
	 * Create a new auction
	 * @param start start time of auction
	 * @param end end time of auction
	 * @param startingPrice starting price of auction
	 * @param reservePrice reserve price for the auction (0 = none)
	 * @param priceIncrement price increments for bids in the auction
	 * @return {string} auctionId
	*/
	Create(start, end, startingPrice, reservePrice, priceIncrement) {
		let bus = maglev.maglev.MagLev.getInstance('default');
		let args = [start, end, startingPrice, reservePrice, priceIncrement];
		let ret = bus.call('EnglishAuction.Create', args);
		return ret;
	}

	/**
	 * Get the start of an auction
	 * Will return a timestamp in milliseconds
	 * @param auctionId auction id
	 * @return {number} start of auction
	*/
	GetStart(auctionId) {
		let bus = maglev.maglev.MagLev.getInstance('default');
		let args = [auctionId];
		let ret = bus.call('EnglishAuction.GetStart', args);
		return ret;
	}

	/**
	 * Check if auction has ended
	 * @param auctionId auction id
	 * @return {number} true if auction has ended, false otherwise
	*/
	GetEnd(auctionId) {
		let bus = maglev.maglev.MagLev.getInstance('default');
		let args = [auctionId];
		let ret = bus.call('EnglishAuction.GetEnd', args);
		return ret;
	}

	/**
	 * Check if an auction has started yet
	 * @param auctionId auction id
	 * @return {number} true if auction started, false otherwise
	*/
	HasStarted(auctionId) {
		let bus = maglev.maglev.MagLev.getInstance('default');
		let args = [auctionId];
		let ret = bus.call('EnglishAuction.HasStarted', args);
		return ret;
	}

}

