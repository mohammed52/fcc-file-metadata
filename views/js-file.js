/*jslint browser:true */
/*jshint strict:false */
/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*jshint sub:true*/

var mapGv = {};

mapGv.boardPlayer1Computer = [
"empty","empty","empty",
"empty","empty","empty",
"empty","empty","empty"];

mapGv.GameMode = ""; //1Player or 2Player

mapGv.x = "x";
mapGv.o = "o";
mapGv.empty = "empty";
mapGv.arrDiagonalLocs = [0,2,4,6,8];

mapGv.SinglePlayerPlayer1Mark = "";
mapGv.SinglePlayerComputerMark = "";
mapGv.whosTurnPlayer1VsComputer = "";

mapGv.TwoPlayerPlayer1Mark = "";
mapGv.TwoPlayerPlayer2Mark = "";
mapGv.whosTurnPlayer1VsPlayer2 = "";


mapGv.scorePlayer1 = 0;
mapGv.scorePlayer2 = 0;
mapGv.computer = 0; 

mapGv.anim1 = 10;
mapGv.anim2 = 500;
mapGv.anim3 = 5000;

mapGv.wait0 = 150;
mapGv.wait1 = mapGv.wait0;
mapGv.wait2 = mapGv.wait0+mapGv.wait1;
mapGv.wait3 = mapGv.wait0+mapGv.wait2;
mapGv.wait4 = mapGv.wait0+mapGv.wait3;
mapGv.wait5 = mapGv.wait0+mapGv.wait4;

mapGv.SinglePlayerMarkSelection = "";

function testRouting() {
	var maplog = logGenerator(true);
	maplog("----------testRouting-----------");

	setTimeout(function() {
		$("#tag-single-player-text").trigger("click");	
	}, mapGv.wait1);

	setTimeout(function() {
		$("#tag-option-x").trigger("click");
	}, mapGv.wait2);

}

function testRouting2() {
	var maplog = logGenerator(true);
	maplog("----------testRouting2-----------");

	setTimeout(function() {
		$("#tag-two-player-text").trigger("click");	
	}, mapGv.wait1);

	setTimeout(function() {
		$("#tag-option-x").trigger("click");
	}, mapGv.wait2);

}

$(document).ready(function() {
	function maplog(str1) {
		var LOGmain = true;
		if (LOGmain) {
			console.log(str1);
		}
	}
	maplog("Alrighty");
	init();

	// testRouting();
	// testRouting2();

});

function init() {
	$("#tag-hidden-holder").css("display", "none");

	loadHowPlayScreen();

	$("#tag-hidden-holder").fadeIn(mapGv.anim1, function() {
		setEventsHowPlayScreen();
		return;
	});
}

function logGenerator(boolVal) {
	return function(str1) {
		if (boolVal) {
			console.log(str1);
		}

		return;
	};
}

function loadHowPlayScreen() {
	var maplog = logGenerator(false);
	maplog("-----------loadHowPlayScreen-----------");

	
	
	jQuery('<div/>', {
		id: 'tag-first-screen-menu',
		class: 'center-block first-screen-menu'
	}).appendTo("#tag-hidden-holder");
	
	jQuery('<p/>', {
		id: 'tag-how-play',
		class: 'how-play center-block',
		text: "How do you want to play?"
	}).appendTo("#tag-first-screen-menu");

	jQuery('<div/>', {
		id: "tag-options-wrapper",
		class: "row center-block options-wrapper",
	}).appendTo("#tag-first-screen-menu");

	jQuery('<div/>', {
		id: "tag-single-player",
		class: "col-xs-6",
	}).appendTo("#tag-options-wrapper");

	jQuery('<div/>', {
		id: "tag-single-player-text",
		text: "One Player",
		class: "one-player number-of-players text-center",
	}).appendTo("#tag-single-player");


	jQuery('<div/>', {
		id: "tag-double-player",
		class: "col-xs-6",
	}).appendTo("#tag-options-wrapper");

	jQuery('<div/>', {
		id: "tag-two-player-text",
		text: "Two Player",
		class: "two-player number-of-players text-center",
		onClick: "onClickSinglePlayer"
	}).appendTo("#tag-double-player");

	// $("#tag-hidden-holder").css("display","block");

	return;
	
}

function onClickTwoPlayer() {
	var maplog = logGenerator(false);
	maplog("----------onClickTwoPlayer-----------");

	mapGv.GameMode = "TwoPlayer";
	
	$("#tag-first-screen-menu").fadeOut(mapGv.anim1, function() {
		maplog("Screen Disppeared");
		$("#tag-first-screen-menu").remove();

		$("#tag-hidden-holder").css("display", "none");
		loadXOMenuScreenTwoPlayer();

		$("#tag-hidden-holder").fadeIn(mapGv.anim1, function() {
			maplog("XO screen Loaded");
			setEventsXOMenuAfterTwoPlayerSelect();
			return;
		});

	});
}

function onClickSinglePlayer() {
	var maplog = logGenerator(false);
	maplog("----------onClickSinglePlayer-----------");
	mapGv.GameMode = "SinglePlayer";

	$("#tag-first-screen-menu").fadeOut(mapGv.anim1, function() {
		maplog("Screen Disppeared");
		$("#tag-first-screen-menu").remove();

		$("#tag-hidden-holder").css("display", "none");
		loadXOMenuScreen();

		$("#tag-hidden-holder").fadeIn(mapGv.anim1, function() {
			maplog("XO screen Loaded");
			setEventsXOMenuAfterSinglePlayerSelect();
			return;
		});
	});
}

function setEventsHowPlayScreen() {
	$("#tag-single-player-text").click(onClickSinglePlayer);
	$("#tag-two-player-text").click(onClickTwoPlayer);
}

function loadXOMenuScreen(){
	var maplog = logGenerator(false);
	maplog("-----------loadXOMenuScreen-----------");

	jQuery('<div/>', {
		id: 'tag-xo-screen-menu',
		class: 'center-block tag-xo-screen-menu'
	}).appendTo("#tag-hidden-holder");

	jQuery('<p/>', {
		id: 'tag-select-xo-text',
		class: 'select-xo-text center-block',
		text: "Would You Like to Be X or O?"
	}).appendTo("#tag-xo-screen-menu");

	jQuery('<div/>', {
		id: 'tag-xo-select-wrapper',
		class: 'row xo-select-wrapper center-block',
	}).appendTo("#tag-xo-screen-menu");

	jQuery('<div/>', {
		id: 'tag-option-x-wrapper',
		class: 'col-xs-6 x-option-wrapper'
	}).appendTo("#tag-xo-select-wrapper");

	jQuery('<div/>', {
		id: 'tag-option-x',
		class: 'x-option',
		text: "X"
	}).appendTo("#tag-option-x-wrapper");


	jQuery('<div/>', {
		id: 'tag-option-o-wrapper',
		class: 'col-xs-6 o-option-wrapper',
		// text: "O"
	}).appendTo("#tag-xo-select-wrapper");

	jQuery('<div/>', {
		id: 'tag-option-o',
		class: 'o-option',
		text: "O"
	}).appendTo("#tag-option-o-wrapper");

	jQuery('<div/>', {
		id: 'tag-back',
		class: 'container-fluid back',
		text: "\u25C0 Back",
	}).appendTo("#tag-xo-screen-menu");

	return;
}

