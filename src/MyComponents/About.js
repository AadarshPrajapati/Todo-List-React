import React from 'react'

export const About = () => {
    const linkedInURL = 'https://www.linkedin.com/in/aadarsh-prajapati-243787225/';

  return (
        <div className="jumbotron container my-5">
        <h1 className="display-4">Made with ❤️ in India</h1>
        <p className="lead">
          Hello! I'm Aadarsh Prajapati, a passionate web developer from India. This Todo List app is my labor of love, showcasing my skills and expertise in creating user-friendly web applications.
        </p>
        <p>
          Features:
          <ul>
            <li>Add and Remove Todos: Easily manage your tasks with the user-friendly interface.</li>
            <li>Data Persistence: Your tasks are securely stored and always available.</li>
          </ul>
        </p>
        <hr className="my-4"/>
        <p>Stay organized and boost your productivity with this beautifully crafted Todo List app. Experience the joy of managing your tasks efficiently and crossing them off your list!</p>
        <p className="lead">
            <a className="btn btn-primary btn-lg" href={linkedInURL} target='_blank' role="button">Contact Me</a>
        </p>
    </div>
  )
}
