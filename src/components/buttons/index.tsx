import React from "react";
import { TouchableOpacity } from "react-native";

type ButtonProps = {
    height: 'Big' | 'Medium' | 'small'
    onPress: ()=> void;
}

const Button = ({height, onPress}: ButtonProps)=>{
    return(
        <TouchableOpacity
            onPress={()=>onPress}
        >   
        
        </TouchableOpacity>
    )
}