function setEventsXOMenuAfterSinglePlayerSelect() {

	var maplog = logGenerator(false);
	maplog("--------setEventsXOMenuAfterSinglePlayerSelect---------");

	function initialisePlayer1ComputerGame() {
		$("#tag-xo-screen-menu").fadeOut(mapGv.anim1, function() {
			$("#tag-xo-screen-menu").remove();
			maplog("xo-screen-menu removed");

			$("#tag-hidden-holder").css("display", "none");

			loadGrid();
			loadPlayerComputerHeader();

			$("#tag-hidden-holder").fadeIn(mapGv.anim1, function() {
				maplog("grid loaded");
				setEventResetAllBtn();
				loadTouchGrid();
				loadComputersTurnAnimation();
				loadPlayer1sTurnAnimation();

				if (mapGv.SinglePlayerPlayer1Mark==="x") {
					mapGv.whosTurnPlayer1VsComputer = "computer";
					computersTurnVsPlayer1();
				} else if (mapGv.SinglePlayerPlayer1Mark==="o"){
					mapGv.whosTurnPlayer1VsComputer = "player1";
					player1TurnVsComputer();
				}

				return;

			});
		});
	}

	function backButton() {
		var maplog = logGenerator(true);

		maplog("--------backButton---------");


		$("#tag-xo-screen-menu").fadeOut(mapGv.anim1, function() {
			$("#tag-xo-screen-menu").remove();
			maplog("xo-screen-menu removed");

			$("#tag-hidden-holder").css("display", "none");

			loadHowPlayScreen();

			$("#tag-hidden-holder").fadeIn(mapGv.anim1, function() {

				return setEventsHowPlayScreen();
			});
		});
	}

	function Xbtn() {
		var maplog = logGenerator(false);
		maplog("--------Xbtn---------");

		mapGv.SinglePlayerPlayer1Mark = "x";
		mapGv.SinglePlayerComputerMark = "o";
		initialisePlayer1ComputerGame();
		return;
	}

	function Obtn() {
		var maplog = logGenerator(false);
		maplog("--------Obtn---------");

		mapGv.SinglePlayerPlayer1Mark = "o";
		mapGv.SinglePlayerComputerMark = "x";
		initialisePlayer1ComputerGame();
		return;

	}


	$("#tag-option-x").click(Xbtn);
	$("#tag-option-o").click(Obtn);
	$("#tag-back").click(backButton);

	return;
}

function loadXOMenuScreenTwoPlayer(){
	var maplog = logGenerator(false);
	maplog("-----------loadXOMenuScreenTwoPlayer-----------");

	jQuery('<div/>', {
		id: 'tag-xo-screen-menu',
		class: 'center-block tag-xo-screen-menu'
	}).appendTo("#tag-hidden-holder");

	jQuery('<p/>', {
		id: 'tag-select-xo-text',
		class: 'select-xo-text-two-player center-block',
		text: "Player-1: Would You Like to Be X or O?"
	}).appendTo("#tag-xo-screen-menu");

	jQuery('<div/>', {
		id: 'tag-xo-select-wrapper',
		class: 'row xo-select-wrapper center-block',
	}).appendTo("#tag-xo-screen-menu");

	jQuery('<div/>', {
		id: 'tag-option-x-wrapper',
		class: 'col-xs-6 x-option-wrapper'
	}).appendTo("#tag-xo-select-wrapper");

	jQuery('<div/>', {
		id: 'tag-option-x',
		class: 'x-option',
		text: "X"
	}).appendTo("#tag-option-x-wrapper");


	jQuery('<div/>', {
		id: 'tag-option-o-wrapper',
		class: 'col-xs-6 o-option-wrapper',
		// text: "O"
	}).appendTo("#tag-xo-select-wrapper");

	jQuery('<div/>', {
		id: 'tag-option-o',
		class: 'o-option',
		text: "O"
	}).appendTo("#tag-option-o-wrapper");

	jQuery('<div/>', {
		id: 'tag-back',
		class: 'container-fluid back',
		text: "\u25C0 Back",
	}).appendTo("#tag-xo-screen-menu");

	return;
}

function setEventsXOMenuAfterTwoPlayerSelect() {

	var maplog = logGenerator(true);
	maplog("--------setEventsXOMenuAfterTwoPlayerSelect---------");

	function initialisePlayer1Player2Game() {
		var maplog = logGenerator(true);
		maplog("--------initialisePlayer1Player2---------");

		$("#tag-xo-screen-menu").fadeOut(mapGv.anim1, function() {
			$("#tag-xo-screen-menu").remove();
			maplog("xo-screen-menu removed");

			$("#tag-hidden-holder").css("display", "none");

			loadGrid();
			loadPlayer1Player2Header();

			$("#tag-hidden-holder").fadeIn(mapGv.anim1, function() {
				maplog("grid loaded");
				setEventResetAllBtn();
				loadTouchGrid();
				loadPlayer2sTurnAnimation();
				loadPlayer1sTurnAnimation();

				if (mapGv.TwoPlayerPlayer1Mark === "x") {

					mapGv.whosTurnPlayer1VsPlayer2 = "player2";
					maplog("selected mark is mark is x, player 2's turn...");
					player2TurnVsPlayer1();
				} else if (mapGv.TwoPlayerPlayer1Mark === "o") {
					maplog("selected mark is mark is o, player 1's turn...");
					mapGv.whosTurnPlayer1VsComputer = "player1";
					player1TurnVsPlayer2();
				}
			});
		});

		// return;

	}

	function backButton() {
		var maplog = logGenerator(true);

		maplog("--------backButton---------");

		$("#tag-xo-screen-menu").fadeOut(mapGv.anim1, function() {
			$("#tag-xo-screen-menu").remove();
			maplog("xo-screen-menu removed");

			$("#tag-hidden-holder").css("display", "none");

			loadHowPlayScreen();

			$("#tag-hidden-holder").fadeIn(mapGv.anim1, function() {
				setEventsHowPlayScreen();
				return;
			});
		});
	}

	function Xbtn() {
		var maplog = logGenerator(true);
		maplog("--------Xbtn Two Player---------");

		mapGv.TwoPlayerPlayer1Mark = "x";
		mapGv.TwoPlayerPlayer2Mark = "o";
		maplog("calling initialise game from XBtn");
		initialisePlayer1Player2Game();
		return;
	}

	function Obtn() {
		var maplog = logGenerator(true);
		maplog("--------Obtn Two Player---------");
		mapGv.TwoPlayerPlayer1Mark = "o";
		mapGv.TwoPlayerPlayer2Mark = "x";
		maplog("calling initialise game from OBtn");
		initialisePlayer1Player2Game();
		return;
	}

	$("#tag-option-x").click(Xbtn);
	$("#tag-option-o").click(Obtn);
	$("#tag-back").click(backButton);
	return;
}

function loadGrid() {
	var maplog = logGenerator(false);
	maplog("--------loadGrid---------");

	jQuery('<div/>', {
		id: 'tag-grid-wrapper',
		class: 'grid-wrapper'
	}).appendTo("#tag-hidden-holder");

	jQuery('<div/>', {
		id: 'tag-line-ver-left',
		class: 'line-ver-left',
	}).appendTo("#tag-grid-wrapper");

	jQuery('<div/>', {
		id: 'tag-line-ver-right',
		class: 'line-ver-right',
	}).appendTo("#tag-grid-wrapper");

	jQuery('<div/>', {
		id: 'tag-line-hor-up',
		class: 'line-hor-up',
	}).appendTo("#tag-grid-wrapper");

	jQuery('<div/>', {
		id: 'tag-line-hor-down',
		class: 'line-hor-down',
	}).appendTo("#tag-grid-wrapper");


}

function loadPlayerComputerHeader(){

	var maplog = logGenerator(false);
	maplog("--------loadPlayerComputerHeader---------");

	jQuery('<div/>', {
		id: 'tag-wrapper-scoreboard',
		class: 'wrapper-scoreboard',
	}).appendTo("#tag-hidden-holder");

	jQuery('<div/>', {
		id: 'tag-player1-score',
		class: 'player1-score',
		text: "0",
	}).appendTo("#tag-wrapper-scoreboard");

	jQuery('<div/>', {
		id: 'tag-player1-title',
		class: 'player1-title',
		text: "Player 1",
	}).appendTo("#tag-wrapper-scoreboard");

	jQuery('<div/>', {
		id: 'tag-partition-line',
		class: 'partition-line',
	}).appendTo("#tag-wrapper-scoreboard");

	jQuery('<div/>', {
		id: 'tag-computer-score',
		class: 'computer-score',
		text: "0",
	}).appendTo("#tag-wrapper-scoreboard");

	jQuery('<div/>', {
		id: 'tag-computer-title',
		class: 'computer-title',
		text: "Computer",
	}).appendTo("#tag-wrapper-scoreboard");

	jQuery('<div/>', {
		id: 'tag-reset-all',
		class: 'reset-all',
		text: "Reset All",
	}).appendTo("#tag-wrapper-scoreboard");

}

