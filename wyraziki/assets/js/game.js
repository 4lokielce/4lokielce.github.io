let beginner;let intermediate;let advanced;let fullList;let currentRow = 0;let nextRowBlock = 0;let score = 0;let remNotification = 0;let gameFin = 0;let gameOn = 0;let maxBlock = 6;let level = 'początkujący';let difficulty = 'łatwy';let mustUse = '';let bestStreak = 0;let currentStreak = 0;let userScore = 0;let scoreEasyBeginner2 = 0;let scoreEasyIntermediate2 = 0;let scoreEasyAdvanced2 = 0;let scoreEasyGod2 = 0;let scoreEasyBeginner3 = 0;let scoreEasyIntermediate3 = 0;let scoreEasyAdvanced3 = 0;let scoreEasyGod3 = 0;let scoreEasyBeginner4 = 0;let scoreEasyIntermediate4 = 0;let scoreEasyAdvanced4 = 0;let scoreEasyGod4 = 0;let scoreEasyBeginner5 = 0;let scoreEasyIntermediate5 = 0;let scoreEasyAdvanced5 = 0;let scoreEasyGod5 = 0;let scoreEasyBeginner6 = 0;let scoreEasyIntermediate6 = 0;let scoreEasyAdvanced6 = 0;let scoreEasyGod6 = 0;let scoreDifficultBeginner2 = 0;let scoreDifficultIntermediate2 = 0;let scoreDifficultAdvanced2 = 0;let scoreDifficultGod2 = 0;let scoreDifficultBeginner3 = 0;let scoreDifficultIntermediate3 = 0;let scoreDifficultAdvanced3 = 0;let scoreDifficultGod3 = 0;let scoreDifficultBeginner4 = 0;let scoreDifficultIntermediate4 = 0;let scoreDifficultAdvanced4 = 0;let scoreDifficultGod4 = 0;let scoreDifficultBeginner5 = 0;let scoreDifficultIntermediate5 = 0;let scoreDifficultAdvanced5 = 0;let scoreDifficultGod5 = 0;let scoreDifficultBeginner6 = 0;let scoreDifficultIntermediate6 = 0;let scoreDifficultAdvanced6 = 0;let scoreDifficultGod6 = 0;let streakEasyBeginner2 = 0;let streakEasyIntermediate2 = 0;let streakEasyAdvanced2 = 0;let streakEasyGod2 = 0;let streakEasyBeginner3 = 0;let streakEasyIntermediate3 = 0;let streakEasyAdvanced3 = 0;let streakEasyGod3 = 0;let streakEasyBeginner4 = 0;let streakEasyIntermediate4 = 0;let streakEasyAdvanced4 = 0;let streakEasyGod4 = 0;let streakEasyBeginner5 = 0;let streakEasyIntermediate5 = 0;let streakEasyAdvanced5 = 0;let streakEasyGod5 = 0;let streakEasyBeginner6 = 0;let streakEasyIntermediate6 = 0;let streakEasyAdvanced6 = 0;let streakEasyGod6 = 0;let streakDifficultBeginner2 = 0;let streakDifficultIntermediate2 = 0;let streakDifficultAdvanced2 = 0;let streakDifficultGod2 = 0;let streakDifficultBeginner3 = 0;let streakDifficultIntermediate3 = 0;let streakDifficultAdvanced3 = 0;let streakDifficultGod3 = 0;let streakDifficultBeginner4 = 0;let streakDifficultIntermediate4 = 0;let streakDifficultAdvanced4 = 0;let streakDifficultGod4 = 0;let streakDifficultBeginner5 = 0;let streakDifficultIntermediate5 = 0;let streakDifficultAdvanced5 = 0;let streakDifficultGod5 = 0;let streakDifficultBeginner6 = 0;let streakDifficultIntermediate6 = 0;let streakDifficultAdvanced6 = 0;let streakDifficultGod6 = 0;let scoreType = 'Wynik';let scoreDiff = 'łatwy';

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

let container = document.createElement('div');
container.id = 'container';
document.body.append(container);

startMenu();

function showScores(modal, type, diff){
	let msBlock = document.createElement('div');
	msBlock.id = 'msBlock';
	modal.append(msBlock);
	for(i = 0; i < 4; i++){
		let modalScoreBlock = document.createElement('div');
		modalScoreBlock.className = 'msBlock';
			let msHeadContent = (i == 0)? 'początkujący' : ((i == 1)? 'średni' : ((i == 2)? 'zaawansowany' : 'ekspert'));
			let modalScoreHead = document.createElement('span');
			modalScoreHead.className = 'msHead';
			modalScoreHead.innerText = msHeadContent;
			modalScoreBlock.append(modalScoreHead);
	
			let msBodyContent = localStorage.getItem(type + diff + msHeadContent.toLowerCase().replace(/ /g, ""));
			let modalScoreBody = document.createElement('span');
			modalScoreBody.className = 'msBody';
			modalScoreBody.innerText = (msBodyContent == null)? 0 : msBodyContent;
			modalScoreBlock.append(modalScoreBody);
		msBlock.append(modalScoreBlock);
	}
}

