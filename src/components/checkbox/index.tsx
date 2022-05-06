import React, { useEffect, useState } from "react"
import { Text, TouchableOpacity } from "react-native"
import { Container } from "./style"

type CheckBoxProps = {
    status: boolean
}

const Checkbox = ({ status= false }: CheckBoxProps) => {
    const [isConcluded, setIsConcluded] = useState<boolean>(false)
    
    const completeTask = ()=>{
        setIsConcluded(state => !state)
    }

    useEffect(()=>{
        setIsConcluded(status);
    },[])

    return (
        <TouchableOpacity
            onPress={completeTask}
        >
            <Container>
                {isConcluded && (
                    <Text>V</Text>
                )}
            </Container>
        </TouchableOpacity>
    )
}

export default Checkbox;