function loadComputersTurnAnimation(){
	var maplog = logGenerator(false);
	maplog("--------loadComputersTurnAnimation---------");

	jQuery('<div/>', {
		id: 'tag-computers-turn-label'
	}).appendTo("#tag-hidden-holder");

	$("#tag-computers-turn-label").addClass("computers-turn-label");
	$("#tag-computers-turn-label").text("Computer's Turn");
	
	return;
}

function loadTouchGrid(){
	var maplog = logGenerator(false);
	maplog("--------loadTouchGrid---------");

	jQuery('<div/>', {
		id: 'tag-touch-grid-wrapper',
		class: "touch-grid-wrapper"
	}).appendTo("#tag-hidden-holder");

	jQuery('<div/>', {
		id: 'tag-grid-box0',
		class: "grid-box row1 col1"
	}).appendTo("#tag-touch-grid-wrapper");

	jQuery('<div/>', {
		id: 'tag-grid-box1',
		class: "grid-box row1 col2"
	}).appendTo("#tag-touch-grid-wrapper");

	jQuery('<div/>', {
		id: 'tag-grid-box2',
		class: "grid-box row1 col3"
	}).appendTo("#tag-touch-grid-wrapper");

	jQuery('<div/>', {
		id: 'tag-grid-box3',
		class: "grid-box row2 col1"
	}).appendTo("#tag-touch-grid-wrapper");

	jQuery('<div/>', {
		id: 'tag-grid-box4',
		class: "grid-box row2 col2"
	}).appendTo("#tag-touch-grid-wrapper");

	jQuery('<div/>', {
		id: 'tag-grid-box5',
		class: "grid-box row2 col3"
	}).appendTo("#tag-touch-grid-wrapper");
	jQuery('<div/>', {
		id: 'tag-grid-box6',
		class: "grid-box row3 col1"
	}).appendTo("#tag-touch-grid-wrapper");
	jQuery('<div/>', {
		id: 'tag-grid-box7',
		class: "grid-box row3 col2"
	}).appendTo("#tag-touch-grid-wrapper");
	jQuery('<div/>', {
		id: 'tag-grid-box8',
		class: "grid-box row3 col3"
	}).appendTo("#tag-touch-grid-wrapper");
}

function computersTurnVsPlayer1() {
	var maplog = logGenerator(false);

	maplog("--------computersTurn---------");
	
	maplog("Increasing Label Height");

	$("#tag-computers-turn-label").animate({
			height: "toggle"
		},
		mapGv.anim2, function() {
			computerMarkVsPlayer1();

			$("#tag-computers-turn-label").animate({
				height: "toggle"
			}, mapGv.anim2, function() {

				var tmpResult = getGameResultPlayer1Computer();

				if (tmpResult == "incomplete") {
					maplog("incomplete, player1 turn...");
					return player1TurnVsComputer();

				} else if (tmpResult == "draw") {
					maplog("its a draw...restarting");
					return updateScoreAndNextRoundPlayer1Computer(tmpResult);
				} else if (tmpResult == "computer") {
					maplog("Computer wins, restarting...");
					return updateScoreAndNextRoundPlayer1Computer(tmpResult);
				} else if (tmpResult == "player1"){
					maplog("Ooops ERROR, what are you doing here?...");
					updateScoreAndNextRoundPlayer1Computer(tmpResult);
					return;
				}
			});
		});
}

function setEventsTouchGridForPlayer1VsComputer() {
	function clickBox1() {
		var maplog = logGenerator(false);
		maplog("--------clickBox1---------");
		Player1ClickedBoxVsComputer(0);
	}

	function clickBox2() {
		var maplog = logGenerator(false);
		maplog("--------clickBox2---------");
		Player1ClickedBoxVsComputer(1);
	}

	function clickBox3() {
		var maplog = logGenerator(false);
		maplog("--------clickBox3---------");
		Player1ClickedBoxVsComputer(2);
	}

	function clickBox4() {
		var maplog = logGenerator(false);
		maplog("--------clickBox4---------");
		Player1ClickedBoxVsComputer(3);
	}

	function clickBox5() {
		var maplog = logGenerator(false);
		maplog("--------clickBox5---------");
		Player1ClickedBoxVsComputer(4);
	}

	function clickBox6() {
		var maplog = logGenerator(false);
		maplog("--------clickBox6---------");
		Player1ClickedBoxVsComputer(5);
	}

	function clickBox7() {
		var maplog = logGenerator(false);
		maplog("--------clickBox7---------");
		Player1ClickedBoxVsComputer(6);
	}

	function clickBox8() {
		var maplog = logGenerator(false);
		maplog("--------clickBox8---------");
		Player1ClickedBoxVsComputer(7);
	}

	function clickBox9() {
		var maplog = logGenerator(false);
		maplog("--------clickBox9---------");
		Player1ClickedBoxVsComputer(8);
	}
	
	$("#tag-grid-box0").click(clickBox1);
	$("#tag-grid-box1").click(clickBox2);
	$("#tag-grid-box2").click(clickBox3);
	$("#tag-grid-box3").click(clickBox4);
	$("#tag-grid-box4").click(clickBox5);
	$("#tag-grid-box5").click(clickBox6);
	$("#tag-grid-box6").click(clickBox7);
	$("#tag-grid-box7").click(clickBox8);
	$("#tag-grid-box8").click(clickBox9);
}

function computerMarkVsPlayer1() {
	var maplog = logGenerator(false);

	maplog("--------computerMarkVsPlayer1---------");

	var tmpLocation = getBestMarkLocationforComputer();
	maplog("Best location for computer: "+tmpLocation);

	mapGv.boardPlayer1Computer[tmpLocation]=mapGv.SinglePlayerComputerMark;
	addMarkToBoard(tmpLocation, mapGv.SinglePlayerComputerMark);


	// testing here
	// setTestBoardComputer();
	
	maplog("mark added: "+mapGv.SinglePlayerComputerMark);
	maplog("new board: ");
	maplog(mapGv.boardPlayer1Computer);

	return;
}

function player1TurnVsComputer() {
	var maplog = logGenerator(false);

	maplog("--------player1Turn---------");

	$("#tag-player1s-turn-label").animate({
			height: "toggle"
		},
		mapGv.anim2,
		function() {
			maplog("player1 label loaded, setting events...");
			setEventsTouchGridForPlayer1VsComputer();
			maplog("Player1 turn completed...");
		});
}

function Player1ClickedBoxVsComputer(boxNum) {
	var maplog = logGenerator(false);
	
	maplog("----------Player1ClickedBoxVsComputer-----------");

	if (mapGv.boardPlayer1Computer[boxNum] == "empty") {
		maplog("Current Box is Empty and available: " + boxNum);
		addMarkToBoard(boxNum, mapGv.SinglePlayerPlayer1Mark);
		mapGv.boardPlayer1Computer[boxNum] = mapGv.SinglePlayerPlayer1Mark;
		remEventsTouchGrid();

		//set test board
		// setTestBoardPlayer1();

		maplog("updated board: ");
		maplog(mapGv.boardPlayer1Computer);
		maplog("Checking game result ...");

		$("#tag-player1s-turn-label").animate({
				height: "toggle"
			},
			mapGv.anim2,
			function() {

				var tmpResult = getGameResultPlayer1Computer();

				if (tmpResult == "incomplete") {
					maplog("incomplete, computers turn...");
					removeEventsTouchGridForPlayer1VsComputer();
					computersTurnVsPlayer1();
					return;
				} else if (tmpResult == "draw") {
					maplog("its a draw...restarting");
					return updateScoreAndNextRoundPlayer1Computer(tmpResult);

				} else if (tmpResult == "player1") {
					maplog("Player1 win, restarting...");
					return updateScoreAndNextRoundPlayer1Computer(tmpResult);
				}
			});

	} else {
		return maplog("box already full, do nothing...");
	}
}

