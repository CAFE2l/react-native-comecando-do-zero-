import { StyleSheet, FlatList, Image } from 'react-native';
import React from 'react';
import Texto from '../../componentes/Texto';
import icon from '../../assets/adaptive-icon.png';
import logo from '../../assets/favicon.png';
import Topo from '../../componentes/Topo';
import Detalhes from '../../componentes/Detalhes';
import Itens from '../../componentes/Itens';
import Texto from '../../componentes/Texto';

export default function Cesta({ topo, detalhes, itens }) {
    // Define a dummy Item renderer if not imported
    const Item = ({ item }) => <Texto>{item.nome}</Texto>;

    return (
        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={() => (
                <>
                    <Topo {...topo} />
                   <view>
                    <Detalhes {...detalhes} />
                    <Texto style={estilos.title}>{itens.title}</Texto>
                   </view>
                </>
            )}
        />
    );
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    icon: {
        width: 40,
        height: 40,
        marginVertical: 8,
    },
});
