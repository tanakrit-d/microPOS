import React, { useState } from "react";
import {
  Alert,
  ActivityIndicator,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  View,
  AppState,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { supabase } from "@/lib/supabase";
import { Button, Input } from "@rneui/themed";
import { toast, Toasts } from "@backpackapp-io/react-native-toast";

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.

AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert("Please check your inbox for email verification!");
    setLoading(false);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("@/assets/images/brand-micro/app-icon-adapt.png")}
          contentFit="contain"
        />
        <Text style={styles.title}>Sign in to microPOS</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email address</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize={"none"}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.inputGroup}>
          <View style={styles.passwordHeader}>
            <Text style={styles.label}>Password</Text>
            <Pressable>
              <Text style={styles.forgotPassword}>Forgot password?</Text>
            </Pressable>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            autoCapitalize={"none"}
          />
        </View>

        <Pressable
          disabled={loading}
          onPress={() => signInWithEmail()}
          style={[styles.signInButton, loading && styles.signInButtonDisabled]}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.signInButtonText}>Sign in</Text>
          )}
        </Pressable>

        <Pressable
          style={{
            marginTop: 40,
            flexDirection: "row",
            alignSelf: "center",
            alignContent: "center",
          }}
          disabled={loading}
          onPress={() => signUpWithEmail()}
        >
          <Text style={styles.signUpText}>Not registered? </Text>
          <Text style={styles.signUpLink}>Sign-up</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#0d1117",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    height: 90,
    width: 90,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
    marginVertical: 10,
    textAlign: "center",
  },
  formContainer: {
    width: "100%",
    maxWidth: 320,
    alignSelf: "center",
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#FFF",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#353a46",
    borderRadius: 6,
    padding: 12,
    fontSize: 14,
    color: "#FFF",
  },
  passwordHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  forgotPassword: {
    fontSize: 14,
    fontWeight: "600",
    color: "#34d399",
    marginBottom: 8,
  },
  signInButton: {
    backgroundColor: "#10b981",
    borderRadius: 6,
    padding: 12,
    alignItems: "center",
    marginTop: 24,
  },
  signInButtonDisabled: {
    backgroundColor: "#8eddb1",
    borderRadius: 6,
    padding: 12,
    alignItems: "center",
    marginTop: 24,
  },
  signInButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  signUpText: {
    fontSize: 14,
    color: "white",
  },
  signUpLink: {
    color: "#34d399",
    fontWeight: "600",
  },
});
