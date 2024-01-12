import React, { useState } from 'react';
import './../App.css';
import IconButton from '@mui/material/IconButton';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';



function InputBox({ onSubmit }) {
    const [inputValue, setInputValue] = useState('');
    const [isMuted, setIsMuted] = useState(false);
    const [isVolumeOn, setIsVolumeOn] = useState(true);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        if (inputValue.trim() !== '') {
            onSubmit(inputValue);
            setInputValue('');
        }
    };


    const handleMicrophoneClick = () => {
        // Toggle the mute state
        setIsMuted((prevMuted) => !prevMuted);
    
        // Handle other click logic if needed
      };
    
      const handleSpeakerClick = () => {
        // Toggle the volume state
        setIsVolumeOn((prevVolume) => !prevVolume);
    
        // Handle other click logic if needed
      };

      const handleResetClick = () => {
        // Reset both microphone and volume states
        setIsMuted(false);
        setIsVolumeOn(true);
    
      };
    

    return (
        <div className="input-box">
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type your message..."
            />
        <IconButton color="primary" onClick={handleMicrophoneClick}>
            {isMuted ? <MicOffIcon /> : <MicIcon />}
        </IconButton>
        <IconButton color="primary" onClick={handleSpeakerClick}>
            {isVolumeOn ? <VolumeUpIcon /> : <VolumeOffIcon />}
        </IconButton>
        <IconButton color="primary" onClick={handleResetClick}>
            <SettingsBackupRestoreIcon />
        </IconButton>
            <button onClick={handleSubmit}>Send</button>
        </div>
    );
}

export default InputBox;