console.log("App.js is running");

var app = {
    title : "Indecision App",
    subtitle :"Let the Matrix decide for you"
};

// JSX - JavaScript XML
var template = ( 
    <div>
        <h1 id="someId">{app.title}</h1>
        <p>{app.subtitle}</p>
    </div>
);

var user = {
    name : "Johnny boy",
    age : "17",
    location : "São Paulo"
};

var templateTwo = (
    <div>
        <h1 id="name">{user.name}</h1>
        <p id="age">Age: {user.age}</p>
        <p id="userLocation">Location: {user.location}</p>
    </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);