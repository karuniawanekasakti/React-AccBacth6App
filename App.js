import { View, Text } from "react-native";
import React, { Fragment, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import IndexLayout from "./app/index";

import * as Font from "expo-font";
import fonts from "./app/assets/fonts";
import * as SplashScreen from "expo-splash-screen";
// import { Provider } from "react-redux";
// import store from "./app/store/storage";

function App() {
  //function ini akan ditunggu dulu sampai ke load, setelah dpt data baru lanjut ke bawah nya
  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync(fonts);
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    }
    loadFonts();
  }, []);
  //fragment sama seperti view bedanya gabisa di style
  return (
    <Fragment>
      <SafeAreaProvider>
        <IndexLayout />
      </SafeAreaProvider>
    </Fragment>
  );
}

export default App;
