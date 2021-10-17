import { getByTitle } from '@testing-library/dom';
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import MainMenuItem from './MainMenuItem/MainMenuItem';

const MenuInfo = ({ items }) => {
	//Shuffle data
	const shuffle = (arra1) => {
		var ctr = arra1.length,
			temp,
			index;

		// While there are elements in the array
		while (ctr > 0) {
			// Pick a random index
			index = Math.floor(Math.random() * ctr);
			// Decrease ctr by 1
			ctr--;
			// And swap the last element with it
			temp = arra1[ctr];
			arra1[ctr] = arra1[index];
			arra1[index] = temp;
		}
		return arra1;
	};
	const newItems = shuffle(items);

	return (
		<div className="container py-3">
			<div className="row">
				{newItems.slice(0, 6).map((menuItem) => (
					<MainMenuItem menuItem={menuItem} key={menuItem.id} />
				))}
			</div>
		</div>
	);
};

export default MenuInfo;
