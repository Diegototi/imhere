import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'

import { Participant } from '../../components/Participant'

import { styles } from './styles'


export function Home() {
const [participants, setParticipants] = useState<string[]>([]) //tipagem pq passa um array vazio
const [participantName, setParticipantName] = useState('') //aqui ja entende que é array de string
  //participants = lugar para acessar conteudo atual do estado
  //setParticipants = fnção para atualizar o estado
  // const participants =['Diego'] Não atualiza dessa forma pq o estado 
  //não é uma variavel comum

  function hanleParticipantAdd(){
    if (participants.includes(participantName)){
      return Alert.alert('Participante já existe!','Já existe um participante com esse nome!' )
    }
    
    setParticipants(preveState => [...preveState,participantName]) 
    setParticipantName('') // limpa estado para conteudo vazio
    //função setParticipants para adicionar, precisa recuperar o que tinha antes dentro do estado
    //para adicionar, então usa a arrow function "preveState" e forma desestruturada (...) + 'Ana'  

   // participants.push('Ana') // não atualiza dessa forma um estado
    
  }

  function hanleParticipantRemove(name: string) {
    Alert.alert('Remover', `Remover o particioante ${name}?`,[
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
        //função filter percorre o estado(que é um array) e filtra todos menos o participant 'name'
        //para atualizar o estado usa a função setParticipants acessando com prevState o estao atual e atualiza com o filter  
        
      },
      {
        text: 'Não',
        style: 'cancel'
      }
     

    ])
    console.log(`Você clicou em remover o participante ${name}`)
  }

  return (
<View style={styles.container}>    
  <Text style={styles.eventName}>
    Nome do Evento
 </Text>  
 
 <Text style={styles.eventeDate} >
  O evento será as 12:00 horas.
  </Text>
  <View style={styles.form}> 
    <TextInput
      style={styles.input} 
      placeholder='Digite seu nome' // frase que fica no campo
      placeholderTextColor={'#6B6B6B'}
      onChangeText={setParticipantName} // ou onChangeText= {text => setParticiantname(text)}
                                       //função "onChangeText" recebe todo texto digitado 
      value={participantName}
    
     // keyboardType='numeric' tipo do teclado
    
    />
    <TouchableOpacity style={styles.button} onPress={hanleParticipantAdd}>
      <Text style={styles.buttonText}>
        +
      </Text>
        </TouchableOpacity>
     </View>

    <FlatList
      data={participants} // nao precisa de map, nao precisa percorrer a lista
      keyExtractor= {item => item} 
      renderItem={({ item }) => ( // p que quero renderezar de cada item
        <Participant
            key={item}
            name={item} onRemove={() => hanleParticipantRemove(item)}
         />

        )}
      showsVerticalScrollIndicator={false} 
      ListEmptyComponent={() =>(
        <Text style={styles.listEmptyText}>
          Ninguem chegou ao evento ainda. Adicione particioantes na lista de presença.
        </Text>

      )}   
    />
  </View>

  )
}