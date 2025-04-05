// Lap6B2.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image } from 'react-native';
import { useLazyGetPokemonByNameQuery } from './pokemonAPI';

const Lap6B2 = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [trigger, result] = useLazyGetPokemonByNameQuery();

  const handleSearch = () => {
    if (pokemonName) {
      trigger(pokemonName.toLowerCase());
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thông tin pokemon {pokemonName}</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập tên pokemon"
        value={pokemonName}
        onChangeText={setPokemonName}
      />
      <Button title="Tìm kiếm pokemon" onPress={handleSearch} color="#f9a825" />
      <View style={styles.result}>
        {result.isLoading && <Text>Đang tải...</Text>}
        {result.error && <Text style={{ color: 'red' }}>Lỗi! Không tìm thấy pokemon.</Text>}
        {result.data && (
          <View>
            <Text style={{ fontWeight: 'bold' }}>Danh sách abilities:</Text>
            {result.data.abilities.map((item, index) => (
              <Text key={index}>• {item.ability.name}</Text>
            ))}
            <Image
              source={{ uri: result.data.sprites.front_default }}
              style={{ width: 100, height: 100, marginTop: 10 }}
            />
          </View>
        )}

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, marginTop: 40 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 8,
    marginBottom: 12,
  },
  result: { marginTop: 20 },
});

export default Lap6B2;