function addMarkToBoard(boxNum, markStr){
	var maplog = logGenerator(false);
	maplog("----------addMarkToBoard-----------");
	
	maplog("adding mark: "+ markStr);
	maplog("to box: "+boxNum);
	$("#tag-grid-box"+boxNum.toString()).text(markStr);
}

function getBestMarkLocationforComputer() {
	var maplog = logGenerator(true);
	maplog("----------getBestMarkLocationforComputer-----------");

	var tmpLoc = -1;
	tmpLoc = chkAnyWinningLocation();
	if (tmpLoc !== -1) {
		maplog("Winning Mark Location Found: " + tmpLoc + " returning...");
		return tmpLoc;
	} else {
		tmpLoc = getPlayer1BlockWinLoc();
		if (tmpLoc != -1) {
			maplog("Player1 block win location found: " + tmpLoc + " returning...");
			return tmpLoc;
		} else {

			tmpLoc = getDualWinPossibleLocation();
			if (tmpLoc != -1) {
				maplog("found a dual win loc, returning: " + tmpLoc);
				return tmpLoc;
			} else {
				tmpLoc = getPossiblePlayer1DualWinBlockLoc();

				if (tmpLoc != -1) {
					maplog("PossiblePlayer1DualWinBlockLoc found, return: " + tmpLoc);
					return tmpLoc;
				} else {
					tmpLoc = getAvailableDiagonalLoc();
					if (tmpLoc != -1) {
						maplog("diagonal space available, returning:" + tmpLoc);
						return tmpLoc;
					} else {
						tmpLoc = getAnyDiagonalAvailableSpace();
						if (tmpLoc != -1) {
							maplog("Any diagonal space available, return:" + tmpLoc);
						return tmpLoc;
						} else {
							maplog("No best location, return random");
							for (var i = mapGv.boardPlayer1Computer.length - 1; i >= 0; i--) {
								if (mapGv.boardPlayer1Computer[i] == "empty") return i;
							}
						}
					}
				}
			}
		}
	}
}

function getGameResultPlayer1Computer() {
	var maplog = logGenerator(false);
	maplog("--------getGameResult---------");

	//not a copy, pointer to the same array!!!
	var tmpArr = mapGv.boardPlayer1Computer;
	maplog(tmpArr);

	if (tmpArr[0] != "empty" &&
		tmpArr[0] == tmpArr[1] && tmpArr[1] == tmpArr[2]) {
		maplog("MATCH - Row 1");
		return getWinnerFromMark(tmpArr[0]);

	} else if (tmpArr[3] != "empty" &&
		tmpArr[3] == tmpArr[4] && tmpArr[4] == tmpArr[5]) {
		maplog("MATCH - Row 2");
		return getWinnerFromMark(tmpArr[3]);

	} else if (tmpArr[6] != "empty" &&
		tmpArr[6] == tmpArr[7] && tmpArr[7] == tmpArr[8]) {
		maplog("MATCH - Row 3");
		return getWinnerFromMark(tmpArr[6]);

	} else if (tmpArr[0] != "empty" &&
		tmpArr[0] == tmpArr[3] && tmpArr[3] == tmpArr[6]) {
		maplog("MATCH - Col 1");
		return getWinnerFromMark(tmpArr[0]);

	} else if (tmpArr[1] != "empty" &&
		tmpArr[1] == tmpArr[4] && tmpArr[4] == tmpArr[7]) {
		maplog("MATCH - Col 2");
		return getWinnerFromMark(tmpArr[1]);

	} else if (tmpArr[2] != "empty" &&
		tmpArr[2] == tmpArr[5] && tmpArr[5] == tmpArr[8]) {
		maplog("MATCH - Col 3");
		return getWinnerFromMark(tmpArr[2]);

	} else if (tmpArr[0] != "empty" &&
		tmpArr[0] == tmpArr[4] && tmpArr[4] == tmpArr[8]) {
		maplog("MATCH - backward Slash");
		return getWinnerFromMark(tmpArr[0]);

	} else if (tmpArr[2] != "empty" &&
		tmpArr[2] == tmpArr[4] && tmpArr[4] == tmpArr[6]) {
		maplog("MATCH - forward Slash");
		return getWinnerFromMark(tmpArr[2]);

	} else if (tmpArr.indexOf("empty") == -1) {
		maplog("DRAW - no match and board full");
		return "draw";
	} else {
		maplog("game incomplete...");
		return "incomplete";
	}
}

function getWinnerFromMark(mark) {
	var maplog = logGenerator(true);
	maplog("--------getWinnerFromMark---------");

	if (mapGv.GameMode == "SinglePlayer") {
		if (mark === mapGv.SinglePlayerPlayer1Mark) {
			maplog("player1 winner, returning...");
			return "player1";
		} else if (mark === mapGv.SinglePlayerComputerMark) {
			maplog("computer winner, returning...");
			return "computer";
		}
	} else if (mapGv.GameMode == "TwoPlayer") {
		if (mark === mapGv.TwoPlayerPlayer1Mark) {
				maplog("player1 winner, returning...");
				return "player1";
			} else if (mark === mapGv.TwoPlayerPlayer2Mark) {
				maplog("player2 winner, returning...");
				return "player2";
			}
	}


}

function updateScoreAndNextRoundPlayer1Computer(strWinner) {
	var maplog = logGenerator(true);
	maplog("--------updateScoreAndNextRoundPlayer1Computer---------");
	updateScore(strWinner);
	loadBlackScreenWithGameResult(strWinner);
	$("#tag-black-screen-wrapper").css("display", "none");
	$("#tag-black-screen-wrapper").fadeIn(mapGv.anim2, function() {
		maplog("draw screen shown");
		$("#tag-black-screen-wrapper").fadeOut(mapGv.anim2, function() {
			maplog("draw screen disapeared");
			$("#tag-black-screen-wrapper").remove();
				return newMatchPlayer1VsComputer();
		});

	});
}

function updateScore(strWinner) {

	var maplog = logGenerator(true);
	maplog("--------updateScore---------");

	if (strWinner === "computer") {
		var tmpComputerScore = Number($("#tag-computer-score").text());
		tmpComputerScore = tmpComputerScore+1;
		$("#tag-computer-score").text(tmpComputerScore.toString());
		maplog("updated computer score, returning...");
		return;

	} else if (strWinner === "player1") {
		
		var tmpPlayer1Score = Number($("#tag-player1-score").text());
		tmpPlayer1Score = tmpPlayer1Score+1;
		$("#tag-player1-score").text(tmpPlayer1Score.toString());
		maplog("updated player1 score, returning...");
		return;

	} else if (strWinner === "draw") {
		maplog("its a draw, no need to update score board, returning...");
		return;
	}
}

function loadBlackScreenWithGameResult(strWinner){

	var maplog = logGenerator(false);
	maplog("--------loadDrawScreen---------");

	jQuery('<div/>', {
		id: 'tag-black-screen-wrapper',
		class: 'black-screen-wrapper'
	}).appendTo("#tag-hidden-holder");

	var tmpWinner = "";
	if (strWinner==="player1") {
		tmpWinner = "Player-1 Wins, restarting...";
	} else if (strWinner==="computer") {
		tmpWinner= "Computer Wins, restarting...";
	} else if (strWinner==="draw"){
		tmpWinner= "It's a draw, restarting...";
	} else if (strWinner==="player2"){
		tmpWinner= "Player-2 Wins, restarting...";
	}

	jQuery('<div/>', {
		id: 'tag-draw-text',
		class: 'draw-text',
		text: tmpWinner
	}).appendTo("#tag-black-screen-wrapper");


	// $("#tag-black-screen-wrapper").text("Hello");
}

function newMatchPlayer1VsComputer() {

	var maplog = logGenerator(false);
	maplog("--------newMatchPlayer1VsComputer---------");
	
	for (var i = 0; i < mapGv.boardPlayer1Computer.length; i++) {
		if (mapGv.boardPlayer1Computer[i]!="empty") {
			$("#tag-grid-box"+i.toString()).text("");
		}
	}

	mapGv.boardPlayer1Computer = [
		"empty", "empty", "empty",
		"empty", "empty", "empty",
		"empty", "empty", "empty"
	];

	if (mapGv.whosTurnPlayer1VsComputer == "computer") {
		mapGv.whosTurnPlayer1VsComputer = "player1";
		return player1TurnVsComputer();

	} else if (mapGv.whosTurnPlayer1VsComputer == "player1") {
		mapGv.whosTurnPlayer1VsComputer = "computer";
		return computersTurnVsPlayer1();
	}
}

