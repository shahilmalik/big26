import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';

// Helper function for impact-style vibrations
const trigger = (style: Haptics.ImpactFeedbackStyle): void => {
  if (Platform.OS !== 'web') {
    Haptics.impactAsync(style);
  }
};

// Define the shape of the exported object for better IntelliSense
interface HapticsUtils {
  light: () => void;
  medium: () => void;
  heavy: () => void;
  rigid: () => void;
  soft: () => void;
  success: () => void;
  warning: () => void;
  error: () => void;
  selection: () => void;
}

const HapticsUtils: HapticsUtils = {
  light: () => trigger(Haptics.ImpactFeedbackStyle.Light),
  medium: () => trigger(Haptics.ImpactFeedbackStyle.Medium),
  heavy: () => trigger(Haptics.ImpactFeedbackStyle.Heavy),
  rigid: () => trigger(Haptics.ImpactFeedbackStyle.Rigid),
  soft: () => trigger(Haptics.ImpactFeedbackStyle.Soft),

  success: () =>
    Platform.OS !== 'web' &&
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success),

  warning: () =>
    Platform.OS !== 'web' &&
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning),

  error: () =>
    Platform.OS !== 'web' &&
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error),

  selection: () => {
    if (Platform.OS !== 'web') {
      Haptics.selectionAsync();
    }
  },
};

export default HapticsUtils;