function showHelp(modal, type){
	let exampleWords = ['INTEL', 'APPLE', 'BUFOR'];
	let mhBlock = document.createElement('div');
	mhBlock.id = 'mhBlock';
	mhbHead = document.createElement('div');
	mhbHead.className = 'mhbHead';
	mhbHead.innerText = (type == 'game')? 'Masz 6 prób odgadnięcia słowa.\n\nDozwolone są tylko prawidłowe słowa. Naciśnij Enter, aby przesłać swoją odpowiedź.\n\nPrzy każdym odgadnięciu kolor kafelków będzie się zmieniał, aby pokazać, jak blisko słowa jest Twoje przypuszczenie.' : 'Istnieją 4 różne poziomy, od początkującego do trybu eksperta. Im wyższy poziom, tym więcej słów będzie w grze i tym trudniej będzie je odgadnąć.\n\nMożesz zmienić poziom w menu głównym lub w grze, klikając aktualnie określony poziom.';
	mhBlock.append(mhbHead);

	let mhbBody = document.createElement('div');
	mhbBody.className = 'mhbBody';

	if(type == 'game'){
		for(i = 0; i < exampleWords.length; i++){
			let rand = Math.floor(Math.random() * 6);
			let tileClass = (i == 0)? 'dobre_miejsce' : ((i == 1)? 'zle_miejsce' : 'blockGrey');
			let exNotification = '';
			let exampleRow = document.createElement('div');
			exampleRow.className = 'exampleRow';
			for(j = 0; j < exampleWords[i].length; j++){
				let exampleTile = document.createElement('span');
				exampleTile.className = (j == rand)? 'exampleTile ' + tileClass : 'exampleTile';
				exampleTile.innerText = exampleWords[i][j];
				exampleRow.append(exampleTile);
				exNotification += (j == rand)? '<strong>' + exampleWords[i][j] + '</strong>' : '';
			}
			exNotification += (i == 0)? ' jest w słowie i na właściwym miejscu' : ((i == 1)? ' jest w słowie, ale na złym  miejscu' : ' nie jest w słowie');
			let exNotRow = document.createElement('div');
			exNotRow.innerHTML = exNotification;
			exampleRow.append(exNotRow);
			mhbBody.append(exampleRow);
		}
	}else{
		mhbBody.className = 'mhbHead';
		mhbBody.innerText = '\nOprócz poziomów istnieją 2 tryby trudności – łatwy i trudny. W trybie łatwym możesz użyć dowolnych prawidłowych słów w swoim odgadnięciu.\n\nW trybie trudnym musisz ponownie użyć dowolnych liter, które wcześniej wybrałeś i które znajdują się w słowie.\n\nMożesz zakończyć grę w dowolnym momencie klikając na przycisk rezygnacji, który odejmie 15 punktów od Twojego wyniku i pokaże Ci aktualne słowo.';
	}
	mhBlock.append(mhbBody);
	modal.append(mhBlock);
}

