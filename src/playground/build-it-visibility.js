class Visibility extends React.Component {
    constructor(props){
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility : false
        };
    };
    toggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility : ! prevState.visibility
            };
        });
    };
    render () {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
                {this.state.visibility && <p>Hey! Check this crazy stuff that is fun to see!</p>}
            </div>
        );
    };
};

ReactDOM.render(<Visibility />, document.getElementById("app"));
//------------------------------------------------
//Old code
//------------------------------------------------

// let visibility = true;
// const toggleVisibility = () => {
//     visibility = !visibility;
//     renderApp();
// };

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>{visibility ? "Hide Details" : "Show Details" }</button>
//             {visibility && <p>Hey! Here you can see some stuff that is crazy to see.</p>}
//         </div>
//     );
    
//     ReactDOM.render(template, appRoot);
// };

// const appRoot = document.getElementById("app");

// renderApp();