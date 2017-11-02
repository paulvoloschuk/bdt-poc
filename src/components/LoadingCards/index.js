import React from 'react'
import classes from './styles.scss'

function LoadingCards({amount}) {
  let result = []
  while(amount--)
    result.push(
      <div key={amount} className={classes.item}>
        <div className={classes.bg}>
          <div className={classes.image}/>
          <div className={classes.text}/>
          <div className={classes.text}/>
          <div className={classes.divider}/>
          <div className={classes.price}/>
          <div className={classes.button}/>
        </div>
      </div>
    )
  return result
}


export default LoadingCards
