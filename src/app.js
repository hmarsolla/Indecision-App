console.log("App.js is running");

const app = {
    title : "Indecision App",
    subtitle :"Let the Matrix decide for you",
    options: []
};

const appRoot = document.getElementById("app");

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    
    if (option.trim()){
        app.options.push(option);
        e.target.elements.option.value = "";
        renderApp();
    }
};

const removeAll = () => {
    app.options = []
    renderApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const renderApp = () => {
    const template = ( 
        <div>
            <h1 id="someId">{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}

            <p>{app.options.length ? "Here are your options" : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I Do?</button>
            <button onClick={removeAll}>Remove All</button>
            
            <ol>
                {app.options.map((item) => <li key={item}>{item}</li>)}
            </ol>
            
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot)
};

renderApp();