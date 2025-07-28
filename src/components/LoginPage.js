import React from 'react';
import { useNavigate, Link } from 'react-router-dom';


export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div style={{
      height: '100vh',
      margin: 0,
      background: `
        linear-gradient(
          to bottom,
          #2a2a2a 0%,
          #292929 10%,
          #292929 10%,
          #242424 20%,
          #242424 20%,
          #1f1f1f 30%,
          #1f1f1f 30%,
          #1a1a1a 40%,
          #1a1a1a 40%,
          #151515 50%,
          #151515 50%,
          #101010 60%,
          #101010 60%,
          #0b0b0b 70%,
          #0b0b0b 70%,
          #060606 80%,
          #060606 80%,
          #030303 90%,
          #030303 90%,
          #000000 100%
        )
      `,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        backgroundColor: '#121212',
        padding: '48px',
        borderRadius: '12px',
        width: '100%',
        maxWidth: '700px',
        height: '600px',
        color: 'white',
        boxShadow: '0 0 20px rgba(0,0,0,0.6)'
      }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <span className="material-icons" style={{ fontSize: '56px', color: '#75eff3ff' }}>
          calendar_today
        </span>

        <h1
          style={{
            marginTop: '30px',
            fontSize: '38px',
            fontWeight: 'bold',
            fontStyle: 'normal'
          }}
        >
          Log in to Dashboard
        </h1>
      </div>



       <form
  onSubmit={handleLogin}
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '24px',
    width: '100%'
  }}
>
  <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
    <input
      type="email"
      placeholder="Enter your email"
      required
      style={inputStyle}
    />
  </div>
  <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
    <input
      type="password"
      placeholder="Enter your password"
      required
      style={inputStyle}
    />
  </div>
  <button type="submit" style={submitBtnStyle}>Continue</button>
</form>



        <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '15px' }}>
          <Link to="/" style={{ color: '#888', textDecoration: 'none' }}>
            Back to Landing Page
          </Link>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '80%',          
  maxWidth: '400px',
  padding: '16px',
  borderRadius: '6px',
  backgroundColor: '#121212',
  color: '#fff',
  border: '1px solid #555',
  fontSize: '16px',
  boxSizing: 'border-box',
  display: 'block'
};



const submitBtnStyle = {
  padding: '16px',
  backgroundColor: '#75eff3ff',
  color: '#000',
  fontWeight: 'bold',
  fontSize: '16px',
  borderRadius: '30px',
  border: 'none',
  cursor: 'pointer',
  width: '100%'
};
