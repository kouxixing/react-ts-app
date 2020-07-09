import { ModifyAction } from '../actions';
import { DECREMENT, INCREMENT, INIT } from '../const';
import { combineReducers } from 'redux';

// 处理并返回 state 
const count = (state = 10, action: ModifyAction): number => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    case INIT:
      return state = 0
    default:
      return state
  }
}

 const rootReducer = combineReducers({
   count
});

export default rootReducer;

// import { ModifyAction } from '../actions';
// import { DECREMENT, INCREMENT } from '../const';


// import { combineReducers } from 'redux'

// // 一个state
// function count (state = 0, action: ModifyAction): number => {
//     switch (action.type) {
//       case INCREMENT:
//         return state + 1
//       case DECREMENT:
//         return state - 1
//       default:
//         return state
//     }
//   };
// //  这样可以吧store变成一个对象来组合reducer = state
//  const rootReducer = combineReducers({
//    count,
//    test
// });
// export default rootReducer;