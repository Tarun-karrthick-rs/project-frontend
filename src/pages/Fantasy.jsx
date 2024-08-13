import React, { useState } from 'react';
import Navbar from './navbar';

const playersData = [
    { id: "5080b045-75e4-492f-bdb9-c803bb7c205d", name: "Lisa Bowring", country: "Estonia" },
    { id: "2884bc9f-c993-4a7d-b72d-27fe9588246e", name: "Filippa Molsgaard", country: "Denmark" },
    { id: "cd020f6e-aa57-4f43-8280-ef0c33cf955a", name: "Rachel Merrien", country: "Guernsey" },
    { id: "ed684697-8a48-4e82-8228-f89ea2a9a3b0", name: "Seb Reckling", country: "England" },
    { id: "e927c268-d8f5-477a-9a79-8efb6b934914", name: "Yash Vagadia", country: "England" },
    { id: "9a7b4761-22b2-4fd4-9afd-a553ac6cdafb", name: "Hana Atkinson", country: "Guernsey" },
    { id: "a914ede0-f9c3-421c-b131-3eba5826dc4e", name: "Meenu Dhiman", country: "Norway" },
    { id: "4482817f-26ec-4112-b0af-a65e83584412", name: "Kiaya Pandya", country: "Denmark" },
    { id: "086a8ab2-cd6e-48ab-b41e-75d6927e6565", name: "Luise Holmgaard", country: "Denmark" },
    { id: "7caf599a-1d0f-42a7-8b8a-aa2e8a9126c6", name: "Coulter Reilly", country: "Ireland" },
    { id: "30bfb8a9-297f-408a-aa3b-d45f67089e61", name: "Alina Aslam", country: "Norway" },
    { id: "baab2ae3-7533-4af7-b43c-f3d90a4c569f", name: "Vidya Viyala", country: "Norway" },
    { id: "1634caaf-aadc-4a80-b468-be55df261b6a", name: "Nayab Razwan", country: "Norway" },
    { id: "81aa9c7b-f080-4a4b-ab8b-f5e893de5fc0", name: "Rhea Khullar", country: "Finland" },
    { id: "67187b7d-8a93-44e6-b570-63ad64914459", name: "Chihan Lay", country: "Finland" },
    { id: "0f14147f-178c-4fa0-9581-f7fcae1b140a", name: "Aanchal Khullar", country: "Finland" },
    { id: "ebfbfc9c-2b8c-4aca-bb87-313e1b0a7486", name: "Thanojiga Thavayogarajah", country: "Finland" },
    { id: "588410c7-7934-434c-8ebe-73357face817", name: "Reetika Sood", country: "Finland" },
    { id: "4f3d9299-9e35-4dc2-8058-b71f41cb37b8", name: "Mari Kojo", country: "Finland" },
    { id: "f47d8390-de04-4575-9a4b-f94d45529b83", name: "Malyun Hassan", country: "Finland" },
    { id: "2d5da441-0c23-4ace-acad-cc7888acc08c", name: "Leah Martin", country: "Finland" },
    { id: "99a8bc27-1e83-4518-bfac-b479c7642422", name: "Magdalena Kijonkova", country: "Finland" },
    { id: "2f2f950d-69e3-43f9-81b2-7f61f00441c7", name: "Haiyen Nguyen", country: "Finland" },
    { id: "cdd0844c-c5a3-4e68-9f17-ad31ea92ba99", name: "Divija Unhale", country: "Finland" },
    { id: "59ecbad8-815d-4dbd-835c-506c0753e6a7", name: "Traijila Mulepati", country: "Finland" }
];

const FantasyPlayer = () => {
    const [selectedPlayers, setSelectedPlayers] = useState(new Set());
    const [showModal, setShowModal] = useState(false);

    const togglePlayerSelection = (playerId) => {
        setSelectedPlayers(prev => {
            const newSelection = new Set(prev);
            if (newSelection.has(playerId)) {
                newSelection.delete(playerId);
            } else {
                newSelection.add(playerId);
            }
            return newSelection;
        });
    };

    const previewPlayer = (playerId) => {
        const player = playersData.find(p => p.id === playerId);
        if (player) {
            alert(`Previewing Player:\n\nName: ${player.name}\nCountry: ${player.country}`);
        }
    };

    const previewTeam = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const renderPlayers = () => (
        playersData.map(player => {
            const isSelected = selectedPlayers.has(player.id);
            return (
                <div key={player.id} style={playerCardStyle}>
                    <div style={playerInfoStyle}>
                        <h3>{player.name}</h3>
                        <p>{player.country}</p>
                    </div>
                    <button
                        style={isSelected ? removeBtnStyle : selectBtnStyle}
                        onClick={() => togglePlayerSelection(player.id)}
                    >
                        {isSelected ? 'Remove' : 'Select'}
                    </button>
                    {isSelected && (
                        <button
                            style={previewBtnStyle}
                            onClick={() => previewPlayer(player.id)}
                        >
                            Preview
                        </button>
                    )}
                </div>
            );
        })
    );

    return (
        <div>
            <Navbar />
            <br></br><br></br><br></br>
            <div style={centeredContainerStyle}>
                <div style={containerStyle}>
                    <center><h1>Select Players</h1></center>
                    <div id="player-list" style={playerListStyle}>
                        {renderPlayers()}
                    </div>
                    {selectedPlayers.size > 0 && (
                        <button
                            style={previewBtnStyle}
                            onClick={previewTeam}
                        >
                            Preview Team
                        </button>
                    )}
                    {showModal && (
                        <div style={modalStyle}>
                            <div style={modalContentStyle}>
                                <span
                                    style={closeStyle}
                                    onClick={closeModal}
                                >
                                    &times;
                                </span>
                                <h2>Your Team</h2>
                                <ul id="selected-players-list" style={selectedPlayersListStyle}>
                                    {[...selectedPlayers].map(playerId => {
                                        const player = playersData.find(p => p.id === playerId);
                                        return player ? (
                                            <li key={player.id} style={selectedPlayerItemStyle}>
                                                {`${player.name} (${player.country})`}
                                            </li>
                                        ) : null;
                                    })}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const centeredContainerStyle = {
    paddingLeft:'19%',
};

const containerStyle = {
    padding: '20px',
    textAlign: 'center',
    maxWidth: '800px',
    width: '100%',
};

const playerListStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '20px',
    paddingTop: '20px',
    paddingLeft:'0'
};

const playerCardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
};

const playerInfoStyle = {
    marginBottom: '10px',
};

const selectBtnStyle = {
    marginTop: '10px',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    backgroundColor: '#000', 
    color: '#ffd700', 
};

const removeBtnStyle = {
    marginTop: '10px',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    backgroundColor: '#dc3545',
    color: '#fff',
};

const previewBtnStyle = {
    marginTop: '10px',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    backgroundColor: '#ffc107',
    color: '#000',
};

const modalStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const modalContentStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    width: '80%',
    maxWidth: '600px',
    position: 'relative',
};

const closeStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '24px',
    cursor: 'pointer',
};

const selectedPlayersListStyle = {
    listStyleType: 'none',
    padding: '0',
};

const selectedPlayerItemStyle = {
    padding: '10px',
    borderBottom: '1px solid #ddd',
};

export default FantasyPlayer;
