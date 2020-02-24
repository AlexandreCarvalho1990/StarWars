import React from 'react'


const UserCard = ({info, id}) => {
	return (
			<div className='tc grow bg-lightest-blue br3 pa3 ma2 dib bw2 shadow-5'>
			<img alt='Character' src={`https://robohash.org/${id}?size=200x200`} />
		      <div>
		        <h2>{info.name}</h2>
		        <p>Height: {info.height}</p>
		        <p>Birth year: {info.birth_year}</p>
		      </div>
		    </div>
		)
}

export default UserCard;