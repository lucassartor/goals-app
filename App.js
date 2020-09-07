import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, Button, View, ScrollView, FlatList} from 'react-native';

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [goals, setGoals] = useState([]);

    function handleAddGoal(goalTitle) {
        setGoals(currentGoals => [
            ...currentGoals,
            {key: Math.random().toString(), value: goalTitle}
        ]);
    }

    function handleRemoveGoal(goalId) {
        setGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.id !== goalId);
        })
    }

    return (
        <View style={styles.screen}>
            <GoalInput onAddGoal={handleAddGoal}/>

            <FlatList
                keyExtractor={(item, index) => item.key}
                data={goals}
                renderItem={itemData => (
                    <GoalItem id={itemData.item.id} onDelete={handleRemoveGoal} title={itemData.item.value}/>
                )}
            />

            <StatusBar/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },


});

