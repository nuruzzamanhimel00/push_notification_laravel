// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');

/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
*/
firebase.initializeApp({

    apiKey: "AIzaSyCFyM7v8jEKRIylsmQcukHJmY2Q5RLXy04",
    authDomain: "push-notification-e69f9.firebaseapp.com",
    projectId: "push-notification-e69f9",
    storageBucket: "push-notification-e69f9.appspot.com",
    messagingSenderId: "664342013082",
    appId: "1:664342013082:web:f05c0dd0bf7d0ceb572b23",

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
