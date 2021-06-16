document.addEventListener('contextmenu', event => event.preventDefault());

if (!window.Notification) {
    console.log('Browser does not support notifications.');
} else {
    console.log('Browser support notifications.');
}

if (!window.Notification) {
    console.log('Browser does not support notifications.');
} else {
    if (Notification.permission === 'granted') {
    } else {
        Notification.requestPermission().then(function (p) {
            if (p === 'granted') {
            } else {
                console.log('User blocked notifications.');
            }
        }).catch(function (err) {
            console.error(err);
        });
    }
}

var notify = new Notification('Hi there!');

var notify = new Notification('Hi there!', {
    body: 'How are you doing?',
    icon: 'https://bit.ly/2DYqRrh',
});

function notifyMe() {
    if (!window.Notification) {
        console.log('Browser does not support notifications.');
    } else {
        if (Notification.permission === 'granted') {
            var notify = new Notification('Hi there!', {
                body: 'How are you doing?',
                icon: 'https://bit.ly/2DYqRrh',
            });
        } else {
            Notification.requestPermission().then(function (p) {
                if (p === 'granted') {
                    var notify = new Notification('Hi there!', {
                        body: 'How are you doing?',
                        icon: 'https://bit.ly/2DYqRrh',
                    });
                } else {
                    console.log('User blocked notifications.');
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }
}
