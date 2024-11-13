// Global
import React from 'react';
import { render, screen } from '@testing-library/react';
import { waitForElementToBeRemoved, within } from '@testing-library/dom';

// Components
import App from "../App";

const MOCKED_PROPERTY = {
  id: 73864112,
  bedrooms: 3,
  summary: 'Property 1 Situated moments from the River Thames in Old Chelsea...',
  displayAddress: '1 CHEYNE WALK, CHELSEA, SW3',
  propertyType: 'Flat',
  price: 1950000,
  branchName: 'M2 Property, London',
  propertyUrl: '/property-for-sale/property-73864112.html',
  contactUrl: '/property-for-sale/contactBranch.html?propertyId=73864112',
  propertyTitle: '3 bedroom flat for sale',
  mainImage:
    'https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37655/53588679/37655_CAM170036_IMG_01_0000_max_476x317.jpg',
};

global.fetch = jest.fn();


describe('App', () => {
  it('should fetch and render data on the page', async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve(Array(5).fill(MOCKED_PROPERTY))
      })
    );

    render(<App />);

    await waitForElementToBeRemoved(() => screen.queryByText('Loading properties...'));

    const propertiesList = screen.getByRole('list');
    const propertyCards = await within(propertiesList).findAllByRole('listitem');

    expect(propertyCards).toHaveLength(5);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
