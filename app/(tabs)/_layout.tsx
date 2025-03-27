import React from "react";
import {Tabs} from "expo-router"

const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen 
            name="index" 
            options={{
                title: "Acceuil",
                headerShown: false
            }} />
        </Tabs>
    )
}

export default _layout;