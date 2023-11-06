/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  // State variables
  const [lenght, setLenght] = useState(8); // Password length state
  const [number, setNumber] = useState(false); // Include numbers in password state
  const [specialChar, setSpecialChar] = useState(false); // Include special characters in password state
  const [Password, setPasswords] = useState(""); // Generated password state

  // useRef hook for accessing the input element
  const passRefrence = useRef(null);

  // Function to generate a password based on the current settings
  const passGen = useCallback(() => {
    let pass = "";
    let str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";

    // Include numbers in the password if the 'number' state is true
    if (number) {
      str += "1234567890";
    }
    
    // Include special characters in the password if the 'specialChar' state is true
    if (specialChar) {
      str += "!@#$%^&*()_<>?:{}[]";
    }

    // Generate the password by randomly selecting characters from the combined character set
    for (let i = 1; i <= lenght; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    // Set the generated password to the state
    setPasswords(pass);
  }, [lenght, number, specialChar, setPasswords]);

  // Function to copy the generated password to the clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passRefrence.current?.select();
    passRefrence.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  // useEffect hook to generate a password whenever there is a change in relevant settings
  useEffect(() => {
    passGen();
  }, [lenght, number, specialChar, passGen]);

  // Render the UI
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center'>Password generator</h1>
        
        {/* Password input and copy button */}
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={Password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passRefrence}
          />
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-stone-300 px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        
        {/* Settings for password generation */}
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={lenght}
              className='cursor-pointer'
              onChange={(e) => { setLenght(e.target.value) }}
            />
            <label>Length: {lenght}</label>
          </div>
          
          {/* Checkbox for including numbers in the password */}
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={number}
              id='numberInput'
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor='numberInput'>Number</label>
          </div>

          {/* Checkbox for including special characters in the password */}
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={specialChar}
              id='characterInput'
              onChange={() => {
                setSpecialChar((prev) => !prev);
              }}
            />
            <label htmlFor='characterInput'>Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