function loadPlayer1sTurnAnimation(){
	var maplog = logGenerator(false);
	maplog("--------loadPlayer1sTurnAnimation---------");

	jQuery('<div/>', {
		id: 'tag-player1s-turn-label'
	}).appendTo("#tag-hidden-holder");

	$("#tag-player1s-turn-label").addClass("player1s-turn-label");
	$("#tag-player1s-turn-label").text("Player 1's Turn");
	
	return;
}

function setEventResetAllBtn() {

	var maplog = logGenerator(false);
	maplog("--------setEventResetAllBtn---------");

	function disableCurrentScreenAndRestartApp() {

		var maplog = logGenerator(false);
		maplog("--------disableCurrentScreenAndRestartApp---------");

		$("#tag-hidden-holder").fadeOut(mapGv.anim1, function() {
			$("#tag-hidden-holder").empty();
			init();
			return;
		});

		return;

	}

	$("#tag-reset-all").click(function() {
		mapGv.boardPlayer1Computer = [
			"empty", "empty", "empty",
			"empty", "empty", "empty",
			"empty", "empty", "empty"
		];

		mapGv.GameMode = "";

		mapGv.SinglePlayerPlayer1Mark = "";
		mapGv.SinglePlayerComputerMark = "";
		mapGv.whosTurnPlayer1VsComputer = "";

		mapGv.TwoPlayerPlayer1Mark = "";
		mapGv.TwoPlayerPlayer2Mark = "";
		mapGv.whosTurnPlayer1VsPlayer2 = "";

		mapGv.scorePlayer1 = 0;
		mapGv.scorePlayer2 = 0;
		mapGv.computer = 0;

		disableCurrentScreenAndRestartApp();
		return;
	});

	return;
}

function loadPlayer1Player2Header(){
	var maplog = logGenerator(false);
	maplog("--------loadPlayer1Player2Header---------");

	jQuery('<div/>', {
		id: 'tag-wrapper-scoreboard',
		class: 'wrapper-scoreboard',
	}).appendTo("#tag-hidden-holder");

	jQuery('<div/>', {
		id: 'tag-player1-score',
		class: 'player1-score',
		text: "0",
	}).appendTo("#tag-wrapper-scoreboard");

	jQuery('<div/>', {
		id: 'tag-player1-title',
		class: 'player1-title',
		text: "Player 1",
	}).appendTo("#tag-wrapper-scoreboard");

	jQuery('<div/>', {
		id: 'tag-partition-line',
		class: 'partition-line',
	}).appendTo("#tag-wrapper-scoreboard");

	jQuery('<div/>', {
		id: 'tag-player2-score',
		class: 'player2-score',
		text: "0",
	}).appendTo("#tag-wrapper-scoreboard");

	jQuery('<div/>', {
		id: 'tag-player2-title',
		class: 'player2-title',
		text: "Player 2",
	}).appendTo("#tag-wrapper-scoreboard");

	jQuery('<div/>', {
		id: 'tag-reset-all',
		class: 'reset-all',
		text: "Reset All",
	}).appendTo("#tag-wrapper-scoreboard");

	return;

}

function loadPlayer2sTurnAnimation(){
	var maplog = logGenerator(false);
	maplog("--------loadPlayer2sTurnAnimation---------");

	jQuery('<div/>', {
		id: 'tag-player2s-turn-label'
	}).appendTo("#tag-hidden-holder");

	$("#tag-player2s-turn-label").addClass("player2s-turn-label");
	$("#tag-player2s-turn-label").text("Player 2's Turn");

	return;
}

function player2TurnVsPlayer1() {
	var maplog = logGenerator(true);

	maplog("--------player2TurnVsPlayer1---------");

	$("#tag-player2s-turn-label").animate({
			height: "toggle"
		},
		mapGv.anim2,
		function() {
			maplog("player 2 label loaded, setting events...");
			setEventsTouchGridForPlayer2VsPlayer1();
		});
}

function setEventsTouchGridForPlayer2VsPlayer1() {

	var maplog = logGenerator(true);
	maplog("--------setEventsTouchGridForPlayer2VsPlayer1---------");

	function clickBox1() {
		var maplog = logGenerator(false);
		maplog("--------clickBox1---------");
		Player2ClickedBoxVsPlayer1(0);
	}

	function clickBox2() {
		var maplog = logGenerator(false);
		maplog("--------clickBox2---------");
		Player2ClickedBoxVsPlayer1(1);
	}

	function clickBox3() {
		var maplog = logGenerator(false);
		maplog("--------clickBox3---------");
		Player2ClickedBoxVsPlayer1(2);
	}

	function clickBox4() {
		var maplog = logGenerator(false);
		maplog("--------clickBox4---------");
		Player2ClickedBoxVsPlayer1(3);
	}

	function clickBox5() {
		var maplog = logGenerator(false);
		maplog("--------clickBox5---------");
		Player2ClickedBoxVsPlayer1(4);
	}

	function clickBox6() {
		var maplog = logGenerator(false);
		maplog("--------clickBox6---------");
		Player2ClickedBoxVsPlayer1(5);
	}

	function clickBox7() {
		var maplog = logGenerator(false);
		maplog("--------clickBox7---------");
		Player2ClickedBoxVsPlayer1(6);
	}

	function clickBox8() {
		var maplog = logGenerator(false);
		maplog("--------clickBox8---------");
		Player2ClickedBoxVsPlayer1(7);
	}

	function clickBox9() {
		var maplog = logGenerator(false);
		maplog("--------clickBox9---------");
		Player2ClickedBoxVsPlayer1(8);
	}

	$("#tag-grid-box0").click(clickBox1);
	$("#tag-grid-box1").click(clickBox2);
	$("#tag-grid-box2").click(clickBox3);
	$("#tag-grid-box3").click(clickBox4);
	$("#tag-grid-box4").click(clickBox5);
	$("#tag-grid-box5").click(clickBox6);
	$("#tag-grid-box6").click(clickBox7);
	$("#tag-grid-box7").click(clickBox8);
	$("#tag-grid-box8").click(clickBox9);

}

function setEventsTouchGridForPlayer1VsPlayer2() {

	var maplog = logGenerator(true);
	maplog("--------setEventsTouchGridForPlayer1VsPlayer2---------");

	function clickBox1() {
		var maplog = logGenerator(false);
		maplog("--------clickBox1---------");
		Player1ClickedBoxVsPlayer2(0);
	}

	function clickBox2() {
		var maplog = logGenerator(false);
		maplog("--------clickBox2---------");
		Player1ClickedBoxVsPlayer2(1);
	}

	function clickBox3() {
		var maplog = logGenerator(false);
		maplog("--------clickBox3---------");
		Player1ClickedBoxVsPlayer2(2);
	}

	function clickBox4() {
		var maplog = logGenerator(false);
		maplog("--------clickBox4---------");
		Player1ClickedBoxVsPlayer2(3);
	}

	function clickBox5() {
		var maplog = logGenerator(false);
		maplog("--------clickBox5---------");
		Player1ClickedBoxVsPlayer2(4);
	}

	function clickBox6() {
		var maplog = logGenerator(false);
		maplog("--------clickBox6---------");
		Player1ClickedBoxVsPlayer2(5);
	}

	function clickBox7() {
		var maplog = logGenerator(false);
		maplog("--------clickBox7---------");
		Player1ClickedBoxVsPlayer2(6);
	}

	function clickBox8() {
		var maplog = logGenerator(false);
		maplog("--------clickBox8---------");
		Player1ClickedBoxVsPlayer2(7);
	}

	function clickBox9() {
		var maplog = logGenerator(false);
		maplog("--------clickBox9---------");
		Player1ClickedBoxVsPlayer2(8);
	}

	$("#tag-grid-box0").click(clickBox1);
	$("#tag-grid-box1").click(clickBox2);
	$("#tag-grid-box2").click(clickBox3);
	$("#tag-grid-box3").click(clickBox4);
	$("#tag-grid-box4").click(clickBox5);
	$("#tag-grid-box5").click(clickBox6);
	$("#tag-grid-box6").click(clickBox7);
	$("#tag-grid-box7").click(clickBox8);
	$("#tag-grid-box8").click(clickBox9);

}

