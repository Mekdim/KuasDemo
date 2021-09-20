import React from 'react'
import './MainSection.css'
import HomeImages from './HomeImages'
import SearchIcon from '@material-ui/icons/Search';
import DateRangeIcon from '@material-ui/icons/DateRange';
import {useStateValue} from './StateProvider';
function MainSection() {
    const [{homeFields}, dispatch] = useStateValue();
    return (
        <div className="mainSection">
            <div className="mainSectionSearch">
                   <div className="mainSectionSearch__search">
                       <SearchIcon/>
                       <input type="text" placeholder="Enter Location" /> 
                    </div>
                   <div className="mainSectionSearch__dateRange">
                       <DateRangeIcon/>
                       <input type="text" placeholder="Enter Dates" /> 
                   </div>
                     
                     
            </div>
            <div className="homeSection"> 
                  {homeFields? homeFields.fields.map(field =>(
                      <HomeImages  
                      src={field.src}
                      description={field.description}
                   />
                  )

                  ) :  " " }
                 <HomeImages  
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSgvoeyX-SFdedVUkb8HK8G68JHzR2m4S3Eg&usqp=CAU" 
                    description= "A nice futsal Pitch in Bole"
                 />
                <HomeImages  
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbLkhs7L1GXLLhxwGJsQJDVRuUbeZnvQt4BQ&usqp=CAU" 
                    description= "Football field in Addis Ababa Stadium"
                 />

            </div>
        </div>
    )
}

export default MainSection
