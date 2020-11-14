/**
 * Copyright Mind Powered Corporation 2020
 * 
 * https://mindpowered.dev/
 */

const maglev = require('@mindpowered/maglev');
const englishauction = require('@mindpowered/englishauction');
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
	 * @param start start time of auction
	 * @param end end time of auction
	 * @param startingPrice starting price of auction
	 * @param reservePrice reserve price for the auction (0 = none)
	 * @param priceIncrement price increments for bids in the auction
	 * @return {string} auctionId
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
	 * @param auctionId auction id
	 * @return {number} start of auction
	*/
	GetStart(auctionId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let args = [auctionId];
		let ret = jsbus.call('EnglishAuction.GetStart', args);
		return ret;
	}

	/**
	 * Check if auction has ended
	 * @param auctionId auction id
	 * @return {bool} true if auction has ended, false otherwise
	*/
	GetEnd(auctionId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let args = [auctionId];
		let ret = jsbus.call('EnglishAuction.GetEnd', args);
		return ret;
	}

	/**
	 * Check if an auction has started yet
	 * @param auctionId auction id
	 * @return {bool} true if auction started, false otherwise
	*/
	HasStarted(auctionId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let args = [auctionId];
		let ret = jsbus.call('EnglishAuction.HasStarted', args);
		return ret;
	}

	/**
	 * Create a bid in an auction
	 * @param auctionId auction id
	 * @param userId user id
	 * @param price price bud
	*/
	Bid(auctionId, userId, price) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let args = [auctionId, userId, price];
		jsbus.call('EnglishAuction.Bid', args);
	}

	/**
	 * Get the highest bidder in an auction
	 * @param auctionId auction id
	 * @return {mixed} 
	*/
	GetHighestBidder(auctionId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let args = [auctionId];
		let ret = jsbus.call('EnglishAuction.GetHighestBidder', args);
		return ret;
	}

	/**
	 * Get the highest bids in an auction
	 * @param auctionId auction id
	 * @param numBids max number of highest bids to return
	 * @return {array} Highest bids for the specified auction
	*/
	GetHighestBids(auctionId, numBids) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let args = [auctionId, numBids];
		let ret = jsbus.call('EnglishAuction.GetHighestBids', args);
		return ret;
	}

	/**
	 * Get the number of bids in an auction
	 * @param auctionId auction id
	 * @return {number} Number of bids placed in the specified auction
	*/
	GetNumberOfBids(auctionId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let args = [auctionId];
		let ret = jsbus.call('EnglishAuction.GetNumberOfBids', args);
		return ret;
	}

	/**
	 * Get the price increment for the specified auction
	 * @param auctionId auction id
	 * @return {number} Price increment
	*/
	GetPriceIncrement(auctionId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let args = [auctionId];
		let ret = jsbus.call('EnglishAuction.GetPriceIncrement', args);
		return ret;
	}

	/**
	 * Get the reserve price for the specified auction
	 * @param auctionId auction id
	 * @return {number} Reserve price
	*/
	GetReservePrice(auctionId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let args = [auctionId];
		let ret = jsbus.call('EnglishAuction.GetReservePrice', args);
		return ret;
	}

	/**
	 * Get the starting price for the specified auction
	 * @param auctionId auction id
	 * @return {number} Starting price
	*/
	GetStartingPrice(auctionId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let args = [auctionId];
		let ret = jsbus.call('EnglishAuction.GetStartingPrice', args);
		return ret;
	}

	/**
	 * Get the time remaining for the specified auction
	 * @param auctionId auction id
	 * @param now current unix timestamp
	 * @return {number} Time remaining in seconds
	*/
	CalcTimeRemaining(auctionId, now) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let args = [auctionId, now];
		let ret = jsbus.call('EnglishAuction.CalcTimeRemaining', args);
		return ret;
	}

	/**
	 * Get the minimum next bid for the specified auction
	 * @param auctionId auction id
	 * @return {number} Minimum bid price
	*/
	CalcMinimumBid(auctionId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let args = [auctionId];
		let ret = jsbus.call('EnglishAuction.CalcMinimumBid', args);
		return ret;
	}

	/**
	 * Get a list of auctions based on their end time
	 * @param endfrom end from
	 * @param endto end to
	 * @param page 
	 * @param perpage number of auctions per page
	 * @param sort field to sort by
	 * @param asc ascending (true) or descending (false)
	 * @return {array} List of auctions ending in the specified period
	*/
	GetAuctionsEnding(endfrom, endto, page, perpage, sort, asc) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let args = [endfrom, endto, page, perpage, sort, asc];
		let ret = jsbus.call('EnglishAuction.GetAuctionsEnding', args);
		return ret;
	}

	/**
	 * Get a list of auctions based on their start time
	 * @param startfrom start from
	 * @param startto start to
	 * @param page 
	 * @param perpage number of auctions per page
	 * @param sort field to sort by
	 * @param asc ascending (true) or descending (false)
	 * @return {array} List of auctions starting in the specified period
	*/
	GetAuctionsStarting(startfrom, startto, page, perpage, sort, asc) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		let args = [startfrom, startto, page, perpage, sort, asc];
		let ret = jsbus.call('EnglishAuction.GetAuctionsStarting', args);
		return ret;
	}

	/**
	 * Get a list of currently running auctions
	 * @param page 
	 * @param perpage number of auctions per page
	 * @param sort field to sort by
	 * @param asc ascending (true) or descending (false)
	 * @return {array} List of open auctions
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
	 * @return {string} new auction id
	*/
	SetupNewAuctionQueryCallback(strategyMethod) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		recordType = "EnglishAuction.Auction"
		operationName = "CreateNew"
		let args = [recordType, operationName, strategyMethod];
		let ret = jsbus.call('Persistence.AddMutator', args);
		return ret;
	}

	/**
	 * Provide a callback used to retrieve auctions (eg. from a database) by ID
	 * @param recordType 
	 * @param operationName 
	 * @param strategyMethod 
	 * @return {object} The auction or null
	*/
	SetupFindAuctionByIdQueryCallback(strategyMethod) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		recordType = "EnglishAuction.Auction"
		operationName = "FindById"
		let args = [recordType, operationName, strategyMethod];
		let ret = jsbus.call('Persistence.AddGetter', args);
		return ret;
	}

	/**
	 * Provide a callback used to retrieve auctions (eg. from a database) by their start date/time
	 * @param recordType 
	 * @param operationName 
	 * @param strategyMethod 
	 * @return {array} A list of auctions
	*/
	SetupFindAuctionsStartingQueryCallback(strategyMethod) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		recordType = "EnglishAuction.Auction"
		operationName = "FindStarting"
		let args = [recordType, operationName, strategyMethod];
		let ret = jsbus.call('Persistence.AddGetter', args);
		return ret;
	}

	/**
	 * Provide a callback used to retrieve auctions (eg. from a database) by their end data/time
	 * @param recordType 
	 * @param operationName 
	 * @param strategyMethod 
	 * @return {array} A list of auctions
	*/
	SetupFindAuctionsEndingQueryCallback(strategyMethod) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		recordType = "EnglishAuction.Auction"
		operationName = "FindEnding"
		let args = [recordType, operationName, strategyMethod];
		let ret = jsbus.call('Persistence.AddGetter', args);
		return ret;
	}

	/**
	 * Provide a callback used to retrieve open auctions (eg. from a database)
	 * @param recordType 
	 * @param operationName 
	 * @param strategyMethod 
	 * @return {array} A list of auctions
	*/
	SetupFindOpenAuctionsQueryCallback(strategyMethod) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		recordType = "EnglishAuction.Auction"
		operationName = "FindOpen"
		let args = [recordType, operationName, strategyMethod];
		let ret = jsbus.call('Persistence.AddGetter', args);
		return ret;
	}

	/**
	 * Provide a callback used to count the number of bids for an auction (eg. in a database)
	 * @param recordType 
	 * @param operationName 
	 * @param strategyMethod 
	 * @return {number} Number of bids
	*/
	SetupCountBidsQueryCallback(strategyMethod) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		recordType = "EnglishAuction.Bid"
		operationName = "CountForAuction"
		let args = [recordType, operationName, strategyMethod];
		let ret = jsbus.call('Persistence.AddGetter', args);
		return ret;
	}

	/**
	 * Provide a callback used to retrieve (eg. from a database) the highest bids for an auction
	 * @param recordType 
	 * @param operationName 
	 * @param strategyMethod 
	 * @return {array} A list of highest bids
	*/
	SetupHighestBidsQueryCallback(strategyMethod) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		recordType = "EnglishAuction.Bid"
		operationName = "FindByHighestPriceForAuction"
		let args = [recordType, operationName, strategyMethod];
		let ret = jsbus.call('Persistence.AddGetter', args);
		return ret;
	}

	/**
	 * Provide a callback used to store new bids (eg. in a database) and return the ID of the new bid.
	 * @param recordType 
	 * @param operationName 
	 * @param strategyMethod 
	 * @return {string} New bid id
	*/
	SetupNewBidQueryCallback(strategyMethod) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('englishauction');
		recordType = "EnglishAuction.Bid"
		operationName = "New"
		let args = [recordType, operationName, strategyMethod];
		let ret = jsbus.call('Persistence.AddGetter', args);
		return ret;
	}

}

