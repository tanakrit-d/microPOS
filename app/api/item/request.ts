import axios from "axios";

import { UUID, ItemCreate, ItemUpdate, ItemResponse } from "./types";
import { ItemResponseSchema } from "./schema";

const API_URL = process.env.EXPO_PUBLIC_MIDDLEWARE_URL;
const ROUTE = process.env.EXPO_PUBLIC_API_ROUTE_ITEM;

export const getItem = async (item_id: UUID): Promise<ItemResponse> => {
    try {
        const response = await axios.get(`${API_URL}/${ROUTE}/${item_id}`);
        return ItemResponseSchema.parse(response.data);
    } catch (e) {
        throw e;
    }
};

export const getItems = async (available?: boolean): Promise<ItemResponse> => {
    try {
        const endpoint = available !== undefined ? `${API_URL}/${ROUTE}/?available=${available}` : `${API_URL}/${ROUTE}/`;
        const response = await axios.get(endpoint);
        return ItemResponseSchema.parse(response.data);
    } catch (e) {
        throw e;
    }
};

export const createItem = async (item: ItemCreate): Promise<ItemResponse> => {
    try {
        const response = await axios.post(`${API_URL}/${ROUTE}/create`, item);
        return ItemResponseSchema.parse(response.data);
    } catch (e) {
        throw e;
    }
};

export const updateItem = async (
    item_id: UUID,
    item: ItemUpdate,
): Promise<ItemResponse> => {
    try {
        const response = await axios.patch(`${API_URL}/${ROUTE}/${item_id}`, item);
        return ItemResponseSchema.parse(response.data);
    } catch (e) {
        throw e;
    }
};

export const deleteItem = async (item_id: UUID): Promise<ItemResponse> => {
    try {
        const response = await axios.delete(`${API_URL}/${ROUTE}/${item_id}`);
        return ItemResponseSchema.parse(response.data);
    } catch (e) {
        throw e;
    }
};
