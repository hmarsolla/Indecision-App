let visibility = true;
const toggleVisibility = () => {
    visibility = !visibility;
    renderApp();
};

const renderApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{visibility ? "Hide Details" : "Show Details" }</button>
            {visibility && <p>Hey! Here you can see some stuff that is crazy to see.</p>}
        </div>
    );
    
    ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");

renderApp();