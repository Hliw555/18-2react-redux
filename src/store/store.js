import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

// const blackPinkObject = (a) => {
//     if (a === 'jennie') {
//         return { name: 'jennie', age: 25, position: 'voice' }
//     }
//     if (a === 'jisoo') {
//         return { name: 'jisoo', age: 26, position: 'voice' }
//     }
//     if (a === 'rose') {
//         return { name: 'rose', age: 23, position: 'voice' }
//     }
//     if (a === 'lisa') {
//         return { name: 'lisa', age: 22, position: 'voice' }
//     }

//     return '=> Black Pink'
// }

// const str = blackPinkObject('jennie')

// console.log(str)

const initialState = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.amount
        },
        reset(state, action) {
            state.counter = action.amount
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
});

const counterReducer = (state = initialState, action) => {

    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state['showCounter']
        }
    }

    if (action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
            showCounter: state['showCounter']
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state['showCounter']
        }
    }

    if (action.type === 'reset') {
        return {
            counter: action.amount,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'toggle') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }

    return state;
}

// const store = createStore(counterSlice.reducer)
const store = createStore(counterReducer)
// console.log(store)
/*
---- creatStore of pure redux return an object to us แม้ว่าเราจะ
.ป้อน function ให้มันก็ตาม
*/

export default store;

// store.dispatch({ type: 'increment' })
// store.dispatch({ type: 'decrement' })

