import React from 'react'
import './UpperSection.css'
import LanguageIcon from '@material-ui/icons/Language';
import SearchIcon from '@material-ui/icons/Search';
import {Avatar, Button } from '@material-ui/core'
import {useStateValue} from './StateProvider'
import { actionTypes} from './reducer'

function UpperSection() {
    const [state, dispatch] = useStateValue();
    // the api is dummy public api here
    const getFields = ()=>{
        fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          dispatch({
              // for now let me ignore the result here 
              type:actionTypes.SET_HOME_FIELDS,
              homeFields:{"fields":[{src:"https://www.thereporterethiopia.com/sites/default/files/2021-06/sport_0.jpg", 
                                    description:"Abebe bekila stadium renovated one! Looks great!"}, 
                                    {src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR9rWGjFDvj3UPbS4R9SM6ucHec0JeGF-yyQ&usqp=CAU", 
                                    description:"Some Where in Awassa!"}] 
              }
          })
        },
        
        (error) => {
          console.log(error)
        }
      )
  }
    
    return (
        <div className="upperSection">
            <div className="upperSection__left">
                <img 
                    className="upperSection__icon"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHYB-DYArIgG5AEqY0uuR2Tgwk6_GbR2f54Q&usqp=CAU"
                    alt = ""
                />
                <p> Kuas </p>
            </div>
            <div className="upperSection__center">
                <input type="text" />
                <SearchIcon/>
                <Button onClick={getFields}> Search more Fields</Button>
            </div>
            <div className="upperSection__right">
               <p> Add Playing Ground </p>
               <LanguageIcon />
               <Avatar/>
               
            </div>
        </div>
    )
}

export default UpperSection
