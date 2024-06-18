import React from "react";
import { View, Text, Dimensions, StyleSheet } from 'react-native'; 
import { BarChart } from "react-native-chart-kit";

export default function StatReadMonthly({labels, dataset}) {
    return (
        <View>
            <Text style={styles.title}>Nombre de livre lu pendant les 04 derniers mois</Text>

            <BarChart
                data={{
                labels: labels,
                datasets: [
                    {
                        data: dataset
                    }
                ]
                }}
                width={Dimensions.get('window').width - 20} 
                height={220}

                chartConfig={{
                    backgroundColor: "blue",
                    backgroundGradientFrom: "green",
                    backgroundGradientTo: "blue",
                    decimalPlaces: 0, 
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,

                    style: {
                        borderRadius: 10
                    },

                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#baa426"
                    }
                }}

                style={{
                    marginVertical: 8,
                    borderRadius: 16, 
                    paddingHorizontal: 10, 
                }}
            />
        </View>
    ); 
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        paddingHorizontal: 10,
    }, 
}); 