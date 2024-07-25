// Filename: index.js
// Combined code from all files
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, Alert, View } from 'react-native';

const App = () => {
    const handlePress = () => {
        Alert.alert("Alert", "You clicked the box!");
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.boxContainer}>
                <TouchableOpacity style={styles.box} onPress={handlePress}>
                    <Text style={styles.boxText}>Click Me</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 20, // Margin from the top to avoid overlapping with the status bar
    },
    boxContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        backgroundColor: 'red',
        paddingVertical: 20,
        paddingHorizontal: 40,
        borderRadius: 10,
    },
    boxText: {
        color: '#FFFFFF',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default App;