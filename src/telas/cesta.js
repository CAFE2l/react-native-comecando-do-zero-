import { StyleSheet, image ,Dimensions, text, view } from 'react-native';
import React from 'react';
import icon from '../../assets/adaptive-icon.png';
import logo from '../../assets/favicon.png';

const width = Dimensions.get('screen').width;

export default function Cesta(){
    return <>
    <image source={icon} style={estilos.icon}/>
    <text style={estilos.title}>Detalhe da Cesta</text>

    <view style={estilos.cesta}>
        <text style={estilos.nome}>Cesta de Verduras</text>
        <view style={estilos.fazenda}>
            <image source={logo} style={{width:32, height:32, borderRadius:16}}/>
        <text style={estilos.nomeFazenda}>Jenny Jack Farm</text>
        </view>
        <text style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha</text>
        <text style={estilos.preco}>R$ 40,00</text>
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

    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold",
    },

    fazenda: {
        flexDirection: "row",
        paddingVertical: 26,
        marginLeft: 12,
        alignItems: "center",
    },

    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,

    },

    descricao:{
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },

    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
});
