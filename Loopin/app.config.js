import dotenv from "dotenv";
// import "dotenv/config";
// Load the .env.expo file explicitly
dotenv.config({ path: ".env.expo" });

export default {
  expo: {
    name: "Proximum",
    slug: "proximum",
    version: "1.0.0",
    sdkVersion: "54.0.0",
    extra: {
      API_URL: process.env.API_URL,
    },
  },
};
