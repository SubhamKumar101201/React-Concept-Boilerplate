import React, { useState , useCallback , useEffect , useRef } from 'react'

function PasswordGenarator() {

  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);

  const [password, setPassword] = useState("");

  //useRef hook

  const passwordRef = useRef(null)

  const passGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllow) str += '01234567890'
    if (charAllow) str += '!@#$%^&*()-_=+[{]};:,<.>/?`~\|'

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllow, charAllow, setPassword])

  useEffect(() => {
    passGenerator()
  },[length, numberAllow, charAllow, passGenerator])
  
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <div className='min-h-screen bg-black border'>
      <div className='w-full max-w-md shadow-md mx-auto rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 border-blue-800 border'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shoadow rounded-lg overflow-hidden mb-4 mt-2'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button 
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numberAllow}
            onChange={() => {
              setNumberAllow((prev) => !prev)
            }}
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={charAllow}
            onChange={() => {
              setCharAllow((prev) => !prev)
            }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </div>

  )
}

export default PasswordGenarator