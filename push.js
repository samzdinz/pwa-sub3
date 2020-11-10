var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BKohRip3Mc74hYEK3hc1zSRNZUNt6_TgKtKnBwV2Gkn8ftTu_zr2oKV2LNjjDW-OYnKhJITgLkv9i-SXoIiqNq0",
    "privateKey": "MHRKlkD5sPiZdkbKYObjA1JTmhcvseFqqb8at0OCwI4"
};


webPush.setVapidDetails(
    'mailto:samzdinz@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/fsrmgbe0ySE:APA91bGU9b9Va0KPRihHMpdRO-IL-U_bD8ZIbPzCY2Vr4NxmSVSnRkyZEUO7Ohri9MyzlDyQ0c-bBQBiL4EGu73HL6Foq93lLvPXMJoJr4UuVJjsqBd-pKN0VQ_bCKAQuU4xQzW8evoC",
    "keys": {
        "p256dh": "BHRfhzsZ31yfI4hj3dEsRDwUWY8GSYSZOS0eVxIU72QgtOo+xIO+Jgy1rK4XhMK9dZn1tISYYxkh8F+OiMwuK+s=",
        "auth": "FuMMoD7rNDZ0+cZfFR7B+Q=="
    }
};
var payload = 'Selamat! Aplikasi Liga Premier Anda sudah dapat menerima push notifikasi!';

var options = {
    gcmAPIKey: "378087532318",
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
).catch(function(err) {
    console.log(err);
});

console.log(pushSubscription);