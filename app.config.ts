import { ExpoConfig, ConfigContext } from 'expo/config'
import dotenv from 'dotenv'

if (process.env.NODE_ENV === 'production') {
	dotenv.config({ path: '.env.production' })
}
if (process.env.NODE_ENV === 'development') {
	dotenv.config({ path: '.env.development' })
}

export default ({ config }: ConfigContext): ExpoConfig => ({
	...config,
	name: 'GlobalPay',
	slug: process.env.EXPO_PROJECT_SLUG,
	version: '1.0.0',
	orientation: 'portrait',
	icon: './assets/images/icon.png',
	scheme: 'myapp',
	userInterfaceStyle: 'automatic',
	newArchEnabled: true,
	ios: {
		usesAppleSignIn: true,
		supportsTablet: true,
		bundleIdentifier: 'com.anonymous.GlobalPay',
		infoPlist: {
			merchant_id: process.env.MERCHANT_ID
		},
		entitlements: {
			'com.apple.developer.payment-pass-provisioning': true
		},
		config: {
			googleSignIn: {
				reservedClientId: process.env.EXPO_PUBLIC_GOOGLE_OAUTH_CLIENT_ID_REVERSE
			}
		}
	},
	android: {
		adaptiveIcon: {
			foregroundImage: './assets/images/adaptive-icon.png',
			backgroundColor: '#ffffff'
		},
		package: 'com.anonymous.GlobalPay'
	},
	web: {
		bundler: 'metro',
		output: 'static',
		favicon: './assets/images/favicon.png'
	},
	plugins: [
		'expo-router',
		'expo-apple-authentication',
		'./node_modules/@rnw-community/react-native-payments/plugins/with-payments.js',
		[
			'expo-splash-screen',
			{
				backgroundColor: '#000000',
				image: './assets/images/logo-dark.png',
				dark: {
					image: './assets/images/logo.png',
					backgroundColor: '#000000'
				},
				imageWidth: 350
			}
		],
		[
			'@react-native-google-signin/google-signin',
			{
				iosUrlScheme: process.env.EXPO_PUBLIC_GOOGLE_OAUTH_CLIENT_ID_REVERSE
			}
		]
	],
	experiments: {
		typedRoutes: true
	},
	extra: {
		eas: {
			projectId: process.env.EXPO_PROJECT_ID
		}
	}
})
