importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCFyM7v8jEKRIylsmQcukHJmY2Q5RLXy04",
    projectId: "push-notification-e69f9",
    messagingSenderId: "664342013082",
    appId: "1:664342013082:web:f05c0dd0bf7d0ceb572b23",
});

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function({data:{title,body,icon}}) {
    return self.registration.showNotification(title,{body,icon});
});