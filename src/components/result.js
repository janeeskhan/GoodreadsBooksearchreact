import React from "react";
import { Link } from "react-router-dom";

class Result extends React.Component {
  render() {
    let ResultArray = this.props.location.BookSelect;
    
    return (
     
      <div className="container">
        <div className="row">
          {ResultArray.map(Book => (

            <div className="card  col-lg-2 col-sm-6 col-md-3 mt-1 ml-1" key={Book.best_book.id._text}>

              <Link to={{ pathname: "/BookDetails", BookSelect: Book }} >

                <img
                  className="card-img-top image-thumbnail mt-1"
                  src={Book.best_book.image_url._text}
                  alt="Book cover"
                  height="250px" />
                <div>
                  <p className="text-sm-left card-title font-weight-bold">
                    <span>
                      <strong> Title : </strong> {Book.best_book.title._text} </span> </p>
                </div>
              </Link>
              <div>
                <span className="span">
                  <strong>By:</strong> {Book.best_book.author.name._text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
     
    )
  }
}
export default Result;