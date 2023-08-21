import React, {useEffect} from 'react'
import { Text, View, FlatList } from 'react-native'

const HomeScreen = () => {

    let arr = [{name: 'foo', value: 'bar'}, {name: 'pepe', value: 'Racing'}, {name: 'niko', value: 'Developer'}]

    useEffect(() => {

    }, [])
    return (
      <View>
        <FlatList
        data={arr}
        renderItem={({item}) => {
            return(
                <Text>{item.name}</Text>
            )
        }}
        />
      </View>
    )
}

export default HomeScreen
