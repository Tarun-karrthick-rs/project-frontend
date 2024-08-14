import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      {/* Navigation bar */}
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: 'black',
          position: 'fixed',
          top: '0',
          width: '100%',
          zIndex: '1000',
        }}
      >
        <a className="navbar-brand" href="#">
          <img
            src="images/logo.jpg"
            alt="Logo"
            style={{
              width: '8.7%',
              borderRadius: '50%',
            }}
          />
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto" style={{ marginLeft: 'auto' }}>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/home"
                style={{
                  color: '#dec78d',
                  marginLeft: 'auto',
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/news_feed"
                style={{
                  color: '#dec78d',
                  marginLeft: 'auto',
                }}
              >
                News Feed
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/matches"
                style={{
                  color: '#dec78d',
                  marginLeft: 'auto',
                }}
              >
                Matches
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                className="nav-link"
                to="/community"
                style={{
                  color: '#dec78d',
                  marginLeft: 'auto',
                }}
              >
                Community
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/chatbot"
                style={{
                  color: '#dec78d',
                  marginLeft: 'auto',
                }}
              >
                Help
              </Link>
            </li>
            <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://fantasy-sport-frontend.vercel.app/"
                  style={{
                    color: '#dec78d',
                    marginLeft: 'auto',
                  }}
                >
                  Fantasy
                </a>
              </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                style={{
                  color: '#dec78d',
                  marginLeft: 'auto',
                }}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact"
                style={{
                  color: '#dec78d',
                  marginLeft: 'auto',
                }}
              >
                Contact
              </Link>
            </li>
           
          </ul>
        </div>
      </nav>
    </div>
  );
}
