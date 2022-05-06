import Texts from "components/small-text";
import TodoContainer from "components/todo-container";
import React, { useState } from "react";
import { View } from "react-native";
import { Task, Todo, TodoList } from "types/domain/todoList";
import { Container, ContainerTitle, Content } from "./style";


type TodoListContainerProps = {
    children: React.ReactNode;
    nameCategory: string;
}

const TodoListContainer = ({ children, nameCategory }: TodoListContainerProps) => {
    const [listTask, setListTask] =  useState<Array<Task>>([]);

    const [taskMock, setTaskMock] = useState<Task>({
        name:"Fazer component",
        status:false,
    })

    return (        
        <Container>
            <ContainerTitle>
                <Texts label={nameCategory} size={14} color={'black'} fontWeight={'normal'} numberLines={0} />
            </ContainerTitle>
            <TodoContainer task={taskMock} />
        </Container>
    )
}

export default TodoListContainer;