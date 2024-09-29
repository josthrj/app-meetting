import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { StyleSheet } from "react-native";
import React, { useState } from "react";
import ListaFornecedor from "./ListaFornecedor"; 
import NovoFornecedor from "./NovoFornecedor";

const Tab = createMaterialBottomTabNavigator();

const Menu = () => {
  // Mover el estado de los proveedores aquí
  const [fornecedores, setFornecedores] = useState([]);

  // Función para agregar nuevos proveedores
  const addFornecedor = (newFornecedor) => {
    setFornecedores([...fornecedores, newFornecedor]);
  };

  return (
    <Tab.Navigator
      tabBarActiveBackgroundColor="#fff"
      activeColor="#000"
      inactiveColor="#95a5a6"
      barStyle={styles.navigationBar}
    >
      <Tab.Screen
        name="Fornecedores"
        // Pasamos la lista de fornecedores a ListaFornecedor como prop
        children={() => <ListaFornecedor fornecedores={fornecedores} />}
        options={{
          tabBarLabel: "Lista de Fornecedores",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="view-list" color="#000" size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="Novo Fornecedor"
        // Pasamos la función para agregar fornecedores a NovoFornecedor como prop
        children={() => <NovoFornecedor addFornecedor={addFornecedor} />}
        options={{
          tabBarLabel: "Novo Fornecedor",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="checkbox-marked-circle-plus-outline"
              color="#000"
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: "#fff",
  },
});

export default Menu;
