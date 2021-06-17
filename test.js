function maxProfit(prices) {
	let profitMade = 0;
	for (let i = 1; i < prices.length; i++) {
		profitMade += Math.max(0, prices[i] - prices[i - 1]);
	}
	return profitMade;
}
console.log('Profit');
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));

function findIndices(numbers, target) {
	let sum;
	let begin = 0;
	let end = numbers.length - 1;
	while (begin < end) {
		sum = numbers[begin] + numbers[end];
		if (sum == target) return [begin + 1, end + 1];
		if (sum > target) end--;
		if (sum < target) begin++;
	}
	return null;
}
console.log('Indices');
console.log(findIndices([2, 7, 11, 15], 9));
console.log(findIndices([2, 3, 4], 6));
console.log(findIndices([-1, 0], -1));
console.log(findIndices([11, 19, 78], 8));

const TweetCounts = function () {
	this.tweet = {};
};

TweetCounts.prototype.recordTweet = function (tweetName, time) {
	if (!(tweetName in this.tweet)) {
		this.tweet[tweetName] = [];
	}
	this.tweet[tweetName].push(time);
};

TweetCounts.prototype.getTweetCountsPerFrequency = function (freq, tweetName, startTime, endTime) {
	let result = [];
	let freqTime = 0;
	let freqOption = freq.toLowerCase();
	let tweetArray = this.tweet[tweetName];

	if (freqOption === 'minute') {
		freqTime = 60;
	} else if (freqOption === 'hour') {
		freqTime = 3600;
	} else if (freqOption === 'day') {
		freqTime = 3600 * 24;
	}

	tweetArray.sort((a, b) => a - b);

	let index = 0;
	let interval = startTime;
	while (interval <= endTime) {
		while (index < tweetArray.length && tweetArray[index] < startTime) {
			index++;
		}
		let count = 0;
		while (index < tweetArray.length && tweetArray[index] < interval + freqTime && tweetArray[index] <= endTime) {
			index++;
			count++;
		}
		result.push(count);
		interval += freqTime;
	}
	return result;
};
