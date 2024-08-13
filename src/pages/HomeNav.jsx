import { Link } from 'react-router-dom';
import '../CSS/about.css';
import '../CSS/ChatBot.css';
import '../CSS/Score.css';
import '../CSS/SignUp.css';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">
          <img src="images/logo.jpg" alt="Logo" id="logo_image" />
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/loginin">LogIn</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signin">Sign UP</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/volleyball.avif" className="d-block w-100" alt="Volleyball" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Volleyball</h5>
              <p>Set, spike, and win! Join the excitement of volleyball with live updates, fantasy leagues, and in-depth match analysis.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/shooting.jpeg" className="d-block w-100" alt="Shooting" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Shooting</h5>
              <p>Aim for the top with the latest in shooting sports. Create your fantasy team, keep track of events, and engage with other enthusiasts.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/cricket1.jpg" className="d-block w-100" alt="Cricket" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Cricket</h5>
              <p>Experience the thrill of every six and wicket in the world of cricket. Join fantasy leagues, track live scores, and stay updated with the latest news.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/football.jpg" className="d-block w-100" alt="Football" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Football</h5>
              <p>Step onto the pitch and play along with your favorite football stars. Get the latest updates, form your fantasy team, and compete with friends.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/hockey.jpg" className="d-block w-100" alt="Hockey" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Hockey</h5>
              <p>Dive into the fast-paced world of hockey. Build your fantasy roster, follow matches, and stay informed on all the latest from the rink.</p>
            </div>
          </div>
          
          <div className="carousel-item">
            <img src="images/Kabadi.jpg" className="d-block w-100" alt="Kabadi" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Kabadi</h5>
              <p>Get into the heart-pounding action of Kabaddi. Track your favorite teams, join fantasy leagues, and experience the adrenaline.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/basketball.jpg" className="d-block w-100" alt="Basketball" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Basketball</h5>
              <p>Dribble your way through the action with basketball updates, fantasy leagues, and news from courts around the world.</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </div>
    
  );
}
