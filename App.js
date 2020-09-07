import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList, Text } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    const addGoalHandler = goalTitle => {
        setCourseGoals(currentGoals => [
            ...currentGoals,
            { id: Math.random().toString(), value: goalTitle }
        ]);
        setIsAddMode(false);
    };

    const removeGoalHandler = goalId => {
        setCourseGoals(currentGoals => {
            return currentGoals.filter(goal => goal.id !== goalId);
        });
    };

    const handleCancel = () => {
        setIsAddMode(false);
    };


    return (
        <View style={styles.screen}>
            <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
            <GoalInput
                visible={isAddMode}
                onAddGoal={addGoalHandler}
                onCancel={handleCancel}
            />
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={courseGoals}
                renderItem={itemData => (
                    <GoalItem
                        id={itemData.item.id}
                        onDelete={removeGoalHandler}
                        title={itemData.item.value}
                    />
                )}
            />
            <Text style={{padding: 50}}>Click the goal to delete it :)</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50,
    }
});
