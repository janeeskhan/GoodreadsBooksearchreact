import React from "react";
import AutoCompleteText from "./AutoCompleteText.js";
const convert = require("xml-js");

class LandingPage extends React.Component {
    state = {
        searchtext: "",
        suggestionsArray: [],
        error: "",
        open: false
    };

    suggestionSelected = (value) => {
        this.setState(() => ({
            text: value,
            suggestionsArray: [],
        }
        )
        )
    }

    suggestion = value => {
        this.setState({ text: value });
    };

    onTextChange = e => {
        const value = e.target.value;
        this.setState({
            searchtext: value
        });

        fetch(
            `https://www.goodreads.com/search/index.xml?key=l7qiXtcIr7A2PzHh726pBg&q=${e.target.value}`
        )
            .then(async res => {
                const value = await res.text();
                const result = convert.xml2json(value, { compact: true });
                const myObj = JSON.parse(result);
                
                let SearchingArray = [];
                SearchingArray.push(myObj);
                

                let suggestionsArray = SearchingArray[0].GoodreadsResponse.search.results.work;

                this.setState({
                    suggestionsArray: [...suggestionsArray],
                });
               
            })
            .catch(error => {
                this.setState({
                    error: error.toString(),
                });
            });
    };

    render() {

        return (
            < div className="container">
                <div className="header clearfix mt-5" >

                    <h2 className=" text "> Goodreads Book Search </h2> </div >
                    {/* <p>This is a <span class="janees123">red</span> word in a sentence</p> */}

                <AutoCompleteText
                    Books={this.state.suggestionsArray}
                    onChange={this.onTextChange}
                    suggestionSelected={this.suggestion}
                   text={this.state.text} >
                </AutoCompleteText>
            </ div>
        );
    }
}
export default LandingPage;