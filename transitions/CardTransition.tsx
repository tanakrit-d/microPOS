import { Animated } from "react-native";

interface LayoutProps {
  screen: {
    width: number;
  };
}

interface AnimatedProgress extends Animated.AnimatedInterpolation<number> {
  interpolate(config: Animated.InterpolationConfigType): AnimatedProgress;
}

interface CardStyleInterpolatorProps {
  current: {
    progress: AnimatedProgress;
  };
  next?: {
    progress: AnimatedProgress;
  };
  inverted: Animated.AnimatedInterpolation<number>;
  layouts: LayoutProps;
}

interface CardStyle {
  transform: {
    translateX: Animated.AnimatedInterpolation<number>;
  }[];
}

export const cardStyleInterpolator = ({
  current,
  next,
  inverted,
  layouts: { screen },
}: CardStyleInterpolatorProps): { cardStyle: CardStyle } => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: "clamp",
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: "clamp",
        })
      : 0,
  );

  return {
    cardStyle: {
      transform: [
        {
          translateX: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [screen.width, 0, -screen.width],
              extrapolate: "clamp",
            }),
            inverted,
          ),
        },
      ],
    },
  };
};

export default cardStyleInterpolator;
