import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { decrement, increment, init } from '../../store/actions';


// 创建类型接口
export interface IProps {
  cs: number,
  onIncrement: () => void,
  onDecrement: () => void,
  onInit: () => void
}

// 使用接口代替 PropTypes 进行类型校验
 function Counter (props: IProps) {
      console.log(props);
      const { cs, onIncrement, onDecrement, onInit } = props;
      return (
          <p>
              Clicked: { cs } times
              <br />
              <br />
              <button onClick={ onIncrement } style={{ marginRight: 20 }}> +  </button>
              <button onClick={ onDecrement }> - </button>
              <button onClick={ onInit }> 初始化 </button>
          </p>
      )
}

// 将 reducer 中的状态插入到组件的 props 中
// 下面是单个reducer的时候，多个的时候需要选传入哪个reducer
// const { test, count } = state
const mapStateToProps = (state: any): { cs: number } => ({
  cs: state.count
})

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onDecrement: () => dispatch(decrement()),
  onIncrement: () => dispatch(increment()),
  onInit: () => dispatch(init())
})

// 使用 connect 高阶组件对 Counter 进行包裹
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
