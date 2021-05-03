
import React, { useState } from 'react';
import { StyleSheet,  View, Text,  Button } from 'react-native';
import { Map, Modal, Panel, Input, List } from './components';

export default function App()  {

  const [points, setPoints] = useState([])
  const [name, setName] = useState('')
  const [tempPoint, setTempPoint] = useState({})
  const [visibility, setVisibility] = useState(false)
  const [visibilityFilter, setVisibilityFilter] = useState('newPoints')  //or listPoints
  const [pointsFilter, setPointsFilter] = useState(true)

  const tooglePointsFilter = () => setPointsFilter(!pointsFilter)

  const handleLongPress = ({ nativeEvent }) => {
    setVisibilityFilter('newPoints')
    setTempPoint(nativeEvent.coordinate)
    setVisibility(true)
  }

  const handleTextChange = text => {
    setName(text)
  }

  const handleSubmit = () => {
    const newPoint = { coordinate: tempPoint, name: name };
    setPoints(points.concat(newPoint))
    setVisibility(false)
    setName('')
    console.log(points)
  }

  const cancelSubmit = () => {
    setVisibility(false)
  }

  const handlelist = () => {
    setVisibilityFilter('listPoints')
    setVisibility(true)
  }

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} points={points} pointsFilter={pointsFilter}/>
      <Modal visibility={visibility}>
        {visibilityFilter === 'newPoints' ?
        <View style={styles.form}>
            <Input title={"Marker Name"} placeholder={"Add here point name"} onChangeText={handleTextChange} />
            <View style={{ marginTop: 10 }}><Button title="Save" onPress={handleSubmit} /></View>
            <View style={{ marginTop: 10 }}><Button title="Cancel" onPress={cancelSubmit} /></View>
        </View> : <List points={points} closeModal={() => setVisibility(false)} />
          
      }
      </Modal>
      <Text>Long press to add marker</Text>
      <Panel onPressLft={handlelist} textLft={'List of markers'} tooglePointsFilter={tooglePointsFilter}/>
    </View>
  );
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  form: {
    padding: 10,
  },
  button: {
    marginRight: 10,
  }
});