function openModal(type, notification){
	let modal = document.createElement('div');
	modal.id = 'modal';
	if(type == 'levelSelect'){
		for(i = 0; i < 5; i++){
			let modalBtn = document.createElement('button');
			modalBtn.className = 'modalBtn';
			modalBtn.innerText = (i == 0)? 'Początkujący' : ((i == 1)? 'średni' : ((i == 2)? 'zaawansowany' : ((i == 3)? 'ekspert' : 'wszystko')));
			modalBtn.addEventListener('click', levelSelect);
			modal.append(modalBtn);
		}
	}
	else if(type == 'charSelect'){
		for(i = 2; i < 7; i++){
			let modalBtn = document.createElement('button');
			modalBtn.className = 'modalBtnL';
			modalBtn.innerText = i + ((i<5)?' znaki':' znaków');
			modalBtn.addEventListener('click', charSelect);
			modal.append(modalBtn);
			setTimeout(function(){
				modal.style.cssText = 'opacity: 1';
			}, 1);
		}
	}
	else if(type == 'difficultySelect'){
		for(i = 0; i < 2; i++){
			let modalBtn = document.createElement('button');
			modalBtn.className = 'modalBtnL';
			modalBtn.innerText = (i == 0)? 'Łatwy' : 'trudny';
			modalBtn.addEventListener('click', difficultySelect);
			modal.append(modalBtn);
			setTimeout(function(){
				modal.style.cssText = 'opacity: 1';
			}, 1);
		}
	}
	else if(type == 'endScore'){
		let message = document.createElement('span');
		message.className = 'modalMessage';
		message.innerHTML = notification;
		modal.append(message);

		addSocial(modal);

		for(i = 0; i < 4; i++){
			let modalScoreBlock = document.createElement('div');
			modalScoreBlock.className = 'msBlock';
				let msHeadContent = (i == 0)? 'Wynik' : ((i == 1)? 'Najlepszy Wynik' : ((i == 2)? 'Seria Zwycięstw' : 'Najlepsza Seria'));
				let modalScoreHead = document.createElement('span');
				modalScoreHead.className = 'msHead';
				modalScoreHead.innerText = msHeadContent;
				modalScoreBlock.append(modalScoreHead);
				
				let msBodyContent = (i == 0)? userScore : ((i == 1)? localStorage.getItem('Wynik' + difficulty + level) : ((i == 2)? currentStreak : localStorage.getItem('Seria Zwycięstw' + difficulty + level)));
				let modalScoreBody = document.createElement('span');
				modalScoreBody.className = 'msBody';
				modalScoreBody.innerText = (msBodyContent == null)? 0 : msBodyContent;
				modalScoreBlock.append(modalScoreBody);
			modal.append(modalScoreBlock);
		}
		setTimeout(function(){
			document.addEventListener('click', restartClick);
			document.addEventListener('keyup', restart);
		}, 100);
	}
	else if(type == 'highScores'){
		for(i = 0; i < 2; i++){
			let scoreType = document.createElement('div');
			scoreType.className = 'scoreType';
			scoreType.innerText = (i == 0)? 'Wynik' : 'Seria Zwycięstw';
			modal.append(scoreType);
		}

		for(i = 0; i < 4; i++){
			let scoreBtn = document.createElement('button');
			scoreBtn.className = (i == 0)? 'scoreBtnActive' : 'scoreBtn';
			scoreBtn.innerText = (i == 0 || i == 2)? 'Łatwy' : 'trudny';
			scoreBtn.j = i;
			scoreBtn.modal = modal;
			scoreBtn.addEventListener('click', changeScore);
			modal.append(scoreBtn);
		}
		showScores(modal, 'Wynik', 'Łatwy');
	}
	else if(type == 'Pomoc'){
		for(i = 0; i < 2; i++){
			let helpBtn = document.createElement('button');
			helpBtn.className = (i == 0)? 'helpBtnActive' : 'helpBtn';
			helpBtn.innerText = (i == 0 || i == 2)? 'GRA' : 'USTAWIENIA';
			helpBtn.j = i;
			helpBtn.modal = modal;
			helpBtn.addEventListener('click', changeHelpView);
			modal.append(helpBtn);
		}
		showHelp(modal, 'game');
	}

	container.prepend(modal);
	setTimeout(function(){
		modal.style.cssText = 'opacity: 1';
	}, 1);

	let shadowBack = document.createElement('div');
	shadowBack.id = 'shadowBack';
	container.prepend(shadowBack);
	setTimeout(function(){
		shadowBack.style.cssText = 'opacity: .35';
	}, 1);

	let modalClose = document.createElement('button');
	modalClose.id = 'modalClose';
	modalClose.innerText = 'zamknij';
	modalClose.modal = modal;
	modalClose.shadowBack = shadowBack;
	modalClose.addEventListener('click', closeModal);
	modal.prepend(modalClose);
}

function addSocial(loc){
	let socialNav = document.createElement('div');
	socialNav.className = 'socialNav';

	let telegramIcon = document.createElement('img');
	telegramIcon.className = 'modalSocialIcon';
	telegramIcon.src = './assets/img/social/telegram_icon.png';
	telegramIcon.title = 'Share on Telegram';
	telegramIcon.alt = 'Telegram';
	telegramIcon.addEventListener("click", function(){
		openWindow('https://t.me/share/url?url=https://wordled.online&text=I\'ve been playing Wordled and love it. You have 6 tries to guess the hidden word and beat your high score. There are multiple difficulty settings to keep things interesting and it\'s free to play.', 'Telegram');
	});
	socialNav.append(telegramIcon);

	let twitterIcon = document.createElement('img');
	twitterIcon.className = 'modalSocialIcon';
	twitterIcon.src = './assets/img/social/twitter_icon.png';
	twitterIcon.title = 'Share on Twitter';
	twitterIcon.alt = 'Twitter';
	twitterIcon.addEventListener("click", function(){
		openWindow('https://twitter.com/intent/tweet?text=I%27ve%20been%20playing%20%23Wordled%20and%20love%20it.%20You%20have%206%20tries%20to%20guess%20the%20hidden%20word%20and%20beat%20your%20high%20score.%20There%20are%20multiple%20difficulty%20settings%20to%20keep%20things%20interesting%20and%20it%27s%20free%20to%20play.&url=https%3A%2F%2Fwordled.online&via=wordled', 'Twitter');
	});
	socialNav.append(twitterIcon);

	let facebookIcon = document.createElement('img');
	facebookIcon.className = 'modalSocialIcon';
	facebookIcon.src = './assets/img/social/facebook_icon.png';
	facebookIcon.title = 'Share on FaceBook';
	facebookIcon.alt = 'FaceBook';
	facebookIcon.addEventListener("click", function(){
		openWindow('https://www.facebook.com/sharer.php?u=https://wordled.online', 'FaceBook');
	});
	socialNav.append(facebookIcon);

	let redditIcon = document.createElement('img');
	redditIcon.className = 'modalSocialIcon';
	redditIcon.src = './assets/img/social/reddit_icon.png';
	redditIcon.title = 'Share on Reddit';
	redditIcon.alt = 'Reddit';
	redditIcon.addEventListener("click", function(){
		openWindow('https://www.reddit.com/submit?url=https://wordled.online&title=Play%20Wordled%20Online%20-%20a%20free%20word%20game', 'Reddit');
	});
	socialNav.append(redditIcon);

	loc.append(socialNav);
}

