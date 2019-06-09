import React, {Component} from 'react';
import './App.css';
import {recipes} from "./tempList";
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

class App extends Component {

    state = {
        recipes: recipes,
        url: 'https://www.food2fork.com/api/search?key=143a26f910ff7533195caec3e8fe0d6c&q=chicken%20breast&page=2',
        details_id:35386,
        pageIndex:0
    };

    async getRecipes() {
        try {
            const data = await fetch(this.state.url);
            const jsonData = await data.json();
            this.setState({
                recipes: jsonData.recipes
            });
        } catch (e) {
            console.log('Ups coś poszło nie tak! Recipes API message: ' + e);
        }
    }

    componentDidMount() {
        this.getRecipes();
    }

    displayPage = (index)=>  {
        switch (index) {
            default:
            case 1:
                return(<RecipeList recipes={this.state.recipes} handleDetails={this.handleDetails} />)
            case 0:
                return (<RecipeDetails id={this.state.details_id} handleIndex={this.handleIndex} />)
        }
    };

    handleIndex = index => {
        this.setState({
            pageIndex:index
        });
    };

    handleDetails = (index, id) => {
        this.setState({
            pageIndex:index,
            details_id:id
        });
    };

    render() {
        return (
            <React.Fragment>
                {this.displayPage(this.state.pageIndex)}
            </React.Fragment>
        );
    }
}


export default App;
