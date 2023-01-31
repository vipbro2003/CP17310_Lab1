import { FlatList, Text, StyleSheet, Image } from "react-native";

export default function ProductList(props) {

    const list = props.data;

    return (
        <FlatList
            data={list}
            renderItem={({ item }) => (
                <>
                    <Text style={styles.text}>Tên : {item.name}</Text>
                    <Text style={styles.text}>Mô Tả : {item.description}</Text>
                    <Image source={item.src} style={{
                        width: 150,
                        height: 150,
                        borderWidth: 2,
                        borderColor: '#FF23A8',
                        resizeMode: 'contain',
                        margin: 0
                    }}
                    ></Image>
                    {/* <Image style={styles.image} source={uri:''}/> */}
                </>
            )}
            keyExtractor={(item) => item.id}

        />
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 20,
        alignItems : 'center',
    },
});