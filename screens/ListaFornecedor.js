import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const ListaFornecedores = ({ fornecedores }) => {
  const { fornecedores } = route.params; // Recibe la lista de proveedores desde la navegación

  return (
    <View style={styles.listaContainer}>
      <Text style={styles.listaTitle}>Lista de Fornecedores</Text>
      <FlatList
        data={fornecedores} // Se corrige el nombre de la prop
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.listaItem}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listaContainer: {
    marginTop: 20,
    padding: 20,
  },
  listaTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  listaItem: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
});

export default ListaFornecedores;
