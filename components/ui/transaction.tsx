import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type TransactionProps = {
	amount: number
	created_at: string
	pix_method: string
	pix_method_value: string
	receiver: string
}

export function Transaction({
	amount,
	created_at,
	pix_method,
	pix_method_value,
	receiver
}: TransactionProps) {
	const date = new Date(created_at).toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'short',
		year: 'numeric'
	})
	const time = new Date(created_at).toLocaleTimeString()

	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<Text style={styles.receiver}>{receiver}</Text>
				<Text style={styles.amount}>R$ {Number(amount).toFixed(2)}</Text>
			</View>

			<View style={styles.pixInfo}>
				<Text style={styles.method}>{pix_method.toUpperCase()}:</Text>
				<Text style={styles.value}>{pix_method_value}</Text>
			</View>

			<Text style={styles.date}>{date}</Text>
			<Text style={styles.time}>{time}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 15,
		backgroundColor: '#fff',
		borderRadius: 8,
		marginBottom: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.1,
		shadowRadius: 2
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 5
	},
	amount: {
		fontSize: 18
	},
	date: {
		color: '#666'
	},
	receiver: {
		fontSize: 16,
		marginBottom: 5
	},
	pixInfo: {
		flexDirection: 'row',
		gap: 10
	},
	method: {
		color: '#666'
	},
	value: {
		color: '#666'
	},
	time: {
		color: '#999',
		fontSize: 12,
		marginTop: 5
	}
})
