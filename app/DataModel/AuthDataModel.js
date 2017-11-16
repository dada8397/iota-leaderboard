import {AsyncStorage} from "react-native";

export const USER_SEED = "auth-demo-seed";

export const onSignIn = () => AsyncStorage.setItem(USER_SEED, "true");

export const onSignOut = () => AsyncStorage.removeItem(USER_SEED);

export const isSignedIn = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(USER_SEED)
            .then(res => {
                if (res !== null) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
            .catch(err => reject(err));
    });
};