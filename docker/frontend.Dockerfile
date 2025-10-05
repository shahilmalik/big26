FROM node:18

WORKDIR /app

# Copy only package.json & lock file first for better caching
COPY Loopin/package*.json ./

# Install dependencies (including local 'expo' package)
RUN npm install --legacy-peer-deps

# Now copy the rest of the app
COPY Loopin/ .

# Expose Expo dev server ports
EXPOSE 19000 19001 19002

# Run using the local Expo CLI inside node_modules
CMD ["npx", "expo", "start", "--tunnel"]
