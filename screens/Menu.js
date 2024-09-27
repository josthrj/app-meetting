import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "react-native-paper";
import { StyleSheet } from "react-native";

import {ListaFornecedor} from "./ListaFornecedor";
import NovoFornecedor from "./NovoFornecedor";

const Tab = createMaterialBottomTabNavigator();

const Menu = () => {

    return(
        <Tab.Navigator
            tabBarActivateBackgroundColor = "#fff"
            activateColor = '#000'
            inactiveColor = '#95a5a6'
            barStyle={styles.navigationBar}

            >
                <Tab.Screen
                    name="Fornecedores"
                    component={ListaFornecedor}
                    options={{
                        tabBarLabel: "Fornecedores",
                        tabBarIcon: () => (
                            <MaterialCommunityIcons name="view-list" color="#000" size={24} />
                        )
                    }}
                >

                </Tab.Screen>
                
                <Tab.Screen
                    name="Novo Fornecedor"
                    component={NovoFornecedor}
                    options={{
                        tabBarLabel: "Novo Fornecedor",
                        tabBarIcon: () => (
                            <MaterialCommunityIcons name="checkbox-marked-circle-plus-outline" color="#000" size={24} />
                        )
                    }}
                >
                    
                </Tab.Screen>




            </Tab.Navigator>
    )

}


const styles = StyleSheet.create({
    navigationBar: {
        backgroundColor:"#fff"
    }
})


export default Menu;
