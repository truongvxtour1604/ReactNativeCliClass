import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useAppDispatch, useAppSelector } from './hooks'
import { increment, decrement, multiply, RESET_COUNTER } from './counterSlice'

const Lap6B1 = () => {
  const count = useAppSelector((state) => {
    console.log('Redux State:', state)
    return state.counter?.value ?? 0
  })

  const dispatch = useAppDispatch()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Giá trị biến đếm: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Tăng +1" onPress={() => dispatch(increment(1))} />
        <Button title="Giảm -1" onPress={() => dispatch(decrement(1))} />
        <Button title="Nhân x2" onPress={() => dispatch(multiply(2))} />
        <Button title="Reset" onPress={() => dispatch(RESET_COUNTER)} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, marginBottom: 20 },
  buttonContainer: { gap: 10 }
})

export default Lap6B1
