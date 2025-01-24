import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { router } from 'expo-router'

import { View } from '@/components/Themed'
import { Button } from '@/components/ui/button'

export default function SuccessPage() {

	const login = async () => {
		router.push({
			pathname: '/(pages)/loginSignup',
			params: {
				loginType: 'login'
			}
		})
	}

	const signUp = async () => {
		router.push({
			pathname: '/(pages)/loginSignup',
			params: {
				loginType: 'signup'
			}
		})
	}

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Image style={styles.image} source={require('../../assets/images/logo.png')} />
			</View>
			<View style={styles.footer}>
				<Button text="Sign up" fill={true} onPress={async () => await signUp()} />
				<Button text="Login" fill={false} onPress={async () => await login()} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 50,
		paddingTop: 100
	},
	content: {
		flex: 1,
		alignItems: 'center'
	},
	image: {
		marginTop: 150,
		width: '100%',
		height: 120,
		resizeMode: 'contain'
	},
	footer: {
		width: '100%',
		paddingBottom: 10
	}
})
