import {Link } from 'react-router-dom';
import { useEffect } from 'react';


import {MyContext} from './useContext';
import { useContext } from 'react';


export default function NavBar() {
  const {search,setSearch} = useContext(MyContext);

  const handleChange =(e)=>{
    setSearch(e.target.value)
  }
  useEffect(()=>{
    if(search !== ''){
      
    }
  },[search]);

    return (
      <>
        <div className='navigation'>
          <nav className='nav-list'>
            <div>
              <h1>MyFOLIO</h1>
            </div>
            <ul>
              <li><Link className='link active' to="/">Home</Link></li>
              <li><Link className='link' to="/contact">Contact</Link></li>
              <li><Link className='link' to="/project">Project</Link></li>
              <li><Link className='link' to="/about">About</Link></li>
            </ul>
            <form className='search-form'>
              <div className='search-input'>
                <input onChange={handleChange} type='search' placeholder='search...'/>
                <button type='submit'><i className='bi bi-search'></i></button>
              </div>
              <div className='search-icon'><i className='bi bi-search'></i></div>
              <div className='nav-icon'><i className="bi bi-filter-right"></i></div>
            </form>
          </nav>
        </div>
      </>
    );
  } 