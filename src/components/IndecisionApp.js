import React from "react";

import Header from "./Header";
import Action from "./Action";
import AddOption from "./AddOption";
import Options from "./Options"

export default class IndecisionApp extends React.Component {
    //properties
    state = {
        options: []
    };
    //methods
    handleDeleteOptions = () => {
        this.setState(() => ({ options : [] }));
    };
    
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options : prevState.options.filter((option) => optionToRemove !== option)
        }));
    };
    
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    };
    
    handleAddOption = (option) => {
        if (!option) {
            return "Enter valid option to add item!";
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists!"
        }
        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));
    };
    //lifecycle methods
    componentDidMount(){
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            };
        } catch (error) {
            //Do nothing at all
        }
    };

    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json)
        }
    };

    render() {
        const subtitle = "Let the Matrix decide for you..."
        return (
            <div>
            <Header subtitle={subtitle}  />
            <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
            />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    };
};