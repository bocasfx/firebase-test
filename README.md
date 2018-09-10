# Firebase test

* `npm install -g firebase-tools`
* `firebase login`
* `create-react-app ./firebase-test`
* `firebase init`
* Select hosting and functions
* Go to `https://console.firebase.google.com`
* Select a project or add a new one.
* Click on _Add firebase to your web app_
* Follow instructions.
* Edit _functions/index.js_ as necessary.
* Add env variables `firebase functions:config:set someservice.key="THE API KEY" someservice.id="THE CLIENT ID"`
* Deploy your app `firebase deploy`
* Changes to functions can be deployed with `firebase deploy --only functions`
