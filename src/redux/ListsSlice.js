import { createSlice } from '@reduxjs/toolkit'
import _ from 'underscore';

export const listsDataSlice = createSlice({
    name: 'lists',
    initialState: {
        categories: _.uniq([]),
        items: _.uniq([])
    },
    reducers: {
        addCategory: (state, category) => {
            state.categories.push(category.payload)
        },
        initializeCategoriesFromServer: (state, categories) => {
            state.categories = [];
            state.categories = state.categories.concat(categories.payload);
        },
        addItem: (state, item) => {
            state.items.push(item.payload)
        },
        initializeItemsFromServer: (state, items) => {
            state.items = [];
            state.items = state.items.concat(items.payload);
        },
        updateCategory: (state, category) => {
            state.categories[state.categories.indexOf(category.payload.toUpdate)] = category.payload.updated
        },
        updateItem: (state, item) => {
            state.items[state.items.indexOf(item.payload.toUpdate)] = item.payload.updated
        }
    },
})

export const { addCategory, initializeCategoriesFromServer, addItem, initializeItemsFromServer, updateCategory,
    updateItem } = listsDataSlice.actions

export default listsDataSlice.reducer