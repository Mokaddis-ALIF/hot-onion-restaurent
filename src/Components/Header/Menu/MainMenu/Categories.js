import React from 'react';

const Categories = ({ categories, filterItems }) => {
	return (
		<div className="d-flex flex-row justify-content-center">
			{categories.map((category, index) => {
				return (
					<button
						type="button"
						className="btn btn-outline-warning mx-2"
						key={index}
						onClick={() => filterItems(category)}
					>
						{category}
					</button>
				);
			})}
		</div>
	);
};

export default Categories;