function openWindow(url, windowName){
	window.open(url, windowName,'width=550,height=450,left=150,top=200,toolbar=0,status=0,data-action=share/whatsapp/share')
}

function addLogo(){
	let logo = document.createElement('div');
	logo.className = 'logo';
	logo.addEventListener("click", logoClick);

	let domName = 'WYRAZIKI';
	for(i = 0; i < domName.length; i++){
		let spanClass = (i == 0 || i % 2 == 0)? 'dobre_miejsce' : 'zle_miejsce';
		let logoSpan = document.createElement('span');
		logoSpan.className = spanClass;
		logoSpan.innerText = domName[i];
		logo.append(logoSpan);
	}

	container.append(logo);
}

function changeHelpView(){
	let j = event.currentTarget.j;
	let modal = event.currentTarget.modal;
	document.getElementsByClassName('helpBtnActive')[0].className = 'helpBtn';
	this.className = 'helpBtnActive';
	if(j == 0){
		document.getElementById('mhBlock').remove();
		showHelp(modal, 'game');
	}else{
		document.getElementById('mhBlock').remove();
		showHelp(modal, 'options');
	}
}

function setGlobal(){
	for(i = 1; i < 16; i++){
		for(j = 3; j < 6; j++){
			let lsItem = (i == 1)? 'scoreeasybeginner' + j : ((i == 2)? 'scoreeasyintermediate' + j : ((i == 3)? 'scoreeasyadvanced' + j : ((i == 4)? 'scoreeasygodmode' + j : ((i == 5)? 'scoredifficultbeginner' + j : ((i == 6)? 'scoredifficultintermediate' + j : ((i == 7)? 'scoredifficultadvanced' + j : ((i == 8)? 'scoredifficultgodmode' + j : ((i == 9)? 'streakeasybeginner' + j : ((i == 10)? 'streakeasyintermediate' + j : ((i == 11)? 'streakeasyadvanced' + j : ((i == 12)? 'streakeasygodmode' + j : ((i == 13)? 'streakdifficultbeginner' + j : ((i == 14)? 'streakdifficultintermediate' + j : ((i == 15)? 'streakdifficultadvanced' + j : 'streakdifficultgodmode' + j))))))))))))));
			if (localStorage.getItem(lsItem) === null) {
				localStorage.setItem(lsItem, 0);
			}
		}
	}
	
	streakEasyBeginner2 = localStorage.getItem('streakeasybeginner2');
	streakEasyIntermediate2 = localStorage.getItem('streakeasyintermediate2');
	streakEasyAdvanced2 = localStorage.getItem('streakeasyadvanced2');
	streakEasyGod2 = localStorage.getItem('streakeasygodmode2');
	streakEasyBeginner3 = localStorage.getItem('streakeasybeginner3');
	streakEasyIntermediate3 = localStorage.getItem('streakeasyintermediate3');
	streakEasyAdvanced3 = localStorage.getItem('streakeasyadvanced3');
	streakEasyGod3 = localStorage.getItem('streakeasygodmode3');
	streakEasyBeginner4 = localStorage.getItem('streakeasybeginner4');
	streakEasyIntermediate4 = localStorage.getItem('streakeasyintermediate4');
	streakEasyAdvanced4 = localStorage.getItem('streakeasyadvanced4');
	streakEasyGod4 = localStorage.getItem('streakeasygodmode4');
	streakEasyBeginner5 = localStorage.getItem('streakeasybeginner5');
	streakEasyIntermediate5 = localStorage.getItem('streakeasyintermediate5');
	streakEasyAdvanced5 = localStorage.getItem('streakeasyadvanced5');
	streakEasyGod5 = localStorage.getItem('streakeasygodmode5');
	streakDifficultBeginner2 = localStorage.getItem('streakdifficultbeginner2');
	streakDifficultIntermediate2 = localStorage.getItem('streakdifficultintermediate2');
	streakDifficultAdvanced2 = localStorage.getItem('streakdifficultadvanced2');
	streakDifficultGod2 = localStorage.getItem('streakdifficultgodmode2');
	streakDifficultBeginner3 = localStorage.getItem('streakdifficultbeginner3');
	streakDifficultIntermediate3 = localStorage.getItem('streakdifficultintermediate3');
	streakDifficultAdvanced3 = localStorage.getItem('streakdifficultadvanced3');
	streakDifficultGod3 = localStorage.getItem('streakdifficultgodmode3');
	streakDifficultBeginner4 = localStorage.getItem('streakdifficultbeginner4');
	streakDifficultIntermediate4 = localStorage.getItem('streakdifficultintermediate4');
	streakDifficultAdvanced4 = localStorage.getItem('streakdifficultadvanced4');
	streakDifficultGod4 = localStorage.getItem('streakdifficultgodmode4');
	streakDifficultBeginner5 = localStorage.getItem('streakdifficultbeginner5');
	streakDifficultIntermediate5 = localStorage.getItem('streakdifficultintermediate5');
	streakDifficultAdvanced5 = localStorage.getItem('streakdifficultadvanced5');
	streakDifficultGod5 = localStorage.getItem('streakdifficultgodmode5');
	scoreEasyBeginner2 = localStorage.getItem('scoreeasybeginner2');
	scoreEasyIntermediate2 = localStorage.getItem('scoreeasyintermediate2');
	scoreEasyAdvanced2 = localStorage.getItem('scoreeasyadvanced2');
	scoreEasyGod2 = localStorage.getItem('scoreeasygodmode2');
	scoreEasyBeginner3 = localStorage.getItem('scoreeasybeginner3');
	scoreEasyIntermediate3 = localStorage.getItem('scoreeasyintermediate3');
	scoreEasyAdvanced3 = localStorage.getItem('scoreeasyadvanced3');
	scoreEasyGod3 = localStorage.getItem('scoreeasygodmode3');
	scoreEasyBeginner4 = localStorage.getItem('scoreeasybeginner4');
	scoreEasyIntermediate4 = localStorage.getItem('scoreeasyintermediate4');
	scoreEasyAdvanced4 = localStorage.getItem('scoreeasyadvanced4');
	scoreEasyGod4 = localStorage.getItem('scoreeasygodmode4');
	scoreEasyBeginner5 = localStorage.getItem('scoreeasybeginner5');
	scoreEasyIntermediate5 = localStorage.getItem('scoreeasyintermediate5');
	scoreEasyAdvanced5 = localStorage.getItem('scoreeasyadvanced5');
	scoreEasyGod5 = localStorage.getItem('scoreeasygodmode5');
	scoreDifficultBeginner2 = localStorage.getItem('scoredifficultbeginner2');
	scoreDifficultIntermediate2 = localStorage.getItem('scoredifficultintermediate2');
	scoreDifficultAdvanced2 = localStorage.getItem('scoredifficultadvanced2');
	scoreDifficultGod2 = localStorage.getItem('scoredifficultgodmode2');
	scoreDifficultBeginner3 = localStorage.getItem('scoredifficultbeginner3');
	scoreDifficultIntermediate3 = localStorage.getItem('scoredifficultintermediate3');
	scoreDifficultAdvanced3 = localStorage.getItem('scoredifficultadvanced3');
	scoreDifficultGod3 = localStorage.getItem('scoredifficultgodmode3');
	scoreDifficultBeginner4 = localStorage.getItem('scoredifficultbeginner4');
	scoreDifficultIntermediate4 = localStorage.getItem('scoredifficultintermediate4');
	scoreDifficultAdvanced4 = localStorage.getItem('scoredifficultadvanced4');
	scoreDifficultGod4 = localStorage.getItem('scoredifficultgodmode4');
	scoreDifficultBeginner5 = localStorage.getItem('scoredifficultbeginner5');
	scoreDifficultIntermediate5 = localStorage.getItem('scoredifficultintermediate5');
	scoreDifficultAdvanced5 = localStorage.getItem('scoredifficultadvanced5');
	scoreDifficultGod5 = localStorage.getItem('scoredifficultgodmode5');

	gameFin = 0;
	currentRow = 0;
	nextRowBlock = 0;
	score = 0;
	remNotification = 0;
	mustUse = '';
}

