
import React from 'react';
import { StyleSheet, View, Modal } from 'react-native';



export default function App({ children, visibility }) {
  return (
 <Modal
        animationType="slide"
        transparent={true}
        visible={visibility}
      >
        <View style={styles.center}>
          <View style={styles.modalviews}>
            {children}
          </View>
        </View>
      </Modal>

  );
}

const styles = StyleSheet.create({
    modalviews: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset:{
      width: 0,
      height : 3,
        },
    minWidth: 300,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    
  },  
});
