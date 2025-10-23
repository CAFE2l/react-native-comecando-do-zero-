
import Texto from '../../../componentes/Texto';
import React from 'react';
import { view } from 'react-native';
import {image} from 'react-native';
export default function Itens( title, lista){
    return <>
        <Texto style={estilos.titulo}>{title}</Texto>
        {lista.itens.map(({nome, imagem }) => {
            return <view style={estilos.item}>
            <image source={imagem} style={estilos.imagem}/>
            <Texto key={nome} style={estilos.nome}>{ nome }</Texto>
          
            </view>
        })}
    </>;
}


const estilos = StyleSheet.create({
   title: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,

    },

    item:{
        flexDirection:"row",
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        paddingVertical: 16,
        alignItems: "center",
    },
    imagem:{
        width: 46,
        height: 46,
    },
    nome:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646",
    }
    }   
);