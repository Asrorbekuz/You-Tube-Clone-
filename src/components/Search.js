import React,{useState} from 'react';
import logo from '../images/logo1.png';
import functions from '../images/functions.png';
import profileImg from '../images/profileimg.jpg';

const Search = ({onSubmit}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (e) => setSearchTerm(e.target.value);

     const keyPress = (e) =>{
        if(e.key === 'Enter'){
            onSubmit(searchTerm);
        }
     }  
    return (
        <>
           <div className="header">
              <a href='/' className="brand" >
                <img src={logo} alt="You tube logo" className="logoBrand" />
              </a>
              <input   
                type="text"
                placeholder="Search..."
                defaultValue={searchTerm}
                onChange={handleChange}
                onKeyPress={keyPress}
              />
              <div className="icons">
                  <img 
                    src={functions}
                    alt="functions"
                    className="functions"
                  />
                  <a  href='/' className="profile"> 
                    <img src={profileImg} alt="profile"  />
                    </a>
              </div>
           </div> 
        </>
    );
};

export default Search;