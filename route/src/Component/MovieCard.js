import { Button , Card } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'

export const MovieCard = ({movie}) => {
    return (
        <div>
          <Link to={`/movie/${movie.ID}`}>
            <Card style={{ color:"gray", width: '18rem', backgroundColor:"rgb(66, 66, 66)"}}>
  <Card.Img variant="top" src={movie.posterUrl} />
  <Card.Body>
    <Card.Title>{movie.name}</Card.Title>
    <Card.Text>
      {movie.description}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </Link>    
        </div>
    )
}
