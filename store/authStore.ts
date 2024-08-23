import * as Crypto from 'expo-crypto';
import * as SecureStore from 'expo-secure-store';
import { MMKV } from 'react-native-mmkv';

const fetchOrGenerateEncryptionKey = (): string => {
    const encryptionKey = SecureStore.getItem('session-encryption-key');

    if (encryptionKey) {
        return encryptionKey;
    } else {
        const uuid = Crypto.randomUUID();
        SecureStore.setItem('session-encryption-key', uuid);
        return uuid;
    }
};

export const storage = new MMKV({
    id: 'session',
    encryptionKey: fetchOrGenerateEncryptionKey(),
});

storage.set('workaround', true);

export async function getItem(key: string): Promise<string | null> {
    try {
        return storage.getString(key) ?? null;
    } catch {
        console.warn(`Failed to get key "${key}" from secure storage`);
        return null;
    }
}

export async function setItem(key: string, value: string): Promise<void> {
    try {
        storage.set(key, value);
    } catch {
        console.warn(`Failed to set key "${key}" in secure storage`);
    }
}

export async function removeItem(key: string): Promise<void> {
    try {
        storage.delete(key);
    } catch {
        console.warn(`Failed to remove key "${key}" from secure storage`);
    }
}
