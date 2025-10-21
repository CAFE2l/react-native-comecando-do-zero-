import { StyleSheet,Image,Dimensions, text, view } from 'react-native';
import React from 'react';
import icon from '../../assets/adaptive-icon.png';

const width = Dimensions.get('screen').width;

export default function Cesta(){
    return <>
    <Image source={icon} style={estilos.icon}/>
    <text style={estilos.title}>Detalhe da Cesta</text>

    <view>
        <text>Cesta de Verduras</text>
        <text>Jenny Jack Farm</text>
        <text>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha</text>
    </view>
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
