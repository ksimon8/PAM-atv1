import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, TouchableOpacity, } from 'react-native';


export default function NewImg() {


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topo}>
                <Image style={styles.Image} source={require('../assets/image/2.png')} />
            </View>

            <Text style={styles.texto}>IMAGEM</Text>

            <View style={styles.inputArea}>
                <Image style={styles.pequenos} source={require('../assets/image/adicionar-imagem.png')} color={'#fff'}/>
                <TextInput
                    style={styles.input}
                    placeholder="ADICIONE SUA IMAGEM..."
                    placeholderTextColor={'silver'}
                />
                <TouchableOpacity
                    style={styles.icon}
                    onPress={() => setHidePassword(!hidePassword)}
                >
                </TouchableOpacity>
            </View>

            <View style={styles.inputArea}>
        <TextInput style = {styles.multiline}
        placeholder="Observações..."
        placeholderTextColor={'#fff'}
        multiline={true}
        />
        </View>


            <TouchableOpacity>
                <Text style={styles.cadastroButton}>
                    ARMAZENAR
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    topo: {
        alignItems: 'center',
    },
    cadastro: {
        width: 350,
    },
    texto: {
        fontSize: 20,
        fontWeight: '800',
        color: '#fff',
        padding: 16,
        marginTop: 5,
    },
    input: {
        color: '#fff',
        backgroundColor: 'transparent',
        width: 350,
        height: 40,
        padding: 8,
        fontSize: 15,
    },
    inputArea: {
        borderColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        padding: 8,
        borderRadius: 14,
        borderBottomWidth: 1,
    },
    icon: {
        position: 'absolute',
        right: 15,
    },
    cadastroButton: {
        backgroundColor: 'lightblue',
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
        padding: 14,
        margin: 10,
        textAlign: 'center',
        borderRadius: 14,
    },
    Image: {
        width:250,
        height:250
    },
    pequenos:{
        width:30,
        height:30,
        
    },

    multiline:{
        minHeight:100,
        textAlignVertical:'top',
        color:'#fff'
    }



});