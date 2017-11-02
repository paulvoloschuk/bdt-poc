import React from 'react'
import classes from './loader.scss'

function LoaderBlocks ({amount}) {
    let blocks = [
      <div key={amount + 1}className={classes.loader}>
        <div className={classes.caption}/>
        <div className={classes.slider}>
          <div className={classes.line}/>
          <div className={classes.switcher}/>
          <div className={classes.switcher}/>
        </div>
      </div>
    ]

    while (amount--)
     blocks.push(
       <div key={amount} className={classes.loader}>
         <div className={classes.caption}/>
         <div className={classes.checkLine}>
           <div className={classes.input}/>
           <div className={classes.text}/>
         </div>
         <div className={classes.checkLine}>
           <div className={classes.input}/>
           <div className={classes.text}/>
         </div>
         <div className={classes.checkLine}>
           <div className={classes.input}/>
           <div className={classes.text}/>
         </div>
       </div>
     )

    return blocks
}

export default LoaderBlocks
