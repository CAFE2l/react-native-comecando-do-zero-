import { StyleSheet, text, view } from 'react-native';
import React from 'react';
import Texto from '../../componentes/Texto';
import icon from '../../assets/adaptive-icon.png';
import logo from '../../assets/favicon.png';
import Topo from '../../componentes/Topo';
import Detalhes from '../../componentes/Detalhes';


export default function Cesta({ topo, detalhes}){
    return <>
    <Topo {...topo}/>

    <image source={icon} style={estilos.icon}/>
       <Detalhes {...detalhes} />
    </>
}

const estilos = StyleSheet.create({
   

    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});
