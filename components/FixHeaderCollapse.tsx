import { useRef, useEffect } from "react";
import { Animated } from "react-native";

export const usePreventHeaderCollapse = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Set initial value to prevent immediate collapse
    scrollY.setValue(0);

    // Optional: Animate to a small positive value to ensure header expansion
    Animated.timing(scrollY, {
      toValue: 1,
      duration: 0,
      useNativeDriver: true,
    }).start();
  }, []);

  return scrollY;
};
