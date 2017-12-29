const functions = require('firebase-functions');
const admin = require('firebase-admin');
const moment = require('moment-timezone');
const requestPromise = require('request-promise');

exports.hourly_job = functions.pubsub.topic('hourly-tick').onPublish((event) => {
  admin.initializeApp(functions.config().firebase);
  const db = admin.database();
  const assignationsRef = db.ref('assignations');

  console.log('通知しますぞ');
  const targetTime = moment().tz('Asia/Tokyo').format('YYYY-MM-DD HH:00:00');

  assignationsRef.once('value').then(function (snapshot) {
    const assignations = snapshot.val();
    Object.keys(assignations).forEach(function (key) {
      const a = this[key];

      if (a.datetime == targetTime) {
        console.log('SENDING:' + a.slackName);
        postToSlack(a).then(function () {
          console.log('SUCCESS:' + a.slackName);
        }).catch(function (error) {
          console.log('ERROR:' + a.slackName);
          console.log(error);
        })
      }
    }, assignations)
  })
});

function postToSlack(assignation) {
  return requestPromise({
    method: 'POST',
    uri: functions.config().slack.url,
    body: {
      text: assignation.slackName + ' 週番よろしくお願いします',
      link_names: 1
    },
    json: true
  });
}
