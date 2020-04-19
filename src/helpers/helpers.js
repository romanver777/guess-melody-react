const getRandomNumber = (min, max) =>  Math.floor(Math.random() * max);

const shuffle = (number, arr) => {

	for(let i = 0; i < arr.length; i++){

		let j = getRandomNumber(i, arr.length);
		let temp = arr[j];

		arr[j] = arr[i];
		arr[i] = temp;
	}

	return arr.slice(0, number);
};

const getOptions = (number, tracks) => shuffle(number, tracks);

let getArrayAnswerGenre = (tracksObj, genreStr) => {

	let arr = [];

	for (let track of tracksObj) {

		if (track.genre.indexOf(genreStr) > -1) {

			arr.push(track.id);
		}
	}
	return arr;
};

const getTitleGenre = (genre) => {

	const str = `Выберите треки`;

	const arr = str.split(' ');

	arr.splice(1, 0, genre);

	return arr.join(' ');
};

const getQuests = (tracks, number) => {

	let arr = new Set();

	for(let i = 0; i < number; i++) {

		!(i % 2) ? arr.add(getArtistLevel(tracks))
			: arr.add(getGenreLevel(tracks))
	}
	return [...arr];
};

const getArtistLevel = (tracks) => {

	const numberTracks = 3;

	return {
		type: 'artist',
		title: 'Кто исполняет эту песню?',
		options: getOptions(numberTracks, tracks),
		answer: {id: getRandomNumber(0, numberTracks)}
	}
};

const getGenreLevel = (tracks) => {

	const numberTracks = 4;

	let tracksOption = getOptions(numberTracks, tracks);
	let trackGenreArr = tracks[getRandomNumber(0, numberTracks)].genre;
	let genreAnswer = trackGenreArr[getRandomNumber(0, trackGenreArr.length)];

	return {
		type: 'genre',
		title: getTitleGenre(genreAnswer),
		options: tracksOption,
		answer: {
			genre: genreAnswer,
			id: getArrayAnswerGenre(tracksOption, genreAnswer)
		}
	}
};

export default getQuests;
