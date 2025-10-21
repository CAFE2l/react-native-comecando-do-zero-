
import Texto from '../../../componentes/Texto';
import React from 'react';
import { view } from 'react-native';
import {image} from 'react-native';
export default function Itens( title, lista){
    return <>
        <Texto>{title}</Texto>
        {lista.itens.map(({nome, imagem }) => {
            return <view>
            <Texto key={nome}>{ nome }</Texto>
            <image source={imagem} style={estilos.imagem}/>
            </view>
        })}
    </>;
}


const estilos = StyleSheet.create({
    imagem: {
        width: 57,
        height: 57,
    },
});