function removeEventsTouchGridForPlayer1VsComputer(){
	var maplog = logGenerator(false);
	maplog("----------removeEventsTouchGridForPlayer1VsComputer-----------");
	
	return;

}

function updateScoreAndNextRoundPlayer1Player2(strWinner){
	var maplog = logGenerator(true);
	maplog("--------updateScoreAndNextRoundPlayer1Player2---------");
	
	updateScoreTwoPlayer(strWinner);
	loadBlackScreenWithGameResult(strWinner);
	$("#tag-black-screen-wrapper").css("display", "none");
	$("#tag-black-screen-wrapper").fadeIn(mapGv.anim2, function() {
		maplog("draw screen shown");
		$("#tag-black-screen-wrapper").fadeOut(mapGv.anim2, function() {
			maplog("draw screen disapeared");
			$("#tag-black-screen-wrapper").remove();
				return newMatchPlayer1VsPlayer2();
		});

	});
}

function updateScoreTwoPlayer(strWinner){
	var maplog = logGenerator(true);
	maplog("--------updateScoreTwoPlayer---------");

	if (strWinner === "player2") {
		var tmpPlayer2Score = Number($("#tag-player2-score").text());
		tmpPlayer2Score = tmpPlayer2Score+1;
		$("#tag-player2-score").text(tmpPlayer2Score.toString());
		maplog("updated player 2 score, returning...");
		return;

	} else if (strWinner === "player1") {
		
		var tmpPlayer1Score = Number($("#tag-player1-score").text());
		tmpPlayer1Score = tmpPlayer1Score+1;
		$("#tag-player1-score").text(tmpPlayer1Score.toString());
		maplog("updated player1 score, returning...");
		return;

	} else if (strWinner === "draw") {
		maplog("its a draw, no need to update score board, returning...");
		return;
	}
}

function Player2ClickedBoxVsPlayer1(boxNum) {
	var maplog = logGenerator(true);
	maplog("----------Player2ClickedBoxVsPlayer11-----------");
	//remove all click events
	remEventsTouchGrid();

	if (mapGv.boardPlayer1Computer[boxNum] == "empty") {
		maplog("Current Box is Empty and available: " + boxNum);
		maplog("TwoPlayerPlayer2Mark: ");
		maplog(mapGv.TwoPlayerPlayer2Mark);
		addMarkToBoard(boxNum, mapGv.TwoPlayerPlayer2Mark);
		mapGv.boardPlayer1Computer[boxNum] = mapGv.TwoPlayerPlayer2Mark;

		// testing here
		// setTestBoardPlayer2();


		maplog("updated board: ");
		maplog(mapGv.boardPlayer1Computer);
		maplog("Checking game result ...");

		$("#tag-player2s-turn-label").animate({
				height: "toggle"
			},
			mapGv.anim2,
			function() {

				//using computer method for player2 game
				var tmpResult = getGameResultPlayer1Computer();

				if (tmpResult == "incomplete") {
					maplog("incomplete, computers turn...");

					// removeEventsTouchGridForPlayer1VsPlayer2();
					player1TurnVsPlayer2();
					return;
				} else if (tmpResult == "draw") {
					maplog("its a draw...restarting");
					updateScoreAndNextRoundPlayer1Player2(tmpResult);
					return; 

				} else if (tmpResult == "player2") {
					maplog("Player2 win, restarting...");
					updateScoreAndNextRoundPlayer1Player2(tmpResult);
					return; 
				}
			});

	} else {
		return maplog("box already full, do nothing...");
	}

}

function player1TurnVsPlayer2(){
	var maplog = logGenerator(true);

	maplog("--------player1TurnVsPlayer1---------");

	$("#tag-player1s-turn-label").animate({
			height: "toggle"
		},
		mapGv.anim2,
		function() {
			maplog("player 1 label loaded, setting events...");
			setEventsTouchGridForPlayer1VsPlayer2();
		});
}

function Player1ClickedBoxVsPlayer2(boxNum) {
	var maplog = logGenerator(true);
	maplog("----------Player1ClickedBoxVsPlayer2-----------");

	//remove all click events
	remEventsTouchGrid();

	if (mapGv.boardPlayer1Computer[boxNum] == "empty") {
		maplog("Current Box is Empty and available: " + boxNum);
		maplog("TwoPlayerPlayer1Mark: ");
		maplog(mapGv.TwoPlayerPlayer1Mark);
		addMarkToBoard(boxNum, mapGv.TwoPlayerPlayer1Mark);
		mapGv.boardPlayer1Computer[boxNum] = mapGv.TwoPlayerPlayer1Mark;

		// testing here
		// setTestBoardPlayer1();
		

		maplog("updated board: ");
		maplog(mapGv.boardPlayer1Computer);
		maplog("Checking game result ...");

		$("#tag-player1s-turn-label").animate({
				height: "toggle"
			},
			mapGv.anim2,
			function() {

				//using computer method for player2 game
				var tmpResult = getGameResultPlayer1Computer();

				if (tmpResult == "incomplete") {
					maplog("incomplete, computers turn...");

					// removeEventsTouchGridForPlayer1VsPlayer2();
					player2TurnVsPlayer1();
					return;
				} else if (tmpResult == "draw") {
					maplog("its a draw...restarting");
					return updateScoreAndNextRoundPlayer1Player2(tmpResult);

				} else if (tmpResult == "player1") {
					maplog("Player1 win, restarting...");
					return updateScoreAndNextRoundPlayer1Player2(tmpResult);
				} else if (tmpResult == "player2") {
					maplog("ERROR - Player2 wins !");
					return;
				}
			});

	} else {
		return maplog("box already full, do nothing...");
	}

}

function remEventsTouchGrid() {
	var maplog = logGenerator(true);
	
	maplog("----------remEventsTouchGrid-----------");
	$("#tag-grid-box0").off("click");
	$("#tag-grid-box1").off("click");
	$("#tag-grid-box2").off("click");
	$("#tag-grid-box3").off("click");
	$("#tag-grid-box4").off("click");
	$("#tag-grid-box5").off("click");
	$("#tag-grid-box6").off("click");
	$("#tag-grid-box7").off("click");
	$("#tag-grid-box8").off("click");

	return;
}

function newMatchPlayer1VsPlayer2(){
	var maplog = logGenerator(true);
	maplog("--------newMatchPlayer1VsPlayer2---------");
	
	for (var i = 0; i < mapGv.boardPlayer1Computer.length; i++) {
		if (mapGv.boardPlayer1Computer[i]!="empty") {
			$("#tag-grid-box"+i.toString()).text("");
		}
	}

	mapGv.boardPlayer1Computer = [
		"empty", "empty", "empty",
		"empty", "empty", "empty",
		"empty", "empty", "empty"
	];

	if (mapGv.whosTurnPlayer1VsPlayer2 == "player2") {
		mapGv.whosTurnPlayer1VsPlayer2 = "player1";
		return player1TurnVsPlayer2();

	} else if (mapGv.whosTurnPlayer1VsPlayer2 == "player1") {
		mapGv.whosTurnPlayer1VsPlayer2 = "player2";
		return player2TurnVsPlayer1();
	}
}

function updateDisplay() {
	for (var i = 0; i < mapGv.boardPlayer1Computer.length; i++) {
		if (mapGv.boardPlayer1Computer[i] != "empty") {
			$("#tag-grid-box" + i.toString()).text(mapGv.boardPlayer1Computer[i]);
		} else {
			$("#tag-grid-box" + i.toString()).text("");
		}
	}
}

