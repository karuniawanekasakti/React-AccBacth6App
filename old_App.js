import { Component, useState } from 'react';
import { Image, Text, TextInput, View, StyleSheet, TouchableOpacity, Button } from 'react-native';

//function dimulai dengan huruf besar => class
function App() {
  let numb = 1;
  //state
  //addNumber = menampilkan data yg disimpan di useState
  //setNumber = memberikan value ke state
  //hook => lifecylcle component
  //lifecylce component merender hanya 1 fungsi dari atas-bawah ketika state diubah
  const [addNumber, setNumber] = useState(0);
  const [addString, setString] = useState("");

  // ngirim dari child ke parent
  const [fromChild, setFromChild] = useState("")

  const penjumlahan = (nilai) => {
    if (nilai === "plus"){
      setNumber(addNumber +1);
      setString("Plus")
    }
    if (nilai === "minus"){
      setNumber(addNumber -1);
      setString("Minus")

    }
  }

  return (
    <View style={styles.container}>
      <Text style={{marginTop: 30, fontSize:50}} >Hello world {addNumber} / {fromChild} </Text>
      <TouchableOpacity  onPress={() => penjumlahan("plus")} style={{backgroundColor:"green", height:50, width:100}} >
        <Text style={{fontSize:20, textAlign:"center"}}>Ini Button +</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => penjumlahan("minus")} style={{backgroundColor:"blue", height:50, width:100}} >
        <Text style={{fontSize:20, textAlign:"center"}}>Ini Button -</Text>
      </TouchableOpacity>
      <AddImage/>

      {/* props => mengirimkan sebuah value ke childnya  */}
      {/* props => parent = App child = fungsi yang menggunakan props */}
      <InputText propNumber={addNumber} propsString={addString} sendProps={(val) => setFromChild(val)} />
      <TextClass/>
      
    </View>
  );
}

const AddImage = () => {
  return (
    <Image style={{width:200,height:200}} source={{uri: "https://placeimg.com/200/200/people"}} />
  )
}

//prop => ngirim data nilai dari parent ke child
//didalam js bisa langsung manggil nama props daripada props.propNumber
const InputText = ({propNumber, propsString, sendProps}) => {
  return (
    <View>
      <TextInput value={propsString}  style={{borderWidth:1}} />
      <Text style={{borderWidth:1, fontSize: 30}}>{propNumber} {propsString} </Text>
      <Button  onPress={() => sendProps("INI DARI CHILD")} title='SEND TO PARENT' />
    </View>
  );
}

class TextClass extends Component {
  render() {
    return(
      <View style={{marginTop:20,borderWidth:1, flex:1, flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
        <View style={{borderWidth:1, backgroundColor:"red", width:100 , height:100}}/>
        <View style={{borderWidth:1, backgroundColor:"blue", width:100 , height:100}}/>
        {/* <View style={{borderWidth:1, backgroundColor:"green",flex:1}}/> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor : '#ddd',
      alignContent: 'center',
      justifyContent: 'center',
      
  }
})

export default App;