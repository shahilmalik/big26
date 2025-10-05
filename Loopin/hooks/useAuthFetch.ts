import * as SecureStore from 'expo-secure-store';

export function useAuthFetch() {
  const authFetch = async (url: string, options: RequestInit = {}) => {
    const token = await SecureStore.getItemAsync('userToken');

    const headers = {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
      Authorization: `Token ${token}`,
    };

    const response = await fetch(url, { ...options, headers });
    return response;
  };

  return authFetch;
}
