import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Text from "../../component/Text";
import images, { BackLogin, EyeIcon, EyeSlashIcon } from "../../assets/images";
import { Fonts, HEIGHT, WIDTH } from "../../assets/styles";
import { Platform } from "react-native";
import Satellite from "../../services/satellite";

function Register({ navigation, route }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nik, setNik] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [visible, setVisible] = useState(true);
  const [errName, setErrName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errNik, setErrNik] = useState("");
  const [errPass, setErrPass] = useState("");
  const [errConfirmPass, setErrConfirmPass] = useState("");
  const [isEnable, setIsEnable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    validation();
  }, [name, email, phone, nik, password, confirmPass]);

  const validation = () => {
    let vMail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email) {
      setErrEmail("");
    } else {
      setErrEmail("email must be filled in ");
      setIsEnable(true);
    }

    if (email) {
      if (vMail.test(email)) {
        setErrEmail("");
      } else {
        setErrEmail("email not valid ");
        setIsEnable(true);
      }
    }

    if (name) {
      setErrName("");
    } else {
      setErrName("name must be filled in ");
      setIsEnable(true);
    }

    if (name) {
      if (name.length < 3) {
        setErrName("name must be more than 3 characters ");
        setIsEnable(true);
      }
    }

    if (phone) {
      setErrPhone("");
    } else {
      setErrPhone("phone must be filled in ");
      setIsEnable(true);
    }

    if (phone) {
      if (phone.length < 11) {
        setErrPhone("phone must be more than 11 characters ");
        setIsEnable(true);
      }
    }

    if (nik) {
      setErrNik("");
    } else {
      setErrNik("nik must be filled in ");
      setIsEnable(true);
    }

    if (nik) {
      if (nik.length < 16) {
        setErrNik("nik must be more than 16 characters ");
        setIsEnable(true);
      }
    }

    if (password) {
      setErrPass("");
    } else {
      setErrPass("password must be filled in ");
      setIsEnable(true);
    }

    if (password) {
      if (password.length > 0 && password.length < 8) {
        setErrPass("password must be more than 8 characters ");
        setIsEnable(true);
      } else {
        setErrPass("");
        setIsEnable(false);
      }
    }

    if (confirmPass) {
      setErrConfirmPass("");
    } else {
      setErrConfirmPass("password must be filled in ");
      setIsEnable(true);
    }

    if (confirmPass) {
      if (confirmPass.length > 0 && confirmPass.length < 8) {
        setErrConfirmPass("password must be more than 8 characters ");
        setIsEnable(true);
      } else {
        setErrConfirmPass("");
        setIsEnable(false);
      }
    }

    if (confirmPass) {
      if (confirmPass !== password) {
        setErrConfirmPass("password not match");
        setIsEnable(true);
      }
    }
  };

  const registerAuth = () => {
    const body = {
      doSendRegister: {
        name: name,
        email: email,
        phoneNumber: phone,
        nik: nik,
        password: confirmPass,
      },
    };
    setIsLoading(true);
    setIsEnable(true);
    Satellite.post("auth/register", body)
      .then((res) => {
        //dieksekusi ketika berhasil
        console.log("register Data", JSON.stringify(res.data, null, 2));
        // dispath(saveProfile(res.data));
        navigation.navigate("Main");
      })
      .catch((error) => {
        //dieksekusi ketika error
        console.log(
          "login Data error",
          JSON.stringify(error.response.data, null, 2)
        );
        setErrEmail(error.response.data.message);
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
      style={{
        width: WIDTH,
        height: HEIGHT,
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginHorizontal: 16 }}>
            <View style={{ marginTop: 50, position: "absolute", left: 1 }}>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <BackLogin width={25} height={25} />
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 120 }}>
              <View>
                <Text bold fontSize={16} color="#FFFFFF">
                  Name
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    marginTop: 8,
                    borderColor: errName ? "#EA8685" : "#132040",
                    backgroundColor: "#273C75",
                    borderRadius: 8,
                    padding: 12,
                  }}
                >
                  <TextInput
                    value={name}
                    keyboardType="default"
                    autoCapitalize="words"
                    style={{
                      color: "#FFFFFF",
                      fontSize: 16,
                      fontFamily: Fonts.Nunito.Regular,
                    }}
                    placeholder="Enter your name"
                    placeholderTextColor={"#D3D3D3"}
                    onChangeText={(value) => {
                      console.log("Email value", value);
                      setName(value);
                      validation();
                    }}
                  />
                </View>
                <View style={{ position: "absolute", bottom: -25, right: 5 }}>
                  <Text color="#EA8685">{errName}</Text>
                </View>
              </View>

              <View style={{ marginTop: 27 }}>
                <Text bold fontSize={16} color="#FFFFFF">
                  Email
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    marginTop: 8,
                    borderColor: errEmail ? "#EA8685" : "#132040",
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
                  <Text color="#EA8685">{errEmail}</Text>
                </View>
              </View>

              <View style={{ marginTop: 27 }}>
                <Text bold fontSize={16} color="#FFFFFF">
                  Phone
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    marginTop: 8,
                    borderColor: errPhone ? "#EA8685" : "#132040",
                    backgroundColor: "#273C75",
                    borderRadius: 8,
                    padding: 12,
                  }}
                >
                  <TextInput
                    maxLength={12}
                    value={phone}
                    keyboardType="numeric"
                    autoCapitalize="none"
                    style={{
                      color: "#FFFFFF",
                      fontSize: 16,
                      fontFamily: Fonts.Nunito.Regular,
                    }}
                    placeholder="Enter your phone"
                    placeholderTextColor={"#D3D3D3"}
                    onChangeText={(value) => {
                      console.log("Email value", value);
                      setPhone(value);
                      validation();
                    }}
                  />
                </View>

                <View style={{ position: "absolute", bottom: -25, right: 5 }}>
                  <Text color="#EA8685">{errPhone}</Text>
                </View>
              </View>

              <View style={{ marginTop: 27 }}>
                <Text bold fontSize={16} color="#FFFFFF">
                  NIK
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    marginTop: 8,
                    borderColor: errNik ? "#EA8685" : "#132040",
                    backgroundColor: "#273C75",
                    borderRadius: 8,
                    padding: 12,
                  }}
                >
                  <TextInput
                    maxLength={16}
                    value={nik}
                    keyboardType="numeric"
                    autoCapitalize="none"
                    style={{
                      color: "#FFFFFF",
                      fontSize: 16,
                      fontFamily: Fonts.Nunito.Regular,
                    }}
                    placeholder="Enter your nik"
                    placeholderTextColor={"#D3D3D3"}
                    onChangeText={(value) => {
                      console.log("Email value", value);
                      setNik(value);
                      validation();
                    }}
                  />
                </View>
                <View style={{ position: "absolute", bottom: -25, right: 5 }}>
                  <Text color="#EA8685">{errNik}</Text>
                </View>
              </View>

              <View style={{ marginTop: 27 }}>
                <Text bold fontSize={16} color="#FFFFFF">
                  Password
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    marginTop: 8,
                    borderColor: errPass ? "#EA8685" : "#132040",
                    backgroundColor: "#273C75",
                    borderRadius: 8,
                    padding: 12,
                  }}
                >
                  <TextInput
                    value={password}
                    secureTextEntry={visible}
                    autoCapitalize="none"
                    style={{
                      color: "#FFFFFF",
                      fontSize: 16,
                      fontFamily: Fonts.Nunito.Regular,
                    }}
                    placeholder="Password"
                    placeholderTextColor={"#D3D3D3"}
                    onChangeText={(value) => {
                      console.log("Email value", value);
                      setPassword(value);
                      validation();
                    }}
                  />
                </View>
                <View style={{ position: "absolute", bottom: -25, right: 5 }}>
                  <Text color="#EA8685">{errPass}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => setVisible(!visible)}
                  style={{ position: "absolute", right: 12, top: 50 }}
                >
                  {visible ? (
                    <EyeIcon width={20} height={20} />
                  ) : (
                    <EyeSlashIcon width={20} height={20} />
                  )}
                </TouchableOpacity>
              </View>

              <View style={{ marginTop: 27 }}>
                <Text bold fontSize={16} color="#FFFFFF">
                  Confirm Password
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    marginTop: 8,
                    borderColor: errConfirmPass ? "#EA8685" : "#132040",
                    backgroundColor: "#273C75",
                    borderRadius: 8,
                    padding: 12,
                  }}
                >
                  <TextInput
                    value={confirmPass}
                    secureTextEntry={visible}
                    autoCapitalize="none"
                    style={{
                      color: "#FFFFFF",
                      fontSize: 16,
                      fontFamily: Fonts.Nunito.Regular,
                    }}
                    placeholder="Confirm Password"
                    placeholderTextColor={"#D3D3D3"}
                    onChangeText={(value) => {
                      console.log("Email value", value);
                      setConfirmPass(value);
                      validation();
                    }}
                  />
                </View>
                <View style={{ position: "absolute", bottom: -25, right: 5 }}>
                  <Text color="#EA8685">{errConfirmPass}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => setVisible(!visible)}
                  style={{ position: "absolute", right: 12, top: 50 }}
                >
                  {visible ? (
                    <EyeIcon width={20} height={20} />
                  ) : (
                    <EyeSlashIcon width={20} height={20} />
                  )}
                </TouchableOpacity>
              </View>

              <View style={{ marginTop: 27, height: 100, marginBottom: 20 }}>
                <TouchableOpacity
                  onPress={registerAuth}
                  disabled={isEnable}
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
                    <ActivityIndicator size="small" color="#FFFFFF" />
                  ) : (
                    <Text bold fontSize={16}>
                      Register
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

export default Register;
const styles = StyleSheet.create({});
