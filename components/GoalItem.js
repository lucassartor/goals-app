import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";

const GoalItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listGoals}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listGoals: {
        padding: 10,
        backgroundColor: 'gray',
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 10,
    },
});

export default GoalItem;