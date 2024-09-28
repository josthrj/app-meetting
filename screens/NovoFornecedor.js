import {View,Text, Image, StyleSheet,TextInput, TouchableOpacity, ScrollView} from 'react-native'

const NovoFornecedor = () => {

    return(
       <ScrollView>
             <Text>Novo Fornecedor</Text>
             <View>
                <Text>Novo Fornecedor1</Text>
                <Image
                source={{
                    uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                }}
                style={{with: 200, height: 200}}
                />
             </View>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray', 
                    borderWidth: 1,
                }}
                defaultValue="Descriçao Fornecedor"
                />


       </ScrollView>
    );

};

export default NovoFornecedor