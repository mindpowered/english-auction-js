/**
 * Copyright Mind Powered Corporation 2020
 * 
 * https://mindpowered.dev/
 */

const maglev = require('@mindpowered/maglev');
const englishauction = require('../lib/englishauction.js');
const persistence = require('@mindpowered/persistence');

/**
 * An Auction Library
 * Timed auction starting at a low price and increasing until no more bids are made.
 * Also supports reserve price and automatic bidding.
 */
class EnglishAuction {
	constructor() {
		let bus = maglev.maglev.MagLev.getInstance('englishauction');
		let lib = new englishauction.englishauction.EnglishAuction(bus);
		new persistence.persistence.Persistence(bus);
	}

	/**
	 * Create a new auction
	 * @param {number} start start time of auction
	 * @param {number} end end time of auction
	 * @param {number} startingPrice starting price of auction
	 * @param {number} reservePrice reserve price for the auction (0 = none)
	 * @param {number} priceIncrement price increments for bids in the auction
	 * @return {Promise} auctionId Promise will resolve to type string.
	*/
	Create(start, end, startingPrice, reservePrice, priceIncrement) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let args = [start, end, startingPrice, reservePrice, priceIncrement];
		let ret = jsbus.call('EnglishAuction.Create', args);
		return ret;
	}

	/**
	 * Get the start of an auction
	 * Will return a timestamp in milliseconds
	 * @param {string} auctionId auction id
	 * @return {Promise} start of auction Promise will resolve to type number.
	*/
	GetStart(auctionId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let args = [auctionId];
		let ret = jsbus.call('EnglishAuction.GetStart', args);
		return ret;
	}

	/**
	 * Check if auction has ended
	 * @param {string} auctionId auction id
	 * @return {Promise} true if auction has ended, false otherwise Promise will resolve to type boolean.
	*/
	GetEnd(auctionId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let args = [auctionId];
		let ret = jsbus.call('EnglishAuction.GetEnd', args);
		return ret;
	}

	/**
	 * Check if an auction has started yet
	 * @param {string} auctionId auction id
	 * @return {Promise} true if auction has started, false otherwise Promise will resolve to type boolean.
	*/
	HasStarted(auctionId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let args = [auctionId];
		let ret = jsbus.call('EnglishAuction.HasStarted', args);
		return ret;
	}

	/**
	 * Check if an auction has ended yet
	 * @param {string} auctionId auction id
	 * @return {Promise} true if auction has ended, false otherwise Promise will resolve to type boolean.
	*/
	HasEnded(auctionId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let args = [auctionId];
		let ret = jsbus.call('EnglishAuction.HasEnded', args);
		return ret;
	}

	/**
	 * Create a bid in an auction
	 * @param {string} auctionId auction id
	 * @param {string} userId user id
	 * @param {number} price price bud
	*/
	Bid(auctionId, userId, price) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let args = [auctionId, userId, price];
		jsbus.call('EnglishAuction.Bid', args);
	}

	/**
	 * Get the highest bidder in an auction
	 * @param {string} auctionId auction id
	 * @return {Promise}  Promise will resolve to type mixed.
	*/
	GetHighestBidder(auctionId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let args = [auctionId];
		let ret = jsbus.call('EnglishAuction.GetHighestBidder', args);
		return ret;
	}

	/**
	 * Get the highest bids in an auction
	 * @param {string} auctionId auction id
	 * @param {number} numBids max number of highest bids to return
	 * @return {Promise} Highest bids for the specified auction Promise will resolve to type array.
	*/
	GetHighestBids(auctionId, numBids) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let args = [auctionId, numBids];
		let ret = jsbus.call('EnglishAuction.GetHighestBids', args);
		return ret;
	}

	/**
	 * Get the number of bids in an auction
	 * @param {string} auctionId auction id
	 * @return {Promise} Number of bids placed in the specified auction Promise will resolve to type number.
	*/
	GetNumberOfBids(auctionId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let args = [auctionId];
		let ret = jsbus.call('EnglishAuction.GetNumberOfBids', args);
		return ret;
	}

	/**
	 * Get the price increment for the specified auction
	 * @param {string} auctionId auction id
	 * @return {Promise} Price increment Promise will resolve to type number.
	*/
	GetPriceIncrement(auctionId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let args = [auctionId];
		let ret = jsbus.call('EnglishAuction.GetPriceIncrement', args);
		return ret;
	}

	/**
	 * Get the reserve price for the specified auction
	 * @param {string} auctionId auction id
	 * @return {Promise} Reserve price Promise will resolve to type number.
	*/
	GetReservePrice(auctionId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let args = [auctionId];
		let ret = jsbus.call('EnglishAuction.GetReservePrice', args);
		return ret;
	}

	/**
	 * Get the starting price for the specified auction
	 * @param {string} auctionId auction id
	 * @return {Promise} Starting price Promise will resolve to type number.
	*/
	GetStartingPrice(auctionId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let args = [auctionId];
		let ret = jsbus.call('EnglishAuction.GetStartingPrice', args);
		return ret;
	}

	/**
	 * Get the time remaining for the specified auction
	 * @param {string} auctionId auction id
	 * @param {number} now current unix timestamp
	 * @return {Promise} Time remaining in seconds Promise will resolve to type number.
	*/
	CalcTimeRemaining(auctionId, now) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let args = [auctionId, now];
		let ret = jsbus.call('EnglishAuction.CalcTimeRemaining', args);
		return ret;
	}

	/**
	 * Get the minimum next bid for the specified auction
	 * @param {string} auctionId auction id
	 * @return {Promise} Minimum bid price Promise will resolve to type number.
	*/
	CalcMinimumBid(auctionId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let args = [auctionId];
		let ret = jsbus.call('EnglishAuction.CalcMinimumBid', args);
		return ret;
	}

	/**
	 * Get a list of auctions based on their end time
	 * @param {number} endfrom end from
	 * @param {number} endto end to
	 * @param {number} page 
	 * @param {number} perpage number of auctions per page
	 * @param {string} sort field to sort by
	 * @param {boolean} asc ascending (true) or descending (false)
	 * @return {Promise} List of auctions ending in the specified period Promise will resolve to type array.
	*/
	GetAuctionsEnding(endfrom, endto, page, perpage, sort, asc) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let args = [endfrom, endto, page, perpage, sort, asc];
		let ret = jsbus.call('EnglishAuction.GetAuctionsEnding', args);
		return ret;
	}

	/**
	 * Get a list of auctions based on their start time
	 * @param {number} startfrom start from
	 * @param {number} startto start to
	 * @param {number} page 
	 * @param {number} perpage number of auctions per page
	 * @param {string} sort field to sort by
	 * @param {boolean} asc ascending (true) or descending (false)
	 * @return {Promise} List of auctions starting in the specified period Promise will resolve to type array.
	*/
	GetAuctionsStarting(startfrom, startto, page, perpage, sort, asc) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let args = [startfrom, startto, page, perpage, sort, asc];
		let ret = jsbus.call('EnglishAuction.GetAuctionsStarting', args);
		return ret;
	}

	/**
	 * Get a list of currently running auctions
	 * @param {number} page 
	 * @param {number} perpage number of auctions per page
	 * @param {string} sort field to sort by
	 * @param {boolean} asc ascending (true) or descending (false)
	 * @return {Promise} List of open auctions Promise will resolve to type array.
	*/
	GetOpenAuctions(page, perpage, sort, asc) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let args = [page, perpage, sort, asc];
		let ret = jsbus.call('EnglishAuction.GetOpenAuctions', args);
		return ret;
	}

	/**
	 * Provide a callback used to store new auctions (eg. in a database) and return the ID of the new auction.
	 * @param recordType 
	 * @param operationName 
	 * @param strategyMethod 
	 * @return {Promise} new auction id Promise will resolve to type string.
	*/
	SetupNewAuctionQueryCallback(strategyMethod) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let recordType = "EnglishAuction.Auction"
		let operationName = "CreateNew"
		let args = [recordType, operationName, strategyMethod];
		let ret = jsbus.call('Persistence.AddMutator', args);
		return ret;
	}

	/**
	 * Provide a callback used to retrieve auctions (eg. from a database) by ID
	 * @param recordType 
	 * @param operationName 
	 * @param strategyMethod 
	 * @return {Promise} The auction or null Promise will resolve to type object.
	*/
	SetupFindAuctionByIdQueryCallback(strategyMethod) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let recordType = "EnglishAuction.Auction"
		let operationName = "FindById"
		let args = [recordType, operationName, strategyMethod];
		let ret = jsbus.call('Persistence.AddGetter', args);
		return ret;
	}

	/**
	 * Provide a callback used to retrieve auctions (eg. from a database) by their start date/time
	 * @param recordType 
	 * @param operationName 
	 * @param strategyMethod 
	 * @return {Promise} A list of auctions Promise will resolve to type array.
	*/
	SetupFindAuctionsStartingQueryCallback(strategyMethod) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let recordType = "EnglishAuction.Auction"
		let operationName = "FindStarting"
		let args = [recordType, operationName, strategyMethod];
		let ret = jsbus.call('Persistence.AddGetter', args);
		return ret;
	}

	/**
	 * Provide a callback used to retrieve auctions (eg. from a database) by their end data/time
	 * @param recordType 
	 * @param operationName 
	 * @param strategyMethod 
	 * @return {Promise} A list of auctions Promise will resolve to type array.
	*/
	SetupFindAuctionsEndingQueryCallback(strategyMethod) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let recordType = "EnglishAuction.Auction"
		let operationName = "FindEnding"
		let args = [recordType, operationName, strategyMethod];
		let ret = jsbus.call('Persistence.AddGetter', args);
		return ret;
	}

	/**
	 * Provide a callback used to retrieve open auctions (eg. from a database)
	 * @param recordType 
	 * @param operationName 
	 * @param strategyMethod 
	 * @return {Promise} A list of auctions Promise will resolve to type array.
	*/
	SetupFindOpenAuctionsQueryCallback(strategyMethod) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let recordType = "EnglishAuction.Auction"
		let operationName = "FindOpen"
		let args = [recordType, operationName, strategyMethod];
		let ret = jsbus.call('Persistence.AddGetter', args);
		return ret;
	}

	/**
	 * Provide a callback used to count the number of bids for an auction (eg. in a database)
	 * @param recordType 
	 * @param operationName 
	 * @param strategyMethod 
	 * @return {Promise} Number of bids Promise will resolve to type number.
	*/
	SetupCountBidsQueryCallback(strategyMethod) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let recordType = "EnglishAuction.Bid"
		let operationName = "CountForAuction"
		let args = [recordType, operationName, strategyMethod];
		let ret = jsbus.call('Persistence.AddGetter', args);
		return ret;
	}

	/**
	 * Provide a callback used to retrieve (eg. from a database) the highest bids for an auction
	 * @param recordType 
	 * @param operationName 
	 * @param strategyMethod 
	 * @return {Promise} A list of highest bids Promise will resolve to type array.
	*/
	SetupHighestBidsQueryCallback(strategyMethod) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let recordType = "EnglishAuction.Bid"
		let operationName = "FindByHighestPriceForAuction"
		let args = [recordType, operationName, strategyMethod];
		let ret = jsbus.call('Persistence.AddGetter', args);
		return ret;
	}

	/**
	 * Provide a callback used to store new bids (eg. in a database) and return the ID of the new bid.
	 * @param recordType 
	 * @param operationName 
	 * @param strategyMethod 
	 * @return {Promise} New bid id Promise will resolve to type string.
	*/
	SetupNewBidQueryCallback(strategyMethod) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let recordType = "EnglishAuction.Bid"
		let operationName = "New"
		let args = [recordType, operationName, strategyMethod];
		let ret = jsbus.call('Persistence.AddGetter', args);
		return ret;
	}

}
module.exports = EnglishAuction;

