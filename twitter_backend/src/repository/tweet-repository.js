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

    async getAll(offset, limit) {
        try {
            const tweets = await Tweet.find({}).skip(offset).limit(limit)
            return tweets
        } catch (error) {
            console.log(error);
        }
    }

    async getWithComments(id) {
               try {
            const tweets = await Tweet.findById(id).populate({path: 'comments'}).lean()
            return tweets
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