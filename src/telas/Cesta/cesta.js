import { StyleSheet, text, view } from 'react-native';
import React from 'react';
import Texto from '../../componentes/Texto';
import icon from '../../assets/adaptive-icon.png';
import logo from '../../assets/favicon.png';
import Topo from '../../componentes/Topo';
import Detalhes from '../../componentes/Detalhes';
import Itens from '../../componentes/Itens';
import Itens from '../Cesta/componentes/Itens';
import { scrollView } from 'react-native';


export default function Cesta({ topo, detalhes, itens}){
    return <scrollView>
    <Topo {...topo}/>

    <image source={icon} style={estilos.icon}/>
       <Detalhes {...detalhes} />   
       <Itens {...itens}/>
    </scrollView>
}

const estilos = StyleSheet.create({
   

    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});
