import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import {Picker} from '@react-native-community/picker';
import {Feather} from '@expo/vector-icons';

function TeacherList() {

    function handleFilters() {
        setIsFiltersVisible(!isFiltersVisible);
    }
    const state = {
        week_day: 'Domingo',
    };
    const [isFiltersVisible,setIsFiltersVisible] = useState(false);
    return (
        <View style={styles.container}>
            <PageHeader 
                title="Proffys disponíveis" 
                headerRight={(
                    <BorderlessButton onPress={handleFilters}>
                        <Feather name="filter" size={20} color="#FFF" />
                    </BorderlessButton>
                )}>
                { isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Qual a matéria?" 
                            placeholderTextColor="#C1BCCC"
                        />
                        <View style={styles.inputGroup}>
                            {/*<Picker
                                selectedValue={this.state.week_day}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({week_day: itemValue})
                            }>
                                <Picker.Item label="Domingo" value="Domingo" />
                                <Picker.Item label="Segunda-feira" value="Segunda-feira" />
                                <Picker.Item label="Terça-feira" value="Terça-feira" />
                                <Picker.Item label="Quarta-feira" value="Quarta-feira" />
                                <Picker.Item label="Quinta-feira" value="Quinta-feira" />
                                <Picker.Item label="Sexta-feira" value="Sexta-feira" />
                                <Picker.Item label="Sábado" value="Sábado" />
                            </Picker>*/}
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput 
                                    style={styles.input}
                                    placeholder="Qual o dia?" 
                                    placeholderTextColor="#C1BCCC"
                                />
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput 
                                    style={styles.input}
                                    placeholder="Qual horário?" 
                                    placeholderTextColor="#C1BCCC"
                                />
                            </View>
                        </View>
                        <RectButton style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>
                                Filtrar
                            </Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    );
}

export default TeacherList;