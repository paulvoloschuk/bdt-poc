import { connectContext as context } from 'connect-context'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import LoadingCards from 'components/LoadingCards'
import DealCard from 'components/DealCard'
import { dealsQuantity, loadDelay } from 'index/constants'
import classes from './styles.scss'

@context({
  t: PropTypes.func.isRequired
})
@connect (
  state => ({
    data: state.deals,
    filterOptions: state.filter
  }),
  dispatch => ({
    getItems: () => dispatch({
      type: 'deals/FETCH_START'
    })
  })
)
class Deals extends Component {
  constructor(props) {
    super()
    this.state = {
      initialized: false,
      loadingMore: false,
      limit: dealsQuantity,
    }
  }
  loadMoreHandler() {
    this.setState({
      ...this.state,
      loadingMore: true
    })
    setTimeout(() => {
      this.setState({
        ...this.state,
        loadingMore: false,
        limit: this.state.limit + dealsQuantity
      })
    }, loadDelay)
  }
  shouldComponentUpdate(nextProps, nextState) {
    let {state: currentState, props: currentProps} = this
    if (currentState.initialized !== nextState.initialized) return false
    // if (currentProps === nextProps) return false
    // TODO: make props equalize function
    else return true
  }
  componentDidMount() {
    let {getItems, data} = this.props,
        {initialized} = this.state
    if (!data && !initialized) {
      this.setState({
        ...this.state,
        initialized: true,
      })
      getItems()
    }
  }
  render () {
    let { data, t } = this.props,
        { limit, loadingMore: loading } = this.state,
        noData = (
          <div className={classes.placeholder}>
            <img src="/img/no-data.svg" alt="FUUUUUU"/>
            <p>{t('deals_not_found')}</p>
          </div>
        ),
        content = <LoadingCards amount={dealsQuantity} />,
        loadmoreButton = <p className={classes.loadMoreButton} onClick={this.loadMoreHandler.bind(this)}>{t('load_more')}</p>,
        loadmoreLabel = <p className={classes.loadmoreLabel}>{t('loading')}</p>,
        loadMore = limit < data.length && (loading ? loadmoreLabel : loadmoreButton)

    if (data && !data.length) content = noData
    if (data && data.length) content = data
      .slice(0, limit)
      .map((item,index) => <DealCard key={index} {...item}/>)

    return (
      <div>
        <div className={classes.container}>
          {content}
        </div>
        {loadMore}
      </div>
    )
  }
}

export default Deals
