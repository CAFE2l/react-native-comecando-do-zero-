import { StyleSheet,Image,Dimensions, Text } from 'react-native';
import React from 'react';
import icon from '../../assets/adaptive-icon.png';

const width = Dimensions.get('screen').width;

export default function Cesta(){
    return <>
    <Image source={icon} style={estilos.icon}/>
    <Text style={estilos.title}>Detalhe da Cesta</Text>
    </>
}

const estilos = StyleSheet.create({
    icon: {
        width: "100vw",
        height: 578 / 768 * width,
    },

    title: {
        position: "absolute",
        textAlign: "center",
        width: "100%",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,
    },
});
