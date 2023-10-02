import { NavLink } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <NavLink to="/" exact className='text-dark centrarMenu rounded py-2 px-3 w-100 d-inline-block' activeClassName='active'><FaIcons.FaHome className='me-2'/>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/users" exact className='text-dark centrarMenu rounded py-2 px-3 w-100 d-inline-block'><FaIcons.FaUserAlt className='me-2'/>Users</NavLink>
                </li>
                <li>
                    <NavLink to="/products" exact className='text-dark centrarMenu rounded py-2 px-3 w-100 d-inline-block'><FaIcons.FaMagic className='me-2'/>Products</NavLink>
                </li>
                <li>
                    <NavLink to="/categories" exact className='text-dark centrarMenu rounded py-2 px-3 w-100 d-inline-block'><FaIcons.FaChessBoard className="me-2" />Categories</NavLink>
                </li>
            </ul>
        </div>
    )
};

export default Sidebar;