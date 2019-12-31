import React from "react";

class BookDetails extends React.Component {

  render() {

    let Array1 = this.props.location.BookSelect;
    return (
      <div class="container">
        <div className="card  col-lg-3 col-sm-3 col-md-3 mt-1 ml-1"
          key={Array1.best_book.id._text} >

          <img className="card-img-top image-thumbnail mt-1"
            src={Array1.best_book.image_url._text}
            alt="Card image cap"
            height="250px" />

          <p className="text-sm-left card-title font-weight-bold">
            <strong>Title:</strong>{Array1.best_book.title._text} </p>
          <div>

            <div className="text-sm-left card-title font-weight-italic">
              <strong>By:</strong> {Array1.best_book.author.name._text}</div>
              
              <div className="text-sm-left card-title font-weight-italic">
              <strong>Publsih year:</strong>{Array1.original_publication_year._text}</div>
            
            <div className="text-sm-left card-title font-weight-italic">
              <strong>Ratings:</strong>{Array1.ratings_count._text}</div>

            <div className="text-sm-left card-title font-weight-italic">
              <strong>Average Rating:</strong>{Array1.average_rating._text}</div>

             
          </div>
        </div>
      </div>
    )
  }
}
export default BookDetails;