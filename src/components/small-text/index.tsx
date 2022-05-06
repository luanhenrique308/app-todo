import React from "react";
import { Text, TextProps } from "react-native";

type TextsProps = {
    size?:number;
    color?: string;
    label: string;
    fontWeight?: 'bold' | 'normal';
    numberLines?: number;
}
const Texts = ({size, color, label, fontWeight, numberLines}:TextsProps)=>{
    return(
        <Text
            style={{
                fontWeight: fontWeight,
                color: color,
                fontSize:size,
            }}
            numberOfLines={numberLines}
        >
            {label}
        </Text>
    )   
} 

export default Texts;