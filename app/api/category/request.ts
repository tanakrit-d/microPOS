import axios from "axios";

import { UUID, CategoryCreate, CategoryUpdate, CategoryResponse } from "./types";
import { CategoryResponseSchema } from "./schema";

const API_URL = process.env.EXPO_PUBLIC_MIDDLEWARE_URL;
const ROUTE = process.env.EXPO_PUBLIC_API_ROUTE_CAT;

export const getCategory = async (cat_id: UUID): Promise<CategoryResponse> => {
    try {
        const response = await axios.get(`${API_URL}/${ROUTE}/${cat_id}`);
        return CategoryResponseSchema.parse(response.data);
    } catch (e) {
        throw e;
    }
};

export const getCategories = async (available?: boolean): Promise<CategoryResponse> => {
    try {
        const endpoint = available !== undefined ? `${API_URL}/${ROUTE}/?available=${available}` : `${API_URL}/${ROUTE}/`;
        const response = await axios.get(endpoint);
        return CategoryResponseSchema.parse(response.data);
    } catch (e) {
        throw e;
    }
};

export const createCategory = async (category: CategoryCreate): Promise<CategoryResponse> => {
    try {
        const response = await axios.post(`${API_URL}/${ROUTE}/create`, category);
        return CategoryResponseSchema.parse(response.data);
    } catch (e) {
        throw e;
    }
};

export const updateCategory = async (
    cat_id: UUID,
    category: CategoryUpdate,
): Promise<CategoryResponse> => {
    try {
        const response = await axios.patch(`${API_URL}/${ROUTE}/${cat_id}`, category);
        return CategoryResponseSchema.parse(response.data);
    } catch (e) {
        throw e;
    }
};

export const deleteCategory = async (cat_id: UUID): Promise<CategoryResponse> => {
    try {
        const response = await axios.delete(`${API_URL}/${ROUTE}/${cat_id}`);
        return CategoryResponseSchema.parse(response.data);
    } catch (e) {
        throw e;
    }
};
