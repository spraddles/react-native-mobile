import { Platform } from 'react-native'
import * as AppleAuthentication from 'expo-apple-authentication'
import { supabase } from '@/supabase'

export const appleLogin = async () => {
	if (Platform.OS === 'ios') {
		try {
			const credential = await AppleAuthentication.signInAsync({
				requestedScopes: [
					AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
					AppleAuthentication.AppleAuthenticationScope.EMAIL
				]
			})
			console.log('credential: ', credential)
			if (credential.identityToken) {
				const {
					error,
					data: { user }
				} = await supabase.auth.signInWithIdToken({
					provider: 'apple',
					token: credential.identityToken
				})
				console.log(JSON.stringify({ error, user }, null, 2))
				if (!error) {
					// user signed in
					console.log('user sign in success!')
				}
			} else {
				throw new Error('No identityToken.')
			}
		} catch (error) {
			if (error.code === 'ERR_REQUEST_CANCELED') {
				// user canceled login flow
				console.log('error: ERR_REQUEST_CANCELED', error)
			} else {
				// other error
				console.log('error unknown:', error)
			}
		}
	}
}