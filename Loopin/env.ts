import Constants from "expo-constants";

const expoConfig = Constants.expoConfig;

const API_URL = expoConfig?.extra?.API_URL ?? "http://localhost:8000/api";

export default {
  API_URL,
};
