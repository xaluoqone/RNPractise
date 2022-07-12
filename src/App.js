import React from "react";
import { View } from "react-native";
import ColorSelect from "./component/ColorSelect";

export default function App(props) {
    return (
        <View style={{ flex: 1 }}>
            <ColorSelect
                style={{ width: 170, height: 170 }} />
        </View>
    );
}