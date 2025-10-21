import React from 'react';
import { text } from 'react-native';

export default function Texto({children, style}) {
    let estilo = estilos.Texto;
    if(style?.fotnWeight == "bold"){
        estilo = estilos.textoNegrito;
    }
    return <text style={[style, estilo]}>{children}</text>
}

const estilos = StyleSheet.create({
    Texto: {
        fontFamily: "MontserratRegular",
        fotnWeight: "normal",
    },

    textoNegrito: {
        fontFamily: "MontserratBold",
        fotnWeight: "normal",
    }
});