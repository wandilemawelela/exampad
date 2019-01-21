
var admobid = {};

if( /(android)/i.test(navigator.userAgent) ) {
	admobid = { // for android
		banner: 'ca-app-pub-4290415482976059/5673721723',
		rewardvideo: 'ca-app-pub-xxx/xxx',
	};
} else if(/(ipod|iphone|)/i.test(navigator.userAgent)) {
	admobid = { // for iOS
		banner: 'ca-app-pub-4290415482976059/5673721723',
		rewardvideo: 'ca-app-pub-xxx/xxx',
    };
} else {
	admobid = { // for android
		banner: 'ca-app-pub-4290415482976059/5673721723',
		rewardvideo: '',
    };
}

function initApp() {
	if (! AdMob ) {
		alert( 'admob plugin not ready'); return;
	}

	// this will create a banner on startup
	AdMob.createBanner( {
		adId: admobid.banner,
		position: AdMob.AD_POSITION.BOTTOM_CENTER,
		overlap: false,
		offsetTopBar: false,
		bgColor: 'black'
	} );
}

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
	document.addEventListener('deviceready', initApp, false);
}else {
	initApp();
}