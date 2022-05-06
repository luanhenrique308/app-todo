import Checkbox from "components/checkbox";
import Header from "components/header";
import TodoListContainer from "components/todolist";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SubTask, Task, TodoList } from "types/domain/todoList";

const Home = () => {
    const [todoList, setTodoList] = useState<Array<TodoList>>([]);
    const [tasks, setTasks] = useState<Array<Task>>([]);
    const [subTasks, setSubTasks] = useState<Array<SubTask>>([]);



    return (
        <ScrollView>
            <View>
                <Header />
                <TodoListContainer
                    nameCategory="Trabalho"
                >
                </TodoListContainer>
            </View>
        </ScrollView>
    )
}

export default Home;