const Tweet = require("../models/tweet");


class TweetRepository {

    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async get() {
        try {
            const tweets = await Tweet.find({})
            return tweets
        } catch (error) {
            console.log(error);
        }
    }

async getWithComments(id) {
    try {
        const tweet = await Tweet.findById(id);
        if (!tweet) {
            console.log('Tweet not found');
            return null;
        }

        // Now we can call populate on the tweet document
        const populatedTweet = await tweet.populate('comments');
        return populatedTweet;
    } catch (error) {
        console.log(error);
    }
}

    async getById(id) {

        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }

    }

    async update(tweetId, data) {
        try {
            const tweet = await Tweet.findByIdAndUpdate(tweetId, data, { new: true });
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(id) {
        try {
            const tweet = await Tweet.findByIdAndDelete(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }


}

module.exports = TweetRepository;