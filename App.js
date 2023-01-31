import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import ProductList from './src/screens/ProductList';
export default function App() {
  const [conutState, setCountState] = useState(0);
  const [conutState2, setCountState2] = useState(0);
  const [isShow,setShow] = useState(true);

  let conut = 0;
  const tangCount = () => conut++;
  console.log(conutState);

  let name='Cao Hoàng Xuân Anh';
  let MSV='PH24786';

  function showName(label,value){
    return label+' : '+value;
  }
  function showMSV(label,value){
    return label+' : '+value;
  }



  const [TenSV, setTenSV] = useState('');
  const [Desc, setDesc] = useState('');
  const [LinkImg, setLinkImg] = useState('');

  const productList = [
    { id: 1, name: 'Anh', description: 'Bình thường', src: require('./assets/xanh.png') },
    { id: 2, name: 'Phú', description: 'Bình thường', src: require('./assets/do.png') },
    { id: 3, name: 'Tiền', description: 'Bình thường', src: require('./assets/vit.png') },
  ] 

  return (
    <ScrollView>
    <View style={styles.container}>
    <Text style={styles.text}>{showName('Họ tên',name)}</Text>
    <Text style={styles.text}>{showMSV('MSV',MSV)}</Text>
    <Button
    title={'Thêm'}
    onPress={()=>setShow(!isShow)}
    />
    {
      isShow
      ?
      <>
      <TextInput style={{border: 1, }}
        onChangeText={(txt) =>setTenSV(txt)}
        value={TenSV}
        placeholder="Nhập tên"
      />
      <TextInput style={{border: 1, }}
        onChangeText={(txt) =>setDesc(txt)}
        value={Desc}
        placeholder="Mô tả"
      />
      <TextInput style={{border: 1, }}
        onChangeText={(txt) =>setLinkImg(txt)}
        value={LinkImg}
        placeholder='Ảnh'
      />
      <Button
        title='Hủy'
        onPress={()=>setShow(!isShow)}
      />
      <Button
        title='Lưu'
      />
      </> 
      :null
    }
    <ProductList data={productList}/>
    <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const SecondScreen = ({ route, navigation }) => {
  const { TenSV } = route.params;
  const { Desc } = route.params;
  const { LinkImg } = route.params;

  return (
    <View>

      <Text>{TenSV} </Text>
      <Text>{Desc} </Text>
      <Text>{LinkImg} </Text>

    </View>
  )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30
  },
  text:{
    fontSize:15,
    color:'blue',
    fontWeight:'bold',
  },textinput: {
    backgroundColor: '#FFB9E8',
    color: '#4F4F4F',
    fontSize: 22,
  }
});