function startMenu(){
	if(document.getElementById('wordscript') != null){
		document.getElementById('wordscript').remove();
	}
	let script = document.createElement('script');
	script.id = 'wordscript';
	script.src = './assets/js/words/' + maxBlock + '.js';
	document.body.prepend(script);
	setGlobal();
	container.innerHTML = '';
	addLogo();
	let menu = document.createElement('div');
	menu.id = 'menu';
	for(i = 0; i < 6; i++){
		let j = i;
		let menuBtn = document.createElement('button');
		menuBtn.className = 'menuBtn';
		menuBtn.innerText = (i == 0)? maxBlock + ((maxBlock>4)?' znaków':' znaki') : ((i == 1)? level : ((i == 2)? difficulty : ((i == 3)? 'Statystyki' : ((i == 4)? 'Pomoc' : 'Start gry'))));
		menuBtn.j = i;

		menuBtn.addEventListener("click", menuClick);
		menu.append(menuBtn);
	}
	container.append(menu);
}

function gameOver(){
	gameFin = 1;
	document.removeEventListener('keyup', deleteClick, false);
	document.removeEventListener('keyup', keyPress, false);
	document.removeEventListener('keyup', restart, false);
	document.removeEventListener('click', logoClick, false);
	document.removeEventListener('click', menuClick, false);
	document.removeEventListener('click', enterClick, false);
	document.removeEventListener('click', levelModal, false);
	document.removeEventListener('click', difficultyModal, false);
	document.removeEventListener('click', closeModal, false);
}

