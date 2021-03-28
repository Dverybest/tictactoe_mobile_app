import React, {useState, useEffect} from 'react';
import {
  Text,
  StatusBar,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Button from './components/Button';

export default function App() {
  const [lastEntered, setLastEntered] = useState('O');
  const [display, setDisplay] = useState("Player 1's turn");
  const [state, setState] = useState({
    button1: '',
    button2: '',
    button3: '',
    button4: '',
    button5: '',
    button6: '',
    button7: '',
    button8: '',
    button9: '',
  });

  const handlePress = (name) => {
    if (state[name] !== '') return;
    if(display.includes('won')||display.includes('Draw')) return;

    setState({
      ...state,
      [name]: lastEntered === 'O' ? 'X' : 'O',
    });
    setLastEntered(lastEntered === 'O' ? 'X' : 'O');
  };

  const checkWinner = (value) => {
    if (
     ( state.button1 === value &&
      state.button2 === value &&
      state.button3 === value
    ) ||(
      state.button4 === value &&
      state.button5 === value &&
      state.button6 === value
    ) ||(
      state.button7 === value &&
      state.button8 === value &&
      state.button9 === value
    ) || (
      state.button1 === value &&
      state.button4 === value &&
      state.button7 === value
    ) ||(
      state.button2 === value &&
      state.button5 === value &&
      state.button8 === value
    ) || (
      state.button3 === value &&
      state.button6 === value &&
      state.button9 === value
    ) ||(
      state.button1 === value &&
      state.button5 === value &&
      state.button9 === value
    ) || (
      state.button3 === value &&
      state.button5 === value &&
      state.button7 === value
    ) ){
      setDisplay(value==='X'?'Player 1 won':'Player 2 won');
      return true
    } 
    return false
    
  };
  const checkDraw =()=>{
    for (const key in state) {
      if (state[key]==='') return false
    }
    setDisplay('Draw');
    return true
  }

  const handleReset = () => {
    setState({
      button1: '',
      button2: '',
      button3: '',
      button4: '',
      button5: '',
      button6: '',
      button7: '',
      button8: '',
      button9: '',
    });
    setDisplay("Player 1's turn");
    setLastEntered('O');
  };

  useEffect(() => {
    if(checkWinner('X'))return;
    if(checkWinner('O'))return;
    if (checkDraw()) return;
    setDisplay(lastEntered === 'X' ? "Player 2's turn" : "Player 1's turn");
  }, [state]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#052727" />
      <SafeAreaView style={{flex:1,padding:20}}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Tic-Tac-Toe Game</Text>
          </View>
          <View style={styles.displayContainer}>
            <Text style={styles.display}>{display}</Text>
          </View>
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <View style={styles.btnContainer}>
            <Button
              value={state.button1}
              onPress={() => handlePress('button1')}
            />
            <Button
              value={state.button2}
              onPress={() => handlePress('button2')}
            />
            <Button
              value={state.button3}
              onPress={() => handlePress('button3')}
            />
          </View>
          <View style={styles.btnContainer}>
            <Button
              value={state.button4}
              onPress={() => handlePress('button4')}
            />
            <Button
              value={state.button5}
              onPress={() => handlePress('button5')}
            />
            <Button
              value={state.button6}
              onPress={() => handlePress('button6')}
            />
          </View>
          <View style={styles.btnContainer}>
            <Button
              value={state.button7}
              onPress={() => handlePress('button7')}
            />
            <Button
              value={state.button8}
              onPress={() => handlePress('button8')}
            />
            <Button
              value={state.button9}
              onPress={() => handlePress('button9')}
            />
          </View>

        </View>
          <TouchableOpacity onPress={handleReset} style={styles.resetContainer}>
            <Text style={{fontWeight:"bold"}}>Reset</Text>
          </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f4f4f',
  },
  titleContainer: {
    backgroundColor: 'black',
    padding: 10,
    marginVertical: 20,

  },
  title: {
    color: '#eee888',
    textAlign: 'center',
    fontSize: 35,
    fontWeight:'bold'
  },
  displayContainer: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 15,
    marginBottom: 20,
    borderRadius:4,
    marginTop:30
  },
  display: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  btnContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetContainer: {
    backgroundColor: 'white',
    height:50,
    borderRadius:4,
    margin: 20,
    justifyContent:'center',
    alignItems: 'center',
  },
});
