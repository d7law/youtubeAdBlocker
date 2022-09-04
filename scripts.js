setInterval(function () {
    var skipButton = document.getElementsByClassName('ytp-ad-skip-button');
    if (skipButton != undefined && skipButton.length > 0) {
        console.log(
            '%cd7Law.caonhan created!Lov3u!',
            'color: #fff;' +
                'font-size: 18px;' +
                'font-weight: bold;' +
                'text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 0 0 82px #0fa,0 0 92px #0fa,0 0 102px #0fa,0 0 151px #0fa; ' +
                'filter: dropshadow(color=rgb(249, 162, 34), offx=1, offy=1);',
        );
        skipButton[0].click();
    }
}, 4000);
