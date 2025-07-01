import { NavLink, Link } from 'react-router-dom';


function Header() {
    return (
        <header style={{
            background: '#fafbfc',
            borderBottom: '1px solid #eee',
            padding: '0 0 0 30px',
        }}>
            <nav style={{ display: 'flex', alignItems: 'center', height: 56 }}>
                <Link to="/" style={{ fontSize: 22, marginRight: 24, color: '#222', textDecoration: 'none' }}>Home</Link>
                <Link to="/about" style={{ marginRight: 24, color: '#555', textDecoration: 'none' }}>About</Link>
                <Link to="/news" style={{ marginRight: 24, color: '#555', textDecoration: 'none' }}>News</Link>
                <Link to="/quiz" style={{ marginRight: 24, color: '#555', textDecoration: 'none' }}>Quiz</Link>
                <Link to="/contact" style={{ marginRight: 24, color: '#555', textDecoration: 'none' }}>Contact</Link>
            </nav>
        </header>
    );
}

export default Header;


// <NavLink
//                     to="/"
//                     end
//                     style={({ isActive }) => ({
//                         fontWeight: isActive ? 'bold' : 'normal',
//                         fontSize: 22,
//                         marginRight: 24,
//                         color: '#222',
//                         textDecoration: 'none'
//                     })}
//                 >
//                     Home
//                 </NavLink>
//                 <NavLink
//                     to="/about"
//                     style={({ isActive }) => ({
//                         fontWeight: isActive ? 'bold' : 'normal',
//                         marginRight: 24,
//                         color: '#555',
//                         textDecoration: 'none'
//                     })}
//                 >
//                     About
//                 </NavLink>
//                 <NavLink
//                     to="/news"
//                     style={({ isActive }) => ({
//                         fontWeight: isActive ? 'bold' : 'normal',
//                         marginRight: 24,
//                         color: '#555',
//                         textDecoration: 'none'
//                     })}
//                 >
//                     News
//                 </NavLink>
//                 <NavLink
//                     to="/quiz"
//                     style={({ isActive }) => ({
//                         fontWeight: isActive ? 'bold' : 'normal',
//                         marginRight: 24,
//                         color: '#555',
//                         textDecoration: 'none'
//                     })}
//                 >
//                     Quiz
//                 </NavLink>
//                 <NavLink
//                     to="/contact"
//                     style={({ isActive }) => ({
//                         fontWeight: isActive ? 'bold' : 'normal',
//                         marginRight: 24,
//                         color: '#555',
//                         textDecoration: 'none'
//                     })}
//                 >
//                     Contact
//                 </NavLink>