import React from "react";
import { View, Dimensions, Text, StyleSheet } from 'react-native'; 
import { PieChart } from "react-native-chart-kit";

export default function StatKindBook() {
    
    // The data is collected in the database but this is an example : 
    const data = [
        {
          name: 'Horreur',
          population: 40,
          color: 'black',
          legendFontColor: 'black',
          legendFontSize: 15,
        },
        {
          name: 'Histoire',
          population: 40,
          color: 'blue',
          legendFontColor: 'black',
          legendFontSize: 15,
        },
        {
          name: 'Science',
          population: 20,
          color: 'red',
          legendFontColor: 'black',
          legendFontSize: 15,
        },
    ];
    
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Diagramme ciruclaire en % (selon le genre)</Text>
          <PieChart
            data={data}
            width={Dimensions.get('window').width - 10}
            height={220}
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    }, 
    
    title: {
        fontSize: 16, 
        paddingHorizontal: 10, 
    }
})