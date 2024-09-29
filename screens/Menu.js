import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { StyleSheet } from "react-native";

import ListaFornecedor from "./ListaFornecedor"; // Corrige la importación si es necesario
import NovoFornecedor from "./NovoFornecedor";

const Tab = createMaterialBottomTabNavigator();

const Menu = () => {
  return (
    <Tab.Navigator
      tabBarActiveBackgroundColor="#fff" // Corregido
      activeColor="#000" // Corregido
      inactiveColor="#95a5a6"
      barStyle={styles.navigationBar}
    >
      <Tab.Screen
        name="Fornecedores"
        component={ListaFornecedor}
        options={{
          tabBarLabel: "Lista de Fornecedores",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="view-list" color="#000" size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="Novo Fornecedor"
        component={NovoFornecedor}
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
