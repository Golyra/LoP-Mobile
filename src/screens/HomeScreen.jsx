import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from "react-native"
import React from 'react';

const turmas = [
    {
      id: 1,
      disciplina: 'LÓGICA DA PROGRAMAÇÃO',
      docente: 'Aquilles Burlamar',
      horario: '24M56',
      periodo: '(26/02/2024 - 06/07/2024)',
      local: 'LABINFO 1'
    },
    {
      id: 2,
      disciplina: 'CIÊNCIA DE DADOS',
      docente: 'Francisco José Targino',
      horario: '6M3456',
      periodo: '(26/02/2024 - 06/07/2024)',
      local: 'LABINFO 1'
    },
    {
      id: 3,
      disciplina: 'DESENVOLVIMENTO MOBILE',
      docente: 'Igor Rosenberg',
      horario: '35T34',
      periodo: '(26/02/2024 - 06/07/2024)',
      local: 'LABINFO 1'
    },
    {
        id: 4,
        disciplina: 'DESENVOLVIMENTO WEB FRONTEND',
        docente: 'Diego Rodrigo Cabral Silva',
        horario: '24M34',
        periodo: '(26/02/2024 - 06/07/2024)',
        local: 'LABINFO 1'
    }
  ]

export const HomeScreen = ( {navigation} ) => {
    return(
        <>
            <SafeAreaView style={styles.root}>
                <View style={styles.background}>
                    {turmas.map( (turma) => (
                    <TouchableOpacity key={turma.id} style={styles.card}>
                        <Text style={styles.cardSubheader}>
                            Horário: {turma.horario} {turmas.periodo}
                        </Text>
                        <Text style={styles.cardHeader}>
                            {turma.disciplina}
                        </Text>
                        <Text style={styles.cardSubheader}>
                            Local: {turma.local}
                        </Text>
                    </TouchableOpacity>                
                    ))}
                </View>
            </SafeAreaView>            
        </>
    )
}

const styles = StyleSheet.create({

    background: {
        alignItems: 'center'
    },

    card: {
        backgroundColor: 'white',
        borderRadius: 3,
        marginTop: 15,
        width: '95%',
        height: 'auto',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'flex-start',
        padding: 10,
    },

    cardHeader: {
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'sans-serif-medium',
        color: 'rgb(100, 100, 100)',
        marginTop: 2,
        marginBottom: 2 
    },

    cardSubheader: {
        fontFamily: 'sans-serif-light',
        color: 'grey'
    },

    root: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },

    headerShadow: {
        height: 70,
        backgroundColor: '#BECDEB',
        width: '100%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        position: 'static',
        marginBottom: 10
    },
})