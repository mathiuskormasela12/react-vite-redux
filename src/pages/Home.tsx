/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { Button } from '../components'
import { connect } from 'react-redux'
import { type CounterReducerAction } from '../redux/reducers/counterReducer'
import { type LikeReducerAction } from '../redux/reducers/likeReducer'

class Home extends Component<{ like: number, count: number, handleLike: () => LikeReducerAction, handleIncrement: () => CounterReducerAction }> {
  public render (): React.ReactNode {
    return (
      <div className="container mx-auto">
        <div className="mt-5">
          <h1 className="text-4xl text-slate-800 font-bold">Home</h1>
          <div className="mt-5 flex gap-5">
            <Button type="button" onClick={this.props.handleIncrement}>
              Counter {this.props.count}
            </Button>
            <Button type="button" onClick={this.props.handleLike}>
              Like {this.props.like}
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: { likeReducer: { like: number }, counterReducer: { count: number } }): { like: number, count: number } => ({
  count: state.counterReducer.count,
  like: state.likeReducer.like
})

const mapDispatchToProps = {
  handleIncrement: (): CounterReducerAction => ({
    type: 'INCREMENT',
    payload: {
      data: {
        value: 1
      }
    }
  }),
  handleLike: (): LikeReducerAction => ({
    type: 'LIKE',
    payload: {
      data: {
        value: 1
      }
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