function setTestBoardPlayer1() {

	var maplog = logGenerator(true);
	maplog("--------setTestBoard---------");

	maplog("set draw board");

	mapGv.boardPlayer1Computer = [
		"empty", "empty", "empty",
		"o", "empty", "x",
		"o", "empty", "empty"
	];

	updateDisplay();

	return;
}

function setTestBoardPlayer2() {

	var maplog = logGenerator(true);
	// maplog("--------setTestBoard---------");

	maplog("set draw board");
	mapGv.boardPlayer1Computer = [
		"o", "o", "x",
		"o", "o", "x",
		"x", "x", "o"
	];

	updateDisplay();

	return;
}

function setTestBoardComputer() {

	var maplog = logGenerator(true);
	// maplog("--------setTestBoard---------");

	maplog("set draw board");
	mapGv.boardPlayer1Computer = [
		"o", "o", "x",
		"o", "o", "x",
		"x", "x", "o"
	];

	updateDisplay();

	return;
}

function chkAnyWinningLocation() {
	var maplog = logGenerator(false);
	maplog("----------chkAnyWinningLocation-----------");

	function getLineWinLocation(arr3locs) {
		var maplog = logGenerator(false);
		maplog("----------getLineWinLocation-----------");
		maplog("current board: ");
		maplog(tmpBoard);
		maplog("Current line: ");
		maplog(arr3locs);
		var tmpNoOfEmptyLocs = 0;
		var tmpWinLoc = -1;

		for (var i = 0; i < arr3locs.length; i++) {
			if (tmpBoard[arr3locs[i]] == "empty") {
				maplog("empty/winLoc found: " + arr3locs[i]);
				tmpNoOfEmptyLocs++;
				tmpWinLoc = arr3locs[i];
			}
		}

		if (tmpNoOfEmptyLocs !== 1) {
			maplog("tmpNoOfEmptyLocs != 1, not found, returning");
			return -1;
		} else {

			maplog("tmpNoOfEmptyLocs == 1");
			var tmpCountCompMarks = 0;

			for (var j = 0; j < arr3locs.length; j++) {
				if (tmpBoard[arr3locs[j]] == tmpCompMark) {
					tmpCountCompMarks++;
				}
			}

			if (tmpCountCompMarks != 2) {
				maplog("2 comp marks NOT found, return -1");
				return -1;
			} else {
				maplog("2 comp marks found, return location");
				return tmpWinLoc;
			}
		}

	}

	var tmpBoard = mapGv.boardPlayer1Computer;
	var tmpCompMark = mapGv.SinglePlayerComputerMark;

	var lineResultsArr = [];
	lineResultsArr[0] = getLineWinLocation([0, 1, 2]);
	lineResultsArr[1] = getLineWinLocation([3, 4, 5]);
	lineResultsArr[2] = getLineWinLocation([6, 7, 8]);
	lineResultsArr[3] = getLineWinLocation([0, 3, 6]);
	lineResultsArr[4] = getLineWinLocation([1, 4, 7]);
	lineResultsArr[5] = getLineWinLocation([2, 5, 8]);
	lineResultsArr[6] = getLineWinLocation([0, 4, 8]);
	lineResultsArr[7] = getLineWinLocation([2, 4, 6]);

	for (var k = 0; k < lineResultsArr.length; k++) {
		if (lineResultsArr[k] !== -1) {
			maplog("winning mark loc found: " + lineResultsArr[k] + " ...returning...");
			return lineResultsArr[k];
		}
	}

	return -1;
}

function getPlayer1BlockWinLoc() {
	var maplog = logGenerator(false);
	maplog("----------getPlayer1BlockWinLoc-----------");

	function getBlockLoc(arr2Chk) {
		var maplog = logGenerator(false);
		maplog("----------getBlockLoc-----------");
		maplog("current board: ");
		maplog(tmpBoard);
		maplog("Current line: ");
		maplog(arr2Chk);

		var tmpNoOfEmptyLocs = 0;
		var tmpWinLoc = -1;

		for (var i = 0; i < arr2Chk.length; i++) {
			if (tmpBoard[arr2Chk[i]] == "empty") {
				maplog("empty/winLoc found: " + arr2Chk[i]);
				tmpNoOfEmptyLocs++;
				tmpWinLoc = arr2Chk[i];
			}
		}

		if (tmpNoOfEmptyLocs !== 1) {
			maplog("tmpNoOfEmptyLocs != 1, not found, returning");
			return -1;
		} else {

			maplog("tmpNoOfEmptyLocs == 1");
			var tmpCountPlayer1Marks = 0;


			for (var j = 0; j < arr2Chk.length; j++) {
				if (tmpBoard[arr2Chk[j]] == tmpPlayer1Mark) {
					tmpCountPlayer1Marks++;
				}
			}

			if (tmpCountPlayer1Marks != 2) {
				maplog("2 player1 marks NOT found, return -1");
				return -1;
			} else {
				maplog("2 player1 marks found, return location");
				return tmpWinLoc;
			}

		}

	}

	var tmpBoard = mapGv.boardPlayer1Computer;
	var tmpCompMark = mapGv.SinglePlayerComputerMark;
	var tmpPlayer1Mark = mapGv.SinglePlayerPlayer1Mark;

	var arrLines2ChkResults = [];
	arrLines2ChkResults[0] = getBlockLoc([0, 1, 2]);
	arrLines2ChkResults[1] = getBlockLoc([3, 4, 5]);
	arrLines2ChkResults[2] = getBlockLoc([6, 7, 8]);
	arrLines2ChkResults[3] = getBlockLoc([0, 3, 6]);
	arrLines2ChkResults[4] = getBlockLoc([1, 4, 7]);
	arrLines2ChkResults[5] = getBlockLoc([2, 5, 8]);
	arrLines2ChkResults[6] = getBlockLoc([0, 4, 8]);
	arrLines2ChkResults[7] = getBlockLoc([2, 4, 6]);

	for (var i = 0; i < arrLines2ChkResults.length; i++) {
		if (arrLines2ChkResults[i] != -1) {
			maplog("found block loc: " + arrLines2ChkResults[i]);
			return arrLines2ChkResults[i];
		}
	}

	return -1;
}

function getDualWinPossibleLocation() {
	var maplog = logGenerator(false);
	maplog("----------getDualWinPossibleLocation-----------");

	var tmpBoard = mapGv.boardPlayer1Computer.slice();
	var tmpCompMark = mapGv.SinglePlayerComputerMark;
	var tmpPlayer1Mark = mapGv.SinglePlayerPlayer1Mark;
	var arrEmptyLocs = [];
	maplog("Actual Board: ");
	maplog(mapGv.boardPlayer1Computer);

	maplog("tmpBoard: ");
	maplog(tmpBoard);

	for (var i = 0; i < tmpBoard.length; i++) {
		if (tmpBoard[i] == "empty") {
			arrEmptyLocs.push(i);
		}
	}

	maplog("All empty locs: ");
	maplog(arrEmptyLocs);

	for (var j = 0; j < arrEmptyLocs.length; j++) {
		if (isDualWinLoc(arrEmptyLocs[j])) {
			maplog("found dual win empty loc: " + arrEmptyLocs[j] + " returning...");
			return arrEmptyLocs[j];
		}
	}

	maplog("no dual win loc found, returning -1");
	return -1;

	function isDualWinLoc(locNum) {
		var maplog = logGenerator(false);
		maplog("----------isDualWinLoc-----------");
		maplog("checking location: "+locNum);

		var tmpBoardCopy = tmpBoard.slice();
		//add mark to an empty location
		tmpBoardCopy[locNum] = tmpCompMark;

		var totalPossibleWins = 0;

		if (lineIsPossibleWin([0, 1, 2])) totalPossibleWins++;
		if (lineIsPossibleWin([3, 4, 5])) totalPossibleWins++;
		if (lineIsPossibleWin([6, 7, 8])) totalPossibleWins++;
		if (lineIsPossibleWin([0, 3, 6])) totalPossibleWins++;
		if (lineIsPossibleWin([1, 4, 7])) totalPossibleWins++;
		if (lineIsPossibleWin([2, 5, 8])) totalPossibleWins++;
		if (lineIsPossibleWin([0, 4, 8])) totalPossibleWins++;
		if (lineIsPossibleWin([2, 4, 6])) totalPossibleWins++;

		if (totalPossibleWins >= 2) {
			maplog("total possible wins >= 2, return true...");
			return true;
		}
		maplog("location is not Dual Win, returning false...");
		return false;

		function lineIsPossibleWin(arrLineLocs) {
			var maplog = logGenerator(false);
			maplog("----------lineIsPossibleWin-----------");

			maplog("Current line: ");
			maplog(arrLineLocs);

			var tmpNoOfEmptyLocs = 0;
			for (var i = 0; i < arrLineLocs.length; i++) {
				if (tmpBoardCopy[arrLineLocs[i]] == "empty") {
					maplog("empty/winLoc found: " + arrLineLocs[i]);
					tmpNoOfEmptyLocs++;
				}
			}

			if (tmpNoOfEmptyLocs != 1) {
				maplog("Only 01 empty locs NOT found, return false");
				return false;
			} else {
				maplog("one empty loc found... checking other line locs has comp mark");
				var tmpCountCompMarks = 0;
				for (var j = 0; j < arrLineLocs.length; j++) {
					if (tmpBoardCopy[arrLineLocs[j]] == tmpCompMark) {
						tmpCountCompMarks++;
					}
				}

				if (tmpCountCompMarks != 2) {
					maplog("2 comp marks NOT found, return -1");
					return false;
				} else {
					maplog("2 comp marks found, return location");
					return true;
				}
			}

			maplog("line is not a possible win, returning false");
			return false;
		}
	}
}