function gameStart(){
	setGlobal();
	container.innerHTML = '';
	let wordType = (level == 'początkujący')? beginner : ((level == 'średni')? intermediate : ((level == 'zaawansowany')? advanced : ((level == 'ekspert')? fullList : custom)));
	let rand = Math.floor(Math.random() * wordType.length);
	chosenWord = wordType[rand].toUpperCase();
	addLogo();

	let navBar = document.createElement('div');
	navBar.className = 'nav_bar';
		let difficultySelect = document.createElement('button');
		difficultySelect.id = 'difficultySelectBtn';
		difficultySelect.className = 'btn';
		difficultySelect.innerText = difficulty;
		difficultySelect.addEventListener('click', difficultyModal);
		navBar.append(difficultySelect);

		let giveUpBtn = document.createElement('button');
		giveUpBtn.id = 'giveUpBtn';
		giveUpBtn.className = 'btn';
		giveUpBtn.innerText = 'poddaj się';
		giveUpBtn.addEventListener('click', quitQlick);
		navBar.append(giveUpBtn);

		let levelSelect = document.createElement('button');
		levelSelect.id = 'levelSelectBtn';
		levelSelect.className = 'btn';
		levelSelect.innerText = level;
		levelSelect.addEventListener('click', levelModal = function(event){
			openModal('levelSelect');
		})
		navBar.append(levelSelect);
	container.append(navBar);

	let gameArea = document.createElement('div');
	gameArea.className = 'game_area';
	for(i = 0; i < 6; i++){
		let row = document.createElement('div');
		row.className = 'row';
		for(j = 0; j < maxBlock; j++){
			let rowBlock = document.createElement('div');
			rowBlock.className = 'row_block';
			row.append(rowBlock);
		}
		gameArea.append(row);
	}
	container.append(gameArea);

	let notification = document.createElement('div');
	notification.id = 'notification';
	notification.innerText = 'Zgaduj!'
	container.append(notification);

	let keyLayoutTop = 'QWERTYUIOP';
	let keyLayoutMid = 'ASDFGHJKL';
	let keyLayoutBot = 'ZXCVBNM';
	let keyLayoutPl = 'ĄĆĘŁŃÓŚŻŹ'; 

	let keyboard = document.createElement('div');
	keyboard.id = 'keyboard';

		let plKeys = document.createElement('div');
		plKeys.id = 'plKeys';
		addKeys(plKeys, keyLayoutPl, 'keyboardKey_pl');
		keyboard.append(plKeys);

		let topKeys = document.createElement('div');
		topKeys.id = 'topKeys';
		addKeys(topKeys, keyLayoutTop, 'keyboardKey_s');
		keyboard.append(topKeys);

		let midKeys = document.createElement('div');
		midKeys.id = 'midKeys';
		addKeys(midKeys, keyLayoutMid, 'keyboardKey_m');
		keyboard.append(midKeys);

		let botKeys = document.createElement('div');
		botKeys.id = 'botKeys';

		let deleteKey = document.createElement('span');
		deleteKey.className = 'keyboardKey_l';
		deleteKey.innerHTML = '&#x2190;';
		deleteKey.addEventListener("click", deleteClick);
		botKeys.append(deleteKey);
		addKeys(botKeys, keyLayoutBot, 'keyboardKey_s');

		let enterKey = document.createElement('span');
		enterKey.className = 'keyboardKey_l';
		enterKey.innerText = 'Enter';
		enterKey.addEventListener("click", enterClick);
		botKeys.append(enterKey);
		keyboard.append(botKeys);

	container.append(keyboard);
	
	addSocial(container);

	document.addEventListener('keyup', keyPress);
}

function difficultyModal(){
	openModal('difficultySelect');
}

