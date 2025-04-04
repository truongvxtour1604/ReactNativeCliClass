import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Lap5B1 from "./lap/lap5/Lap5B1";
import { persistor, store } from "./lap/lap5/store";

export default function Demo({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Lap5B1 />
        </PersistGate>
      </Provider>
    </View>
  );
}
