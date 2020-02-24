import React from 'react';

const NextButton = ({pageChangePlus}) => {
	return (
		<div className="flex items-center justify-center pa2 grow">
		  <a href="#"
		  className="f5 no-underline black bg-white hover-bg-black hover-white
		  inline-flex items-center pa3 ba border-box mr1" 
		  onClick={pageChangePlus}>Next</a>
		</div>
		)
	}

export default NextButton;