function keyPress(event) {
	if(gameFin == 0){
		let alphabet = 'abcdefghijklmnopqrstuvwxyząćęłńóśżź';
		let wordRow = document.getElementsByClassName('row')[currentRow];
		let rowBlockEl = wordRow.childNodes;
		for(i = 0; i < alphabet.length; i++){
			if ((event.key === alphabet[i] || event.key === alphabet[i].toUpperCase())) {
				addLetter(rowBlockEl, alphabet[i]);
			}
		}
		if(event.key === 'Enter') {
			submitWord(wordRow, keyPress);
		}
		if(event.key === 'Backspace') {
			deleteLetter(rowBlockEl);
		}
	}
}

function quitQlick(){
	if(gameFin == 0){
		let url = '<a href="https://matura-z-informatyki.blogspot.com/search?q=%22'+ chosenWord +'%22" target="_blank">' + chosenWord + '</a>';
		notification = 'Hasłem było ' + url + '. Kliknij aby zagrać ponownie';
		currentStreak = 0;
		userScore = userScore - 15;
		gameOver();

		setTimeout(function(){
			openModal('endScore', notification);
		}, 250);
	}
}

function enterClick(){
	if(gameFin == 0){
		let wordRow = document.getElementsByClassName('row')[currentRow];
		let rowBlockEl = wordRow.childNodes;
		submitWord(wordRow);
	}
}

function logoClick(event) {
	gameOn = 0;
	container.innerHTML = '';
	startMenu();
}

function menuClick(event) {
	let j = event.currentTarget.j;
	let modalType = (j == 0)? 'charSelect' : ((j == 1)? 'levelSelect' : ((j == 2)? 'difficultySelect' : ((j == 3)? 'highScores' : 'Pomoc')));
	if(j < 5){
		openModal(modalType);
	}else{
		gameOn = 1;
		gameStart();
	}
}

function restart(event) {
	if (event.key === 'Enter') {
		document.removeEventListener('keyup', restart, false);
		document.removeEventListener('click', restartClick, false);
		gameStart();
	}
}

function restartClick(){
	document.removeEventListener('keyup', restart, false);
	document.removeEventListener('click', restartClick, false);
	gameStart();
}

function difficultySelect(){
	difficulty = this.innerText.toLowerCase();
	if(gameOn == 1){
		userScore = 0;
		currentStreak = 0;
		gameOver();
		document.removeEventListener('keyup', restart, false);
		gameStart();
	}else{
		startMenu();
	}
}
function charSelect(){
	maxBlock = parseInt(this.innerText.replace(/\D/g, ''));
	if(gameOn == 1){
		userScore = 0;
		currentStreak = 0;
		gameOver();
		document.removeEventListener('keyup', restart, false);
		gameStart();
	}else{
		startMenu();
	}
}

function changeScore(){
	let j = event.currentTarget.j;
	let modal = event.currentTarget.modal;
	document.getElementsByClassName('scoreBtnActive')[0].className = 'scoreBtn';
	this.className = 'scoreBtnActive';
	if(j == 0 || j == 1){
		document.getElementById('msBlock').remove();
		showScores(modal, 'Wynik', this.innerText.toLowerCase());
	}else{
		document.getElementById('msBlock').remove();
		showScores(modal, 'Seria Zwycięstw', this.innerText.toLowerCase());
	}
}

function closeModal(){
	let modal = event.currentTarget.modal;
	let shadowBack = event.currentTarget.shadowBack;
	modal.style.cssText = 'opacity:0';
	shadowBack.style.cssText = 'opacity:0';
	setTimeout(function(){
		modal.remove();
		shadowBack.remove();
	}, 355);
}

function deleteClick(){
	if(gameFin == 0){
		let wordRow = document.getElementsByClassName('row')[currentRow];
		let rowBlockEl = wordRow.childNodes;
		deleteLetter(rowBlockEl);
	}
}

function levelSelect(){
	level = this.innerText.toLowerCase().replace(/ /g, "");
	if(gameOn == 1){
		userScore = 0;
		currentStreak = 0;
		gameOver();
		document.removeEventListener('keyup', restart, false);
		gameStart();
	}else{
		startMenu();
	}
}

function keyboardPress(){
	if(gameFin == 0){
		let layout = event.currentTarget.layout;
		let wordRow = document.getElementsByClassName('row')[currentRow];
		let rowBlockEl = wordRow.childNodes;
		addLetter(rowBlockEl, layout);
	}
}

function deleteLetter(rowBlockEl){
	if(nextRowBlock > 0){
		nextRowBlock--;
		rowBlockEl[nextRowBlock].innerText = '';
	}
}

function count(str, find) {
    return (str.split(find)).length - 1;
}

