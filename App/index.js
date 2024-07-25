// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import Svg, { Circle } from 'react-native-svg';

const floorMapUri = 'https://picsum.photos/800/600'; // Replace this with your floor map image URL

const App = () => {
    const [marker, setMarker] = useState(null);

    const handleImagePress = (event) => {
        const { locationX, locationY } = event.nativeEvent;
        setMarker({ x: locationX, y: locationY });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Floor Map with Marker</Text>
            <View style={styles.imageContainer}>
                <ImageZoom
                    cropWidth={styles.imageContainer.width}
                    cropHeight={styles.imageContainer.height}
                    imageWidth={styles.imageContainer.width}
                    imageHeight={styles.imageContainer.height}
                    onClick={handleImagePress}
                >
                    <Image
                        style={styles.image}
                        source={{ uri: floorMapUri }}
                    />
                    {marker && (
                        <Svg
                            height="100%"
                            width="100%"
                            viewBox={`0 0 ${styles.imageContainer.width} ${styles.imageContainer.height}`}
                            style={styles.svg}
                        >
                            <Circle
                                cx={marker.x}
                                cy={marker.y}
                                r="10"
                                fill="red"
                            />
                        </Svg>
                    )}
                </ImageZoom>
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
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 10,
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '80%',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    svg: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});

export default App;