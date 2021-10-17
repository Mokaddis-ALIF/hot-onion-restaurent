import React, { useState } from 'react';
import './Menu.css';
import items from './data';
import { Container, Row } from 'react-bootstrap';
import MenuInfo from './MainMenu/MenuInfo';
import Categories from './MainMenu/Categories';
import HeaderImg from '../HeaderImg/HeaderImg';
import OurDetails from './OurDetails/OurDetails';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const Menu = () => {
	const [menuItem, setMenuItem] = useState(items);
	const [categories, setCategories] = useState(allCategories);

	const filterItems = (category) => {
		if (category === 'all') {
			setMenuItem(items);
			return;
		}
		const newItems = items.filter((item) => item.category === category);
		console.log(newItems);

		setMenuItem(newItems);
	};

	return (
		<main>
			<HeaderImg />

			<section className="menu-section py-3 my-2">
				<Categories categories={categories} filterItems={filterItems} />
				<MenuInfo items={menuItem} />
			</section>
			<OurDetails />
		</main>
	);
};

export default Menu;