function checkAnswer(wordRow, answer){
	let answerArray = [];

	for(i = 0; i < answer.length; i++){
		let letter = answer[i].toUpperCase();
		answerArray.push(letter);
		let blockClass = 'blockGrey';
		if(chosenWord.toUpperCase().includes(letter)){
			if(chosenWord[i].toUpperCase() === letter){
				score++;
				blockClass = ' dobre_miejsce';
				if(count(answer, letter) > count(chosenWord, letter)){
					for(j = 0; j < wordRow.childNodes.length; j++){
						if(wordRow.childNodes[j].innerText == letter && wordRow.childNodes[j].className == 'row_block  zle_miejsce'){
							wordRow.childNodes[j].className = 'row_block  blockGrey';
							let index = answerArray.indexOf(letter);
							if (index !== -1) {
								answerArray.splice(index, 1);
							}
						}
					}
				}
			}else{
				if(countOccurrences(answerArray, letter) <= count(chosenWord, letter)){
					blockClass = ' zle_miejsce';
				}
				else{
					blockClass = ' blockGrey';
				}
			}
		}
		wordRow.childNodes[i].className = 'row_block ' + blockClass;
		let keyboard = document.getElementById('keyboard_' + letter);
		if(chosenWord.toUpperCase().includes(letter)){
			if(letter == chosenWord[i]){
				if(!keyboard.className.includes('dobre_miejsce')){
					keyboard.classList.remove('zle_miejsce');
					keyboard.className += ' dobre_miejsce';
				}
			}else{
				if(!keyboard.className.includes('dobre_miejsce') && !keyboard.className.includes('zle_miejsce')){
					keyboard.className += ' zle_miejsce';
				}
			}
			if(count(answer, letter) > count(mustUse, letter) && count(mustUse, letter) <= count(chosenWord, letter)){
				mustUse += letter;
			}
		}
		else{
			if(!keyboard.className.includes('blockGrey')){
				keyboard.className += ' blockGrey';
			}
		}
	}

	if(score === maxBlock){
		let scoreLevel = (level == 'początkujący')? 1 : ((level == 'średni')? 2 : ((level == 'zaawansowany')? 3 : 4));
		userScore = userScore + ((scoreLevel * 10) - ((scoreLevel + 1) * currentRow));

		if(userScore > localStorage.getItem('Wynik' + difficulty + level)){
			localStorage.setItem('Wynik' + difficulty + level, userScore);
		}

		currentStreak++;
		if(currentStreak > localStorage.getItem('Seria Zwycięstw' + difficulty + level)){
			localStorage.setItem('Seria Zwycięstw' + difficulty + level, currentStreak);
		}

		let notification = 'Gratulacje, wygrałeś! Kliknij aby zagrać ponownie';
		gameOver();

		setTimeout(function(){
			openModal('endScore', notification);
		}, 250);
	}
	else if(currentRow == 5){
		let url = '<a href="https://matura-z-informatyki.blogspot.com/search?q=%22'+ chosenWord +'%22" target="_blank">' + chosenWord + '</a>';
		let notification = 'Przegrałeś. Hasłem było ' + url + '. Kliknij aby zagrać ponownie';
		userScore = userScore - 10;
		currentStreak = 0;
		gameOver();

		setTimeout(function(){
			openModal('endScore', notification);
		}, 250);
	}
	else{
		score = 0;
		nextRowBlock = 0;
		currentRow++;
	}
}

function submitWord(wordRow){
	if(nextRowBlock > 0 && nextRowBlock % maxBlock == 0){
		let answer = wordRow.innerText.replace(/[\n\r]/g, '');
		if(fullList.includes(answer)){
			if(difficulty == 'trudny'){
				for(i = 0; i < mustUse.length; i++){
					if(!answer.includes(mustUse[i])){
						remNotification = 0;
						document.getElementById('notification').innerText = 'Musisz użyć znalezionych znaków';
						return;
					}
				}
			}
			checkAnswer(wordRow, answer);		
		}else{
			remNotification = 0;
			document.getElementById('notification').innerText = 'Hasło nie jest na liście';
		}
	}else{
		remNotification = 0;
		document.getElementById('notification').innerText = 'Musisz wpisać maksymalnie ' + maxBlock + ' znaków';
	}
}

function addKeys(el, layout, keyClass){
	for(i = 0; i < layout.length; i++){
		let key = document.createElement('span');
		key.className = keyClass;
		key.id = 'keyboard_' + layout[i];
		key.innerText = layout[i];
		key.layout = layout[i];
		key.addEventListener("click", keyboardPress);
		el.append(key);
	}
}

function addLetter(rowBlockEl, letter){
	if(remNotification == 0){
		remNotification = 1;
		document.getElementById('notification').innerText = '';
	}
	if(nextRowBlock < maxBlock){
		rowBlockEl[nextRowBlock].innerText = letter.toUpperCase();
		nextRowBlock++;
	}
}
