const gameData = {
	time: 5,
	mistakes: 3,
	quests: [
		{
			type: 'artist',
			title: 'Кто исполняет эту песню?',
			options: [
				{
					id: 0,
					title: 'BORNS',
					imgSrc: 'img/artist/borns.jpg'
				},
				{
					id: 1,
					title: 'The Doors',
					imgSrc: 'img/artist/thedoors.jpg'
				},
				{
					id: 2,
					title: 'Team Sleep',
					imgSrc: 'img/artist/team-sleep.jpg'
				}
			],
			answer: {
				id: 2
			}
		},
		{
			type: 'genre',
			title: 'Выберите rock треки',
			options: [
				{
					id: 0,
					src: ''
				},
				{
					id: 1,
					src: ''
				},
				{
					id: 2,
					src: ''
				},
				{
					id: 3,
					src: ''
				}
			],
			answer: {
				genre: 'rock',
				id: [0, 3]
			}
		},
		{
			type: 'artist',
			title: 'Кто исполняет эту песню?',
			options: [
				{
					id: 1,
					title: 'The Doors',
					imgSrc: 'img/artist/thedoors.jpg'
				},
				{
					id: 2,
					title: 'Team Sleep',
					imgSrc: 'img/artist/team-sleep.jpg'
				},
				{
					id: 0,
					title: 'BORNS',
					imgSrc: 'img/artist/borns.jpg'
				}
			],
			answer: {
				id: 2
			}
		},
		{
			type: 'genre',
			title: 'Выберите indie треки',
			options: [
				{
					id: 0,
					src: ''
				},
				{
					id: 1,
					src: ''
				},
				{
					id: 2,
					src: ''
				},
				{
					id: 3,
					src: ''
				}
			],
			answer: {
				genre: 'rock',
				id: [0, 3]
			}
		}
	]
};

export default gameData;
