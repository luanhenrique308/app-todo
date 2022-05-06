import Checkbox from "components/checkbox";
import Texts from "components/small-text";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Task } from "types/domain/todoList";
import { Container } from "./style";

type TodoContainerProps = {
    task: Task;
    time?: string;
    handle?: () => void
}

const TodoContainer = ({ task, handle }: TodoContainerProps) => {
    return (
        <Container>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <View style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Checkbox status={task.status} />
                            <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                                <Texts
                                    size={20}
                                    label={task.name}
                                />
                            </View>
                        </View>
                        <View style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: "space-between", flexDirection: 'row' }}>
                            <Text
                                style={{ fontSize: 16 }}
                            >
                                00:30
                            </Text>
                            <TouchableOpacity
                                onPress={handle}
                            >
                                <Text
                                    style={{ fontSize: 20, marginLeft: 10 }}
                                >
                                    +
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ width: '90%', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15, justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Checkbox status={task.status} />
                                <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                                    <Texts
                                        size={20}
                                        label={task.name}
                                    />
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Text
                                    style={{ marginRight: 8 }}
                                >
                                    00:30
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Container>
    )
}

export default TodoContainer;