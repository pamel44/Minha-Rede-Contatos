import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Fotos from '../img/fotos';

export default function CartaoUsuario({ nome, descricao, img }) {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const renderDescricao = () => {
        
        const contatoIndex = descricao.indexOf('Contato:');
        
        let infoPrincipal = descricao;
        let infoContato = '';

        if (contatoIndex !== -1) {
            infoPrincipal = descricao.substring(0, contatoIndex).trim();
            infoContato = descricao.substring(contatoIndex).trim();
        }

        if (isExpanded) {
    
            return (
                <View style={estilos.detalhesContainer}>
                    <Text style={estilos.descricaoCompleta}>{infoPrincipal}</Text>
                    <Text style={estilos.dadosContato}>{infoContato}</Text>
                </View>
            );
        } else {
            
            return (
                <Text style={estilos.descricaoCurta}>
                    {infoPrincipal.split('.')[0]}. Toque para ver contatos...
                </Text>
            );
        }
    };

    return (
        
        <TouchableOpacity 
            style={estilos.cartao} 
            onPress={toggleExpand}
            activeOpacity={0.8}
        >
            <View style={estilos.header}>
                <Image source={Fotos[img]} style={estilos.foto} />
                <Text style={estilos.nome}> {nome} </Text>
            </View>
            
            {renderDescricao()}

            <Text style={estilos.toggleText}>
                {isExpanded ? '▲ FECHAR DETALHES' : '▼ ABRIR DETALHES'}
            </Text>
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
    cartao: {
        backgroundColor: '#e1f7f7',
        padding: 16,
        marginHorizontal: 15, 
        marginTop: 15,
        borderRadius: 10,
        
        elevation: 5,
    },
    header: {
        alignItems: 'center', 
        marginBottom: 10,
    },
    foto: { 
        width: 80, 
        height: 80, 
        borderRadius: 40, 
        marginBottom: 10, 
    },
    nome: { 
        fontSize: 18, 
        fontWeight: 'bold' 
    },
    descricao: { 
        fontSize: 14, 
        color: '#555', 
        textAlign: 'center' 
    },

    descricaoCurta: {
        fontSize: 14,
        color: '#888',
        textAlign: 'center',
        paddingHorizontal: 10,
        marginBottom: 5,
        fontStyle: 'italic',
    },
    detalhesContainer: {
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccf2f2',
    },
    descricaoCompleta: {
        fontSize: 14,
        color: '#333',
        textAlign: 'left',
        marginBottom: 8,
        lineHeight: 20,
    },
    dadosContato: {
        fontSize: 13,
        color: '#0055aa',
        textAlign: 'left',
        fontWeight: '500',
    },
    toggleText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#007AFF',
        marginTop: 10,
        textAlign: 'center',
    }
});