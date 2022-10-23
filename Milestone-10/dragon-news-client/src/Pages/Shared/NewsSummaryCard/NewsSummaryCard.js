import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsSummaryCard = ({ news }) => {

    const { _id, title, total_view, image_url, rating, details, author } = news;
    return (
        <div>

            <Card className="mb-5">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <Image
                            src={author.img}
                            roundedCircle
                            className='me-2'
                            style={{ height: '40px' }}
                        ></Image>
                        <div>
                            <p className='my-0'>{author.name}</p>
                            <p className='my-0'>{author.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaRegBookmark></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant='top' src={image_url} />
                    <>
                        {
                            details.length > 250 ?
                                <p>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link> </p>
                                :
                                <p>{details}</p>
                        }
                    </>

                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                    <div className='d-flex align-items-center justify-content-between '>
                        <FaStar className='text-warning me-1'></FaStar>
                        <span>{rating.number}</span>
                    </div>

                    <div>
                        <FaEye className='me-1'></FaEye>
                        <span>{total_view}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;