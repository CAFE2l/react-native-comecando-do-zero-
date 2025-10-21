import React from 'react';
import Texto from './Texto';
import { Image } from 'react-native';
import icon from '../../assets/adaptive-icon.png';
import { StyleSheet, Dimensions } from 'react-native';
import Texto from '../componentes/Texto';

const width = Dimensions.get('screen').width;

export default function Topo(){
    return <>
    
        <image source={icon} style={estilos.icon}/>
        <Texto style={estilos.title}>Detalhe da Cesta</Texto>
    </>
}

const estilos = StyleSheet.create({
     icon: {
        width: "100vw",
        height: 578 / 768 * width,
        fontFamily: "Monteserrat",
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