
import Texto from '../../../componentes/Texto';
import React from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';

export default function Itens({ title, lista }){
    
    const renderItem = ({ item: { nome, imagem } }) => (
        <View style={estilos.item}>
            <Image source={imagem} style={estilos.imagem} />
            <Texto style={estilos.nome}>{ nome }</Texto>
        </View>
    );

    return <>
        <Texto style={estilos.titulo}>{title}</Texto>
        <FlatList 
        data={lista}
        renderItem={renderItem}
        keyExtractor={({nome}) => nome}
        />
    </>;
}


const estilos = StyleSheet.create({
  

    item:{
        flexDirection:"row",
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        paddingVertical: 16,
        marginHorizontal: 16,
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