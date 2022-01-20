import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./SingleCard.css";

import ReactImageTooltip from "react-image-tooltip";

const SingleCard = (props) => {
    const { name, img, siteLink, frontSideCode, backSideCode, usedTechnology } = props.singleCard;

    return (
        
        <Col>
        <div className="card d-flex flex-lg-row justify-content-center align-items-center text-lg-start shadow p-3 bg-dark">
                <div className="w-100">
                    <ReactImageTooltip image={img}>
                        <h3 className="text-danger">{name}</h3>
                    </ReactImageTooltip>
                </div>

                <div className="w-100">
                        <h6 className="text-warning"><strong>Used Technology:</strong></h6>
                        <h6 className="text-wrap text-light"> {usedTechnology} </h6>
                    
                </div>

                <div className="w-100 text-center m-2 d-flex flex-lg-column justify-content-center align-items-center">
                    <h1 className="mx-2"><a href={siteLink} title="Live Site"><i class="fas fa-globe text-light"></i></a></h1>
                    <h1 className="mx-2"><a href={frontSideCode} title="Client Side Code" className="mx-2"><i class="fas fa-code text-light"></i></a> <a href={backSideCode} title="Server Side Code" className="mx-2"><i class="fas fa-sitemap text-light"></i></a></h1>
                </div>
            </div>
        </Col>
        
    );
};

export default SingleCard;
