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
                <View>
                  <Text>{item.name}</Text>
                  <Text>{item.value}</Text>
                </View>
            )
        }}
        />
      </View>
    )
}

export default HomeScreen
