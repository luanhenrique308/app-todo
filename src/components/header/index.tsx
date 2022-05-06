import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Container, Content } from "./style";
import Icon from 'react-native-vector-icons/Ionicons'

const Header = () => {
    const [isOpenInputSearch, setIsOpenInputSearch] = useState<boolean>(false);
    const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

    const openInputSearch = ()=>{
        setIsOpenInputSearch(state=> !state);
    }

    const openDrawer = ()=>{
        setIsOpenDrawer(state=> !state);
    }

    return (
        <Container style={{borderBottomWidth:1, borderBottomColor:'black'}}>
            <Content>
                <TouchableOpacity
                    onPress={openInputSearch}
                >
                    <Icon
                        size={24}
                        name={"md-menu-outline"}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={openDrawer}
                >
                    <Icon
                        size={24}
                        name={"search-outline"}
                    />
                </TouchableOpacity>
            </Content>
        </Container>
    )
}

export default Header;