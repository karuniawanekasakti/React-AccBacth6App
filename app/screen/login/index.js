import {
  ImageBackground,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState, version } from "react";
import images, { EyeIcon, EyeSlashIcon } from "../../assets/images";
import { Fonts, HEIGHT, WIDTH } from "../../assets/styles";
import Text from "../../component/Text";
import Satellite from "../../services/satellite";

// import { store } from "../../store/storage";
// import { saveProfile } from "../../store/action/actionProfile";
// const { dispath } = store;

function Login({ navigation, route }) {
  //isEnable digunakan untuk mengecek apakah button login sudah bisa di klik atau belum
  //jika isEnable bernilai true maka button login tidak bisa di klik
  //setIsEnable digunakan untuk mengubah nilai isEnable
  const [isEnable, setIsEnable] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(true);
  const [errorPass, setErrPass] = useState("");
  const [errorEmail, setErrEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //custom hook
  //ketika state ada perubahann maka akan reread state
  useEffect(() => {
    validation();
  }, [password, email]); //fungsi dalam kurung untuk mengecek apakah ada perubahan pada state password dan email lalu akan direload ulang

  const validation = () => {
    let vMail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email && password) {
      if (vMail.test(email)) {
        setErrEmail("");
      } else {
        setErrEmail("email not valid ");
        setIsEnable(true);
      }
      if (password.length > 0 && password.length < 8) {
        setErrPass("password not valid");
        setIsEnable(true);
      } else {
        setErrPass("");
        setIsEnable(false);
      }
    } else {
      if (password) {
        setErrPass("");
      } else {
        setErrPass("password must be filled in");
        setIsEnable(true);
      }

      if (email) {
        setErrEmail("");
      } else {
        setErrEmail("email must be filled in ");
        setIsEnable(true);
      }
      setIsEnable(true);
    }
  };

  //cara 1 untuk mengirim data ke api

  // loginAuth = async () => {
  //   const body = {
  //     email: email,
  //     password: password,
  //   };
  //   setIsLoading(true);
  //   setIsEnable(true);
  //   //try catch digunakan untuk mengecek apakah ada error atau tidak
  //   try {
  //     const login = await Satellite.post("auth/login", body);
  //     console.log("login Data", JSON.stringify(login.data, null, 2));
  //     // catch digunakan untuk menangkap error
  //   } catch (error) {
  //     console.log(
  //       "login Data error",
  //       JSON.stringify(error.response.data, null, 2)
  //     );
  //     // finally digunakan untuk mengeksekusi kode yang ada di dalamnya walaupun ada error
  //   } finally {
  //     setIsLoading(false);
  //     setIsEnable(false);
  //   }
  // };

  //cara 2 untuk mengirim data ke api
  const loginAuth = () => {
    const body = {
      email: email,
      password: password,
    };
    setIsLoading(true);
    setIsEnable(true);
    Satellite.post("auth/login", body)
      .then((res) => {
        //dieksekusi ketika berhasil
        console.log("login Data", JSON.stringify(res.data, null, 2));
        // dispath(saveProfile(res.data));
        navigation.navigate("Main");
      })
      .catch((error) => {
        //dieksekusi ketika error
        console.log(
          "login Data error",
          JSON.stringify(error.response.data, null, 2)
        );
        setErrEmail("Email not found");
      })
      .finally(() => {
        //dieksekusi ketika berhasil atau error
        setIsLoading(false);
        setIsEnable(false);
      });
  };

  return (
    <ImageBackground
      source={images.BG_SCREEN}
      resizeMode="cover"
      style={{ width: WIDTH, height: HEIGHT }}
    >
      <View style={{ marginTop: 90, marginHorizontal: 16 }}>
        {/* Input email */}
        <View>
          <Text bold fontSize={16} color="#FFFFFF">
            Email
          </Text>
          <View
            style={{
              borderWidth: 1,
              marginTop: 8,
              borderColor: errorEmail ? "#EA8685" : "#132040",
              backgroundColor: "#273C75",
              borderRadius: 8,
              padding: 12,
            }}
          >
            <TextInput
              value={email}
              keyboardType="email-address"
              autoCapitalize="none"
              style={{
                color: "#FFFFFF",
                fontSize: 16,
                fontFamily: Fonts.Nunito.Regular,
              }}
              placeholder="Enter your email"
              placeholderTextColor={"#D3D3D3"}
              onChangeText={(value) => {
                console.log("Email value", value);
                setEmail(value);
                validation();
              }}
            />
          </View>
          <View style={{ position: "absolute", bottom: -25, right: 5 }}>
            <Text color="#EA8685">{errorEmail}</Text>
          </View>
        </View>

        {/* Input password */}
        <View style={{ marginTop: 27 }}>
          <Text bold fontSize={16} color="#FFFFFF">
            Password
          </Text>

          <View
            style={{
              borderWidth: 1,
              marginTop: 8,
              borderColor: errorPass ? "#EA8685" : "#132040",
              backgroundColor: "#273C75",
              borderRadius: 8,
              padding: 12,
            }}
          >
            <TextInput
              value={password}
              secureTextEntry={visible}
              style={{
                color: "#FFFFFF",
                fontSize: 16,
                fontFamily: Fonts.Nunito.Regular,
              }}
              placeholder="Password"
              placeholderTextColor={"#D3D3D3"}
              onChangeText={(value) => {
                console.log("Password value", value);
                setPassword(value);
                validation();
              }}
            />
            <View style={{ position: "absolute", bottom: -25, right: 5 }}>
              <Text color="#EA8685">{errorPass}</Text>
            </View>
            {/* Eye icon digunakan untuk menampilkan password */}
            <TouchableOpacity
              onPress={() => setVisible(!visible)}
              style={{ position: "absolute", right: 12, top: 15 }}
            >
              {visible ? (
                <EyeIcon width={20} height={20} />
              ) : (
                <EyeSlashIcon width={20} height={20} />
              )}
            </TouchableOpacity>
          </View>
          <Text color="#F6E58D" style={{ marginTop: 20, marginLeft: 5 }}>
            Forgot Password ?
          </Text>
        </View>

        {/* Button login */}
        <TouchableOpacity
          disabled={isEnable}
          onPress={loginAuth}
          style={{
            opacity: isEnable ? 0.5 : 1,
            backgroundColor: "#18DCFF",
            borderRadius: 8,
            paddingVertical: 12,
            alignItems: "center",
            marginTop: 20,
          }}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="#160520" />
          ) : (
            <Text bold fontSize={16}>
              Login
            </Text>
          )}
        </TouchableOpacity>

        {/* button signup */}
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text color="#FFFFFF">
            Dont Have Account?{" "}
            <Text
              onPress={() => navigation.navigate("Register")}
              color="#F6E58D"
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

export default Login;
const styles = StyleSheet.create({});
