import React from 'react';
import { StyleSheet, Button, View} from 'react-native';

export default ({onPressLft , textLft, tooglePointsFilter}) => {
    return (
        <View style={styles.Panel}>
            <View style={{marginRight: 15}}><Button title={textLft}  onPress={onPressLft}/></View>
            <Button title="Show / Hide Markers" onPress={tooglePointsFilter}/>
        </View>
    )
}

const styles = StyleSheet.create({
    Panel: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})