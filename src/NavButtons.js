import React from 'react';
import NextButton from './NextButton';
import PrevButton from './PrevButton';

const NavButtons = ({pageChangePlus, pageChangeMinus}) => {
	return (
		<div className='flex flex-wrap justify-center'>
		     <PrevButton pageChangeMinus={pageChangeMinus}/>
     		 <NextButton pageChangePlus={pageChangePlus}/>
		</div>
		)
}
export default NavButtons;