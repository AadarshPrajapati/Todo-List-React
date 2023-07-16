import React from 'react'

export const Footer = () => {
  let footerStyle={
    position: "fixed",
    bottom: 0,
    width: "100%",
    height:"5%"
  }
  return (
    <footer className="bg-dark text-light" style={footerStyle}>
      <p className="text-center p-2">Copyright &copy; MyTodosList.com</p>
    </footer>
  )
}
