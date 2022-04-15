var StaticShareButtons = {
    // twitterButton: document.querySelector('.share-button#twitter'),
    facebookButton: document.querySelector('.share-button#facebook'),

    init: function () {
        // this.injectScript('https://urls.api.twitter.com/1/urls/count.json?url=' +
            // encodeURI(this.twitterButton.dataset.shareUrl) + '&callback=' + 'StaticShareButtons.processTwitter');

        this.injectScript('https://graph.facebook.com/?id=' +
            encodeURI(this.facebookButton.dataset.shareUrl) + '&callback=StaticShareButtons.processFacebook');
    },

    injectScript: function (url) {
        var script = document.createElement('script');
        script.async = true;
        script.src = url;
        document.body.appendChild(script);
    },

    // processTwitter: function (data) {
    //     if (data.count !==undefined) {
    //         this.twitterButton.querySelector('.shares').innerHTML = data.count;
    //     }
    // },

    processFacebook: function (data) {
        if (data.shares !==undefined) {
            this.facebookButton.querySelector('.shares').innerHTML = data.shares;
        }
    }
};

StaticShareButtons.init();