const element = (
  <div>
    <div className="congrats-cont">
      <h1 className="greeting">Congratulations</h1>
      <div className="congrats-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          className="profile"
        />
        <h1 className="name">Kiran V</h1>
        <p className="des">
          vishnu institute of computer Education and Technology,Bhimavaram{" "}
        </p>
        <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
