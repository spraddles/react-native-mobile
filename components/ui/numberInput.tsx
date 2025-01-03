import React from 'react'
import { View, TextInput, Text, StyleSheet, NumberInputProps } from 'react-native'

type InputProps = NumberInputProps & {
	label?: string
	value: string
	error?: boolean
	errorText?: string
	placeholder?: string
}

export function NumberInput({ label, value, error, errorText, placeholder, ...props }: InputProps) {
	return (
		<View style={[styles.container]}>
			{label && <Text style={styles.label}>{label}</Text>}
			<View style={styles.inputContainer}>
				<TextInput
					{...props}
					style={[styles.input, error && styles.inputError]}
					value={value}
					placeholder={!value ? placeholder : undefined}
					placeholderTextColor="#999"
				/>
				<Text style={styles.flag}>🇧🇷</Text>
			</View>
			{error && errorText && <Text style={styles.errorMessage}>{errorText}</Text>}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%'
	},
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		position: 'relative'
	},
	label: {
		fontSize: 13,
		marginBottom: 8,
		color: '#333'
	},
	input: {
		flex: 1,
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 8,
		padding: 20,
		fontSize: 30,
		backgroundColor: '#fff',
		letterSpacing: 3
	},
	errorMessage: {
		color: '#ff3333',
		fontSize: 14,
		marginTop: 4
	},
	flag: {
		position: 'absolute',
		right: 18,
		fontSize: 24
	}
})
