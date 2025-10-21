import React from 'react';
import Texto from './Texto';
import { Image } from 'react-native';

import { StyleSheet, Dimensions } from 'react-native';
import Texto from '../componentes/Texto';

const width = Dimensions.get('screen').width;

export default function Topo({ titulo }){
    return <>
    
        <image source={icon} style={estilos.icon}/>
        <Texto style={estilos.title}>{ titulo }</Texto>
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