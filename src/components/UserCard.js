import React from 'react';

function importImages(r) {
	console.log(r);
  return r.keys().map(r);
}


const CharactersImage = importImages(require.context('./CharactersImages/', false, /\.(png|jpe?g|svg)$/))

const UserCard = ({info, id}) => {
	const filteredImage = CharactersImage.filter(x=> x.includes(`/${id+1}.`))[0];
	return (
			<div className='tc grow bg-lightest-blue br3 pa3 ma2 dib bw2 shadow-5'>
			<img alt='Character' src={`${filteredImage}`} height='250' width='200'/>
		      <div>
		        <h2>{info.name}</h2>
		        <p>Birth year: {info.birth_year}</p>
		      </div>
		    </div>
		)
}

export default UserCard;