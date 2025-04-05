import React from "react";
import { View, ScrollView } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Lap5B1 from "./lap/lap5/Lap5B1";
import { persistor, store } from "./store";
import Lap6B1 from "./lap/lap6/Lap6B1";
import Lap6B2 from "./lap/lap6/Lap6B2";

export default function Demo({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

        {/* <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Lap5B1 />
          </PersistGate>
        </Provider> */}

        {/* <Provider store={store}>
          <Lap6B1 />
        </Provider> */}

        {/* <Provider store={store}>
          <Lap6B2 />
        </Provider> */}

      </ScrollView>
    </View>
  );
}
