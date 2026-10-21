import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
      const NAMA_PANGGILAN = 'Ayub';
    const N = 25;
        const gayaJudul = {
        color: '#00baf3',
        fontSize: '28px',
        fontWeight: 700,
        letterSpacing: '0.5px'
    }
function App() {

    const jam = 9;

 return(
  < >
  
    <h1 className="judul" style={gayaJudul}>
      KANTIN {NAMA_PANGGILAN}
    </h1>
    <p>
      {jam < 12 ? 'Selamat Pagi' : 'Selamat Siang'}
    </p>
    <p>
      Saldo awal kartu : {N*1000}
    </p>
    <button disabled = {true} >Bayar</button>
  </>
 )
}

export default App
