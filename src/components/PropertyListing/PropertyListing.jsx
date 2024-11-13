//Global
import React from "react";
import PropTypes from "prop-types";

// Components
import PropertyCard from '../PropertyCard';

// Style
import './PropertyListing.scss';

const PropertyListing = ({ properties }) => {
    return (
        <ul className="PropertyListing">
            {properties.map((property, index) => {
                return (
                    <li key={`${property.id}-${index}`}>
                        <PropertyCard {...property} />
                    </li>);
            })}
        </ul>
    );
};

PropertyListing.propTypes = {
    properties: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            bedrooms: PropTypes.number,
            summary: PropTypes.string,
            displayAddress: PropTypes.string,
            propertyType: PropTypes.string,
            price: PropTypes.number,
            branchName: PropTypes.string,
            propertyUrl: PropTypes.string,
            contactUrl: PropTypes.string,
            propertyTitle: PropTypes.string,
            mainImage: PropTypes.string
        })
    ),
};

export default PropertyListing;
