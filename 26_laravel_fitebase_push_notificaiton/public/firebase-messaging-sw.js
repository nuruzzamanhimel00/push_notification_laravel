importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCFyM7v8jEKRIylsmQcukHJmY2Q5RLXy04",
    // authDomain: "push-notification-e69f9.firebaseapp.com",
    projectId: "push-notification-e69f9",
    // storageBucket: "push-notification-e69f9.appspot.com",
    messagingSenderId: "664342013082",
    appId: "1:664342013082:web:f05c0dd0bf7d0ceb572b23",
    // measurementId: "G-K0VW675YXQ"
});

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function({data:{title,body,icon}}) {
    return self.registration.showNotification(title,{body,icon});
});
