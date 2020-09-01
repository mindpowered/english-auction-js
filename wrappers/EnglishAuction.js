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
	 * @return {string} auctionId
	*/
	Create(start, end, startingPrice, reservePrice) {
		let bus = maglev.maglev.MagLev.getInstance('default');
		let args = [start, end, startingPrice, reservePrice];
		let ret = bus.call('EnglishAuction.Create', args);
		return ret;
	}

	/**
	 * Bid in an auction
	 * @param auctionId auction id to bid in
	 * @param userId user id that's bidding
	 * @param price bid price
	 * @return {bool} true on success, false on failure
	*/
	Bid(auctionId, userId, price) {
		let bus = maglev.maglev.MagLev.getInstance('default');
		let args = [auctionId, userId, price];
		let ret = bus.call('EnglishAuction.Bid', args);
		return ret;
	}

	/**
	 * Automatically bid against others in an auction (up to the specified amount)
	 * @param auctionId auction id to bid in
	 * @param userId user id that's bidding
	 * @param price bid price
	 * @return {bool} true on success, false on failure
	*/
	AutoBid(auctionId, userId, price) {
		let bus = maglev.maglev.MagLev.getInstance('default');
		let args = [auctionId, userId, price];
		let ret = bus.call('EnglishAuction.AutoBid', args);
		return ret;
	}

	/**
	 * Force an auction to close and specify the winning bid.
	 * @param auctionId auction id to bid in
	 * @param userId user id that's bidding
	 * @param price bid price
	 * @return {bool} true on success, false on failure
	*/
	ForceClose(auctionId, userId, price) {
		let bus = maglev.maglev.MagLev.getInstance('default');
		let args = [auctionId, userId, price];
		let ret = bus.call('EnglishAuction.ForceClose', args);
		return ret;
	}

	/**
	 * TBD
	*/
	Status() {
		let bus = maglev.maglev.MagLev.getInstance('default');
		let args = [];
		bus.call('EnglishAuction.Status', args);
	}

}

