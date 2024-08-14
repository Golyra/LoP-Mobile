import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';

const semesters = [
    {
        id: 1,
        periodo: '2022.1',
        materias: [
            'Pré-Cálculo',
            'Vetores e Geometria analítica',
            'Prática de leitura e escrita',
            'Ciência, Tecnologia e Sociedade',
            'Introdução à física clássica I',
            'Introdução à ciência e tecnologia'
        ]
    },
    {
        id: 2,
        periodo: '2022.2',
        materias: [
            'Cálculo I',
            'Vetores e Geometria Analítica',
            'Prática de leitura em inglês',
            'Ciência, tecnologia e sociedade II',
            'Prática de leitura e escrita II',
            'Modelagem do mundo físico I'
        ]
    },
    {
        id: 3,
        periodo: '2023.1',
        materias: [
            'Cálculo II',
            'Álgebra Linear',
            'Modelagem do mundo físico II',
            'Introdução à física clássica II',
            'Lógica de programação'
        ]
    },
    {
        id: 4,
        periodo: '2023.2',
        materias: [
            'Cálculo III',
            'Álgebra Linear',
            'Introdução à física clássica III',
            'Linguagem de programação'
        ]
    },
    {
        id: 5,
        periodo: '2024.1',
        materias: [
            'Desenvolvimento Web Frontend',
            'Desenvolvimento Mobile',
            'Ciência de dados',
            'Ética na Ciência e tecnologia',
            'Internet das coisas',
            'Redes de computadores',
            'Introdução à mecânica: estática'
        ]
    }
]

export const HistoryScreen = ({navigation}) => {
    return(
        <>
            
            <SafeAreaView style={styles.root}>
                <View style={styles.background}>
                    {semesters.map( (semester) => (
                            <TouchableOpacity key={semester.id} style={styles.semesterCard}>
                                <FontAwesome5 name='chevron-right' color='#989797' size={16} />
                                <Text style={styles.semesterCardHeader}>
                                    {semester.periodo}
                                </Text>
                            </TouchableOpacity>
                    ))}
                </View>            
            </SafeAreaView>            
        </>
    )
}


const styles = StyleSheet.create({

    root: {
        flex: 1,
        backgroundColor: '#f0f0f0',
      },

    background: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    semesterCard: {
        backgroundColor: 'white',
        borderRadius: 3,
        flexDirection: 'row',
        marginTop: 15,
        width: '95%',
        height: 'auto',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 18,
    },

semesterCardHeader: {
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'notoserif',
        color: 'rgb(100, 100, 100)',
        marginTop: 2,
        marginBottom: 2, 
        marginLeft: 10
    },
})