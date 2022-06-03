const commonConfig = {
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
        "image": "./assets/splash.png",
        "resizeMode": "contain",
        "backgroundColor": "#ffffff"
    },
    "updates": {
        "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
        "**/*"
    ],


    "web": {
        "favicon": "./assets/favicon.png"
    }
};

const ios = {
    "supportsTablet": true
};

const android = {
    "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
    }
};
module.exports = () => {
    if (process.env.APP_ENV === "ios") {
        return {
            ...commonConfig,
            "name": "Expo React Native Template",
            "slug": "Expo-React-Native-Template",
            "version": "7.0.8",
            "ios": ios
        };
    } else if (process.env.APP_ENV === "android") {
        return {
            ...commonConfig,
            "name": "Expo React Native Template",
            "slug": "Expo-React-Native-Template",
            "version": "5.33",
            "android": android
        };
    } else if (process.env.APP_ENV === "expo") {
        return {
            ...commonConfig,
            "name": "Expo React Native Template",
            "slug": "Expo-React-Native-Template",
            "version": "1.0.0",
            "ios": ios,
            "android": android
        };
    }
};