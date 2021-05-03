import React from 'react';
import Mapview, {Marker} from 'react-native-maps'
import { StyleSheet, Dimensions} from 'react-native';

export default ({onLongPress, points, pointsFilter}) => {
    return (
      <Mapview
        style={styles.map}
        onLongPress={onLongPress}
      >
        {pointsFilter && points.map(x => 
          <Marker coordinate={x.coordinate} title={x.name} key={x.name}/>
          )}
      </Mapview>
    )
}

const styles = StyleSheet.create({
      map: {
    height: Dimensions.get('window').height - 150,
    width: Dimensions.get('window').width,
  },
})