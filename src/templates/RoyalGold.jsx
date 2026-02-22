import React from 'react'

const RoyalGold = ({data}) => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Royal Gold Wedding</h1>

        <h2 style={styles.names}>
          {data.groom} ❤️ {data.bride}
        </h2>

        <p style={styles.text}>Date: {data.date}</p>
        <p style={styles.text}>Venue: {data.venue}</p>
      </div>
    </div>
  )
}
  const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #000000, #3b2a00)",
    fontFamily: "serif"
  },

  card: {
    padding: "40px",
    border: "3px solid gold",
    borderRadius: "12px",
    backgroundColor: "#111",
    color: "gold",
    textAlign: "center",
    width: "400px",
    boxShadow: "0 0 25px rgba(255,215,0,0.6)"
  },

  title: {
    fontSize: "36px",
    marginBottom: "20px"
  },

  names: {
    fontSize: "28px",
    marginBottom: "20px"
  },

  text: {
    fontSize: "18px",
    margin: "8px 0"
  }
}



export default RoyalGold