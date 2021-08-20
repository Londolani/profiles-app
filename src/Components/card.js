import React from 'react';

const card = (props) => {
    const avatar = `https://i.pravatar.cc/150?img=${props.name}`;
    //const avatar = "https://i.pravatar.cc/150?img="+ props.avatar+"";
    return(
        <div className="col-md-4">
            <div className="card">
              <img src={avatar} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">{props.job}</a>
              </div>
            </div>
          </div>
    );
}

export default card;