const functions = require('firebase-functions');
const admin = require('firebase-admin');
const moment = require('moment-timezone');

exports.hourly_job =
  functions.pubsub.topic('hourly-tick').onPublish((event) => {
    admin.initializeApp(functions.config().firebase);
    const db = admin.database();
    const postsRef = db.ref('posts');

    console.log('通知します');
    console.log(moment().tz('Asia/Tokyo').format('YYYY-MM-DD HH:mm:ss'));

    postsRef.once('value').then(function (snapshot) {
      console.log(snapshot.val());
    })
  });
