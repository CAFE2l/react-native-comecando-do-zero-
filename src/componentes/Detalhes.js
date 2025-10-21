import React from 'react';
import { View, Image} from 'react-native';
import Texto from './Texto';
import logo from '../../assets/favicon.png';
import { StyleSheet } from 'react-native';

export default function Detalhes({ nome, logoFazenda, fazenda, descricao, preco }){
    return <>
        <Texto style={estilos.title}>{ nome}</Texto>
        
            <view style={estilos.cesta}>
                <texto style={estilos.nome}> </texto>
                <view style={estilos.fazenda}>
                    <image source={logoFazenda} style={{width:32, height:32, borderRadius:16}}/>
                <texto style={estilos.nomeFazenda}>{ fazenda}</texto>
                </view>
                <Texto style={estilos.descricao}>{ descricao}</Texto>
                <texto style={estilos.preco}> {preco}</texto>
            </view>
    </>
}

const  estilos = StyleSheet.create({
    

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
        fontFamily: "MontserratRegular",
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
})