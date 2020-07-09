import * as React from 'react';
import { connect } from 'react-redux';


// 创建类型接口csCounter
export interface IProps {
  value: number,
}

// 使用接口代替 PropTypes 进行类型校验
 function csCounter (props: IProps) {
      const { value } = props;
      return (
          <p>
              Clicked: { value } times
          </p>
      )
}

// 将 reducer 中的状态插入到组件的 props 中
// 下面是单个reducer的时候，多个的时候需要选传入哪个reducer
// const { test, count } = state
const mapStateToProps = (state: any): { value: number } => ({
  value: state.count
})


// 使用 connect 高阶组件对 csCounter 进行包裹
export default connect(mapStateToProps)(csCounter);
