// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, FlatList, View } from 'react-native';

const App = () => {
    const [workoutName, setWorkoutName] = useState('');
    const [workoutList, setWorkoutList] = useState([]);

    const addWorkout = () => {
        if (workoutName.trim() !== '') {
            setWorkoutList([...workoutList, { id: Date.now().toString(), name: workoutName }]);
            setWorkoutName('');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Workout Tracker</Text>
            
            <TextInput 
                style={styles.input} 
                placeholder="Enter workout name" 
                value={workoutName} 
                onChangeText={setWorkoutName} 
            />
            
            <Button title="Add Workout" onPress={addWorkout} />
            
            <FlatList 
                data={workoutList} 
                keyExtractor={(item) => item.id} 
                renderItem={({ item }) => (
                    <View style={styles.workoutItem}>
                        <Text style={styles.workoutItemText}>{item.name}</Text>
                    </View>
                )}
                contentContainerStyle={styles.list}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
        paddingTop: 40, // Margin from the top to avoid overlapping with the status bar
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    list: {
        marginTop: 20,
    },
    workoutItem: {
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    workoutItemText: {
        fontSize: 18,
    },
});

export default App;