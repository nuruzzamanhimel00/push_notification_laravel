importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyDY9muZHc5m1MiMoDh_mpeMW-ERw_APYYI",
    projectId: "himelproject-94766",
    messagingSenderId: "244786211553",
    appId: "1:244786211553:web:e4a15179a0280c8523a5a0",
});

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function({data:{title,body,icon}}) {
    return self.registration.showNotification(title,{body,icon});
});
