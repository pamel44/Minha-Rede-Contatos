import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Fotos from "../img/fotos";

export default function CartaoUsuario({ nome, foto, resumo, detalhes }) {

    const [expandido, setExpandido] = useState(false);

    return (
        <TouchableOpacity 
            style={estilos.cartao}
            activeOpacity={0.8}
            onPress={() => setExpandido(!expandido)}
        >
            {/* Foto + Nome */}
            <View style={estilos.header}>
                <Image source={Fotos[foto]} style={estilos.foto} />
                <Text style={estilos.nome}>{nome}</Text>
            </View>

            {/* Texto */}
            <Text style={expandido ? estilos.textoCompleto : estilos.textoResumo}>
                {expandido ? detalhes : resumo}
            </Text>

            {/* Botão de abrir/fechar */}
            <Text style={estilos.toggle}>
                {expandido ? "▲ Ver menos" : "▼ Ver mais"}
            </Text>

        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
    cartao: {
        backgroundColor: "#e1f7f7",
        padding: 16,
        marginHorizontal: 15,
        marginTop: 15,
        borderRadius: 10,
        elevation: 4,
    },
    header: {
        alignItems: "center",
        marginBottom: 10,
    },
    foto: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 8,
    },
    nome: {
        fontSize: 18,
        fontWeight: "bold",
    },
    textoResumo: {
        fontSize: 14,
        color: "#555",
        textAlign: "center",
        fontStyle: "italic",
    },
    textoCompleto: {
        fontSize: 14,
        color: "#333",
        textAlign: "center",
        lineHeight: 20,
    },
    toggle: {
        marginTop: 12,
        fontSize: 12,
        fontWeight: "bold",
        color: "#007AFF",
        textAlign: "center",
    }
});