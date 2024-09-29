import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image, ScrollView } from "react-native";

function NovoFornecedor({ addFornecedor }) { // Recibe la función addFornecedor
  const [newFornecedor, setNewFornecedor] = useState("");

  // Función para agregar un nuevo fornecedor a la lista
  const handleAddFornecedor = () => {
    if (newFornecedor.trim() !== "") {
      addFornecedor(newFornecedor); // Usa la función pasada por props
      setNewFornecedor("");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Novo Fornecedor</Text>
      </View>

      <View style={styles.form}>
        <View>
          <Image
            source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png" }}
            style={{ width: 200, height: 200 }}
          />
        </View>

        <TextInput
          style={styles.inputGroup}
          placeholder="Ingrese un proveedor"
          value={newFornecedor}
          onChangeText={setNewFornecedor}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddFornecedor}>
          <Text style={styles.textButton}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
  },
  form: {
    padding: 40,
  },
  inputGroup: {
    padding: 10,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 5,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#1f232b",
    padding: 12,
    marginTop: 0,
    borderRadius: 5,
    width: "100%",
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
  },
});

export default NovoFornecedor;
