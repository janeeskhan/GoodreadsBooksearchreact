import React from 'react';
import { Link } from "react-router-dom";


class AutoCompleteText extends React.Component {

    onTextChange = e => {
        this.props.onChange(e);
    };

    AutoSuggestions = () => {
        let suggestions = this.props.Books;
        
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul className="suggestions">
                {suggestions.slice(0, 5).map(Book => (
                    <div key={Book.best_book.id._text}>
                        <li onClick={() => this.props.Book}>

                            <Link to={{ pathname: "/BookDetails", BookSelect: Book }} >
                                
                                <img src={Book.best_book.small_image_url._text} />
                                
                                <div className="Title">
                                    <span> <strong> Title :</strong>{Book.best_book.title._text}</span>
                                    <div>
                                        
                                        <span className="span">
                                            <strong>By:</strong> {Book.best_book.author.name._text}</span>
                                    </div>
                                </div>
                            </Link>
                        </li>

                    </div>
                ))}
                <button className="janees"> <Link to={{ pathname: "/result", BookSelect: suggestions }} > see all result </Link> </button>
            </ul>
        );
    };
    render() {
        AutoCompleteText = this.props;
        return (
            <div>
                <input
                    onChange={this.onTextChange}
                    value={this.props.text}
                    className="search"
                    placeholder="Search Your Favourite Book Here" />
                {this.AutoSuggestions()}
            </div>
        );
    }
}
export default AutoCompleteText;

