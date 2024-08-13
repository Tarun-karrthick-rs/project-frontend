import React from 'react';
import Navbar from './navbar';

const AboutSection = () => {
    const styles = {
        body: {
            fontFamily: 'Arial, Helvetica, sans-serif',
            margin: 0,
            paddingTop: '100px',
            backgroundColor: '#f4f4f4',
        },
        aboutSection: {
            padding: '60px 20px',
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        aboutContent: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            maxWidth: '1200px',
            backgroundColor: '#fff',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
            overflow: 'hidden',
            marginBottom: '40px',
            width: '100%',
        },
        aboutImage: {
            flex: '1 1 40%',
            maxWidth: '40%',
        },
        aboutImageImg: {
            width: '100%',
            height: 'auto',
            display: 'block',
            borderRadius: '10px 0 0 10px',
        },
        aboutText: {
            flex: '1 1 60%',
            padding: '40px',
        },
        aboutTextH2: {
            fontSize: '36px',
            color: '#333',
            marginBottom: '20px',
        },
        keyPoints: {
            listStyle: 'none',
            padding: 0,
        },
        keyPointsLi: {
            fontSize: '18px',
            color: '#555',
            marginBottom: '15px',
            lineHeight: '1.5',
        },
        keyPointsStrong: {
            color: '#333',
        },
        extraContent: {
            maxWidth: '1200px',
            backgroundColor: '#fff',
            padding: '20px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
            textAlign: 'left',
            marginBottom: '40px',
        },
        extraContentP: {
            fontSize: '18px',
            color: '#666',
            lineHeight: '1.6',
        },
        contactDetails: {
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: '1200px',
            backgroundColor: '#090707',
            padding: '20px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
            textAlign: 'left',
        },
        contactDetailsH3: {
            fontSize: '28px',
            color: 'black',
            marginBottom: '20px',
        },
        teamMember: {
            marginBottom: '20px',
            flex: 1,
            marginRight: '20px',
        },
        teamMemberH4: {
            fontSize: '24px',
            color: '#d5caca',
            marginBottom: '10px',
        },
        teamMemberP: {
            fontSize: '16px',
            color: 'gold',
            marginBottom: '5px',
        },
        teamMemberA: {
            color: 'gold',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
        },
        teamMemberAHover: {
            color: '#e66a35',
        },
        lastTeamMember: {
            marginRight: 0, 
        },
        media: {
            '@media (max-width: 768px)': {
                aboutContent: {
                    flexDirection: 'column',
                },
                aboutImage: {
                    maxWidth: '100%',
                },
                aboutText: {
                    padding: '20px',
                },
                contactDetails: {
                    flexDirection: 'column',
                },
                teamMember: {
                    marginRight: 0,
                    marginBottom: '20px',
                },
                lastTeamMember: {
                    marginBottom: 0,
                },
            },
        },
    };

    return (
      <div>
        <Navbar />
      
        <br></br>
        <section id="about" style={styles.aboutSection}>
            <div style={styles.aboutContent}>
                <div style={styles.aboutImage}>
                    <img
                        src="https://media.istockphoto.com/id/1349376335/vector/modern-abstract-triangle-sport-background-or-collage.jpg?s=612x612&w=0&k=20&c=wPGUhY30MaSXTeSfIExx1IL67OVrmXiNGcf01A3jPGU="
                        alt="Fantasy Sports"
                        style={styles.aboutImageImg}
                    />
                </div>
                <div style={styles.aboutText}>
                    <h2 style={styles.aboutTextH2}>About Our Fantasy Sports Platform</h2>
                    <ul style={styles.keyPoints}>
                        <li style={styles.keyPointsLi}><strong style={styles.keyPointsStrong}>Real-Time Updates:</strong> Stay ahead with live scores and instant notifications.</li>
                        <li style={styles.keyPointsLi}><strong style={styles.keyPointsStrong}>Custom Leagues:</strong> Create your own leagues with friends or join public ones.</li>
                        <li style={styles.keyPointsLi}><strong style={styles.keyPointsStrong}>Expert Analysis:</strong> Get insights from top fantasy sports analysts.</li>
                        <li style={styles.keyPointsLi}><strong style={styles.keyPointsStrong}>Mobile Friendly:</strong> Seamless experience across all devices.</li>
                        <li style={styles.keyPointsLi}><strong style={styles.keyPointsStrong}>Community Interaction:</strong> Engage with a global community of sports fans.</li>
                    </ul>
                </div>
            </div>

            <div style={styles.extraContent}>
                <p style={styles.extraContentP}>
                    Our platform is designed to bring sports enthusiasts together, offering an engaging and competitive environment where you can showcase your sports knowledge and strategy. Whether you're new to fantasy sports or a seasoned veteran, our platform provides everything you need to succeed. From in-depth analysis to real-time updates, we've got you covered. Join us today and take your fantasy sports experience to the next level!
                </p>
            </div>

            <h3 style={styles.contactDetailsH3}>About Our Team</h3>
            <div style={styles.contactDetails}>
                <div style={styles.teamMember}>
                    <h4 style={styles.teamMemberH4}>SIVA KUMAR</h4>
                    <p style={styles.teamMemberP}>Email: siva.sk@gmail.com</p>
                    <p style={styles.teamMemberP}>LinkedIn: <a href="https://www.linkedin.com/in/siva" target="_blank" rel="noopener noreferrer" style={styles.teamMemberA}>linkedin.com/in/siva</a></p>
                    <p style={styles.teamMemberP}>Phone: 9629546387</p>
                    <p style={styles.teamMemberP}>GitHub: <a href="https://github.com/siva" target="_blank" rel="noopener noreferrer" style={styles.teamMemberA}>github.com/siva</a></p>
                </div>

                <div style={styles.teamMember}>
                    <h4 style={styles.teamMemberH4}>TARUN KARRTHICK</h4>
                    <p style={styles.teamMemberP}>Email: karrthicktarun@gmail.com</p>
                    <p style={styles.teamMemberP}>LinkedIn: <a href="https://www.linkedin.com/in/tarun-karrthick-r-s-58a536258/" target="_blank" rel="noopener noreferrer" style={styles.teamMemberA}>linkedin.com/in/tarun-karrthick-r-s</a></p>
                    <p style={styles.teamMemberP}>Phone: 9750317611</p>
                    <p style={styles.teamMemberP}>GitHub: <a href="https://github.com/Tarun-karrthick-rs" target="_blank" rel="noopener noreferrer" style={styles.teamMemberA}>github.com/Tarun-karrthick-rs</a></p>
                </div>

                <div style={styles.teamMember}>
                    <h4 style={styles.teamMemberH4}>VISVESHVAR</h4>
                    <p style={styles.teamMemberP}>Email: viswa.vk@gmail.com</p>
                    <p style={styles.teamMemberP}>LinkedIn: <a href="https://www.linkedin.com/in/viswa" target="_blank" rel="noopener noreferrer" style={styles.teamMemberA}>linkedin.com/in/visva</a></p>
                    <p style={styles.teamMemberP}>Phone: 9952241830</p>
                    <p style={styles.teamMemberP}>GitHub: <a href="https://github.com/viswa" target="_blank" rel="noopener noreferrer" style={styles.teamMemberA}>github.com/visva</a></p>
                </div>
            </div>
        </section>
        </div>
    );
};

export default AboutSection;