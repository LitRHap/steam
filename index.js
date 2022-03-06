const SteamUser = require('steam-user');

const user = new SteamUser();

const logOnOptions = {
	accountName: 'alifputrasteam',  //Enter here your account login
	password: 'Tangguh11'		 //Enter your password
}

user.logOn(logOnOptions);

user.on('loggedOn', () => {
	console.log(logOnOptions.accountName + ' - Successfully logged on');
	user.setPersona(1);                 //1 - online, 7 - invisible
	user.gamesPlayed([730,440,578080,570,204450,550,1325860,1160780,227940,431960]);    //List app IDs
});