function getAvailableDiagonalLoc() {
	var maplog = logGenerator(false);
	maplog("----------getAvailableDiagonalLoc-----------");

	var tmpLoc = -1;
	tmpLoc = checkExistingDiagonalLineForSpace();
	if (tmpLoc != -1) {
		maplog("found a loc in existing diagonal, returning: " + tmpLoc);
		return tmpLoc;
	} else {
		maplog();
	}

	return -1;

	function checkExistingDiagonalLineForSpace() {
		var maplog = logGenerator(false);
		maplog("----------checkExistingDiagonalLineForSpace-----------");

		var tmpBoard = mapGv.boardPlayer1Computer;
		var tmpCompMark = mapGv.SinglePlayerComputerMark;
		maplog("current board: ");
		maplog(tmpBoard);
		var diagonalLinesArr = [
			[0, 4, 8],
			[2, 4, 6]
		];
		for (var i = 0; i < diagonalLinesArr.length; i++) {
			var tmpLoc2 = singleDiagonalLineSpace(diagonalLinesArr[i]);
			if (tmpLoc2 != -1) {
				return tmpLoc2;
			}
		}

		return -1;


		function singleDiagonalLineSpace(arrDiagonal) {
			var maplog = logGenerator(true);
			maplog("----------singleDiagonalLineSpace-----------");

			var tmpCountMark = 0;
			var tmpCountSpace = 0;
			var tmpSpaceLoc = -1;

			for (var i = 0; i < arrDiagonal.length; i++) {
				if (tmpBoard[arrDiagonal[i]] == "empty") {
					tmpCountSpace++;
					tmpSpaceLoc = arrDiagonal[i];
				} else if (tmpBoard[arrDiagonal[i]] == tmpCompMark) {
					tmpCountMark++;
				}
			}

			if (tmpCountSpace > 0 && tmpCountMark > 0) {
				maplog("found a diagonal with a mark and a space, returning loc: " + tmpSpaceLoc);
				return tmpSpaceLoc;
			}

			maplog("diagonal does not ahve a space and mark both");
			return -1;
		}
	}
}

function getPossiblePlayer1DualWinBlockLoc(){
	var maplog = logGenerator(true);
	maplog("----------getPossiblePlayer1DualWinBlockLoc-----------");

	var tmpBoard = mapGv.boardPlayer1Computer.slice();
	// var tmpPlayer1Mark = mapGv.SinglePlayerComputerMark;
	var tmpPlayer1Mark = mapGv.SinglePlayerPlayer1Mark;
	var arrEmptyLocs = [];
	maplog("Actual Board: ");
	maplog(mapGv.boardPlayer1Computer);

	maplog("tmpBoard: ");
	maplog(tmpBoard);

	for (var i = 0; i < tmpBoard.length; i++) {
		if (tmpBoard[i] == "empty") {
			arrEmptyLocs.push(i);
		}
	}

	maplog("All empty locs: ");
	maplog(arrEmptyLocs);

	for (var j = 0; j < arrEmptyLocs.length; j++) {
		if (isDualWinLoc(arrEmptyLocs[j])) {
			maplog("found dual win empty loc: " + arrEmptyLocs[j] + " returning...");
			return arrEmptyLocs[j];
		}
	}

	maplog("no dual win loc found, returning -1");
	return -1;

	function isDualWinLoc(locNum) {
		var maplog = logGenerator(false);
		maplog("----------isDualWinLoc-----------");
		maplog("checking location: "+locNum);

		var tmpBoardCopy = tmpBoard.slice();
		//add mark to an empty location
		tmpBoardCopy[locNum] = tmpPlayer1Mark;

		var totalPossibleWins = 0;

		if (lineIsPossibleWin([0, 1, 2])) totalPossibleWins++;
		if (lineIsPossibleWin([3, 4, 5])) totalPossibleWins++;
		if (lineIsPossibleWin([6, 7, 8])) totalPossibleWins++;
		if (lineIsPossibleWin([0, 3, 6])) totalPossibleWins++;
		if (lineIsPossibleWin([1, 4, 7])) totalPossibleWins++;
		if (lineIsPossibleWin([2, 5, 8])) totalPossibleWins++;
		if (lineIsPossibleWin([0, 4, 8])) totalPossibleWins++;
		if (lineIsPossibleWin([2, 4, 6])) totalPossibleWins++;

		if (totalPossibleWins >= 2) {
			maplog("total possible wins >= 2, return true...");
			return true;
		}
		maplog("location is not Dual Win, returning false...");
		return false;

		function lineIsPossibleWin(arrLineLocs) {
			var maplog = logGenerator(false);
			maplog("----------lineIsPossibleWin-----------");

			maplog("Current line: ");
			maplog(arrLineLocs);

			var tmpNoOfEmptyLocs = 0;
			for (var i = 0; i < arrLineLocs.length; i++) {
				if (tmpBoardCopy[arrLineLocs[i]] == "empty") {
					maplog("empty/winLoc found: " + arrLineLocs[i]);
					tmpNoOfEmptyLocs++;
				}
			}

			if (tmpNoOfEmptyLocs != 1) {
				maplog("Only 01 empty locs NOT found, return false");
				return false;
			} else {
				maplog("one empty loc found... checking other line locs has comp mark");
				var tmpCountPlayer1Marks = 0;
				for (var j = 0; j < arrLineLocs.length; j++) {
					if (tmpBoardCopy[arrLineLocs[j]] == tmpPlayer1Mark) {
						tmpCountPlayer1Marks++;
					}
				}

				if (tmpCountPlayer1Marks != 2) {
					maplog("2 comp marks NOT found, return -1");
					return false;
				} else {
					maplog("2 comp marks found, return location");
					return true;
				}
			}

			maplog("line is not a possible win, returning false");
			return false;
		}
	}
}

function getAnyDiagonalAvailableSpace(){
	var maplog = logGenerator(true);
	maplog("----------getAnyDiagonalAvailableSpace-----------");
	
	var tmpBoard = mapGv.boardPlayer1Computer;
	var tmpCompMark = mapGv.SinglePlayerComputerMark;
	
	var tmpVal = mapGv.arrDiagonalLocs.shift();
	mapGv.arrDiagonalLocs.push(tmpVal);

	for (var i = 0; i < mapGv.arrDiagonalLocs.length; i++) {
		if (tmpBoard[mapGv.arrDiagonalLocs[i]]=="empty") {
			maplog("found an empty diagonal loc, return: "+mapGv.arrDiagonalLocs[i]);
			return mapGv.arrDiagonalLocs[i];
		}
	}
	
	maplog("no diagonal space empty, retrn -1");
	return -1;
}