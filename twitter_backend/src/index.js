const express = require('express')
const connect = require('./config/database')
const TweetRepository = require('./repository/tweet-repository')
const Tweet = require('./models/tweet')
const Comment = require('./models/comment')


const app = express()

app.get('/', (req, res) => {
    res.send("Api alives")
})


app.listen(2000, async () => {
    console.log(`Server running at 2000`);
    await connect()
    console.log(`Mongodb Connected`);

    // const tweet = await Tweet.create({
    //     content: 'Second Tweet',
    //     userEmail: 'a@b.com'
    // })

    // const tweet = await Tweet.find({})
    // tweet.userEmail = 'l@y.com'
    // await tweet.save()

    const tweetRepository = new TweetRepository()


    // const tweet = await tweetRepository.getById('68cd23653f2f554ef594c80c');
    // const tweet = await tweetRepository.update('68cd23653f2f554ef594c80c', {
    //     content: 'my I am good tweet'
    // });

    // const tweet = await tweetRepository.create({
    //     content: 'My Sweet Content',

    // });
    // console.log(tweet);

    // tweet.comments.push({ content: 'First Comment' })

    // await tweet.save()

    // const tweet =  await tweetRepository.create({
    //     content: 'tweet with comment content'
    // })
    // console.log(tweet);

    // const comment = await Comment.create({
    //     content: 'New Comment'
    // })

    // tweet.comments.push(comment);

    // await tweet.save();
    // console.log(tweet);
    // console.log(comment);

    const tweet = await tweetRepository.getAll(0, 4);

    console.log(tweet[0].contentWithEmail);

})