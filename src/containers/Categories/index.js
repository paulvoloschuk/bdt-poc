import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import classes from './styles.scss'

const items = [
  {
    name: 'Cat 1',
    path: '/store'
  },
  {
    name: 'Cat 2',
    path: '/store'
  },
  {
    name: 'Cat 3',
    path: '/store'
  },
  {
    name: 'Cat 4',
    path: '/store'
  },
  {
    name: 'Cat 5',
    path: '/store'
  },
  {
    name: 'Cat 6',
    path: '/store'
  },
]

@connect (
  state => ({
    location: state.router.location.pathname,
    categoryId: state.filter.category,
    abTests: state.abTests
  }),
  dispatch => ({
    changeCategory: id => () => dispatch({
      type: 'filter/CHANGE_CATEGORY',
      payload: id
    })
  })
)
class Categories extends Component {
  render () {
    let { changeCategory, abTests } = this.props,
        isStorePage = this.props.location === '/store',
        hideBlock = (!!abTests.categoriesEverywhere || isStorePage) ? null : classes.container_hidden,
        ulCssClass = `${classes.container} ${hideBlock}`

    return (
      <nav>
        <ul className={ulCssClass}>
          {items.map((item, index) => {
            let activeClass = (isStorePage && this.props.categoryId === index)
              ? classes.link__active
              : '';
            return (
              <li className={classes.item} key={index}>
                <Link to={item.path} className={classes.link + ' ' + activeClass} onClick={changeCategory(index).bind(this)}>
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default Categories
