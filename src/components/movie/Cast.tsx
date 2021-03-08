import React from 'react';
import Form from 'react-bootstrap/Form';
import Actor from 'components/movie/Actor';

const Cast = () => {
  console.log('Hello');
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="movie-cast">
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="list-title list-title-dark mb-4">Actors</h3>
        <div className="custom-control custom-switch pr-5 info">
          <Form>
            <Form.Group controlId="show-all">
              <Form.Label htmlFor="show-all" className="custom-control-label">
                Show all
              </Form.Label>
              <Form.Control type="checkbox" className="custom-control-input info" />
            </Form.Group>
          </Form>
        </div>
      </div>
      <div className="movie-cast__list d-flex flex-wrap justify-content-md-center justify-content-lg-start justify-content-center align-items-stretch">
        {arr.map((item) => (
          <Actor key={item} />
        ))}
      </div>
    </div>
  );
};
export default Cast;