// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView, Alert, TouchableOpacity } from 'react-native';

const CustomButton = ({ title, onPress, style, textStyle }) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const App = () => {
    const [exerciseName, setExerciseName] = useState('');
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');
    const [workouts, setWorkouts] = useState([]);

    const handleAddWorkout = () => {
        if (exerciseName && sets && reps) {
            const newWorkout = {
                id: Math.random().toString(),
                exerciseName,
                sets,
                reps,
            };
            setWorkouts([...workouts, newWorkout]);
            setExerciseName('');
            setSets('');
            setReps('');
        } else {
            Alert.alert("Error", "Please fill all fields.");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={styles.title}>Workout Tracker</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Exercise Name"
                        value={exerciseName}
                        onChangeText={setExerciseName}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Sets"
                        value={sets}
                        onChangeText={setSets}
                        style={styles.input}
                        keyboardType="numeric"
                    />
                    <TextInput
                        placeholder="Reps"
                        value={reps}
                        onChangeText={setReps}
                        style={styles.input}
                        keyboardType="numeric"
                    />
                </View>
                <CustomButton title="Add Workout" onPress={handleAddWorkout} />
                <Text style={styles.listTitle}>Workout List</Text>
                {workouts.map((workout) => (
                    <View key={workout.id} style={styles.workoutItem}>
                        <Text style={styles.workoutText}>{workout.exerciseName}</Text>
                        <Text style={styles.workoutText}>Sets: {workout.sets}</Text>
                        <Text style={styles.workoutText}>Reps: {workout.reps}</Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        paddingTop: 20,
    },
    scrollView: {
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#ffffff',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        width: '100%',
        borderColor: '#ddd',
        borderWidth: 1,
    },
    listTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 20,
    },
    workoutItem: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 5,
        width: '100%',
        marginBottom: 10,
        borderColor: '#ddd',
        borderWidth: 1,
        alignItems: 'center',
    },
    workoutText: {
        fontSize: 16,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
    },
});

export default App;