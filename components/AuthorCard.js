import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { deleteSingleAuthor } from '../api/authorData';

function AuthorCard({ authorObj, onUpdate }) {
  const deleteThisAuthor = () => {
    if (window.confirm(`Delete ${authorObj.first_name}?`)) {
      deleteSingleAuthor(authorObj.firebaseKey).then(() => onUpdate());
    }
  };
  return (

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{authorObj.first_name} {authorObj.last_name}</Card.Title>
        <Card.Text>
          {authorObj.email}
        </Card.Text>
        <Button variant="danger" onClick={deleteThisAuthor}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

AuthorCard.propTypes = {
  authorObj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    favorite: PropTypes.bool,
    email: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
export default AuthorCard;
