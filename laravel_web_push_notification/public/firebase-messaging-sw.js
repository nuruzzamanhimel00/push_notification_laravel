// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');

/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
*/
firebase.initializeApp({

    apiKey: "AIzaSyDE6SCfBpefpucv0qkwIbvFa8xPvflZNYg",
    authDomain: "test-push-notification-f4b27.firebaseapp.com",
    projectId: "test-push-notification-f4b27",
    storageBucket: "test-push-notification-f4b27.appspot.com",
    messagingSenderId: "696006934342",
    appId: "1:696006934342:web:5d2971baf72a87c0f6ef47",

});


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    console.log("Message received.", payload);

    const title = "Hello world is awesome";
    const options = {
        body: "Your notificaiton message .",
        icon: "/firebase-logo.png",
    };

    return self.registration.showNotification(
        title,
        options,
    );
});
