import React from "react";
import PropTypes from 'prop-types';
import GameSpace from './GameSpace';



const GameBoard=({turn,winner, board, playClick}) =>{

if(turn===""){ return null}

return(
<div>
<div id ='board'>

<h1>{winner==true?turn+" Has Won the Game":"It is "+turn+"'s turn" }</h1>


<div>
<GameSpace idName={"spaceZero"} key={board.getIn([0,'id'])} color={board.getIn([0,'won'])} text={board.getIn([0,'text'])} onClick={()=>playClick(board.getIn([0,'id']))} />
<GameSpace idName={"spaceOne"} key={board.getIn([1,'id'])} color={board.getIn([1,'won'])} text={board.getIn([1,'text'])} onClick={()=>playClick(board.getIn([1,'id']))} />
<GameSpace idName={"spaceTwo"} key={board.getIn([2,'id'])} color={board.getIn([2,'won'])} text={board.getIn([2,'text'])} onClick={()=>playClick(board.getIn([2,'id']))} />
</div>
<div>
<GameSpace idName={"spaceThree"} key={board.getIn([3,'id'])} color={board.getIn([3,'won'])} text={board.getIn([3,'text'])} onClick={()=>playClick(board.getIn([3,'id']))} />
<GameSpace idName={"spaceFour"} key={board.getIn([4,'id'])} color={board.getIn([4,'won'])} text={board.getIn([4,'text'])} onClick={()=>playClick(board.getIn([4,'id']))} />
<GameSpace idName={"spaceFive"} key={board.getIn([5,'id'])} color={board.getIn([5,'won'])} text={board.getIn([5,'text'])} onClick={()=>playClick(board.getIn([5,'id']))} />
</div>
<div>
<GameSpace idName={"spaceSix"} key={board.getIn([6,'id'])} color={board.getIn([6,'won'])} text={board.getIn([6,'text'])} onClick={()=>playClick(board.getIn([6,'id']))} />
<GameSpace idName={"spaceSeven"} key={board.getIn([7,'id'])} color={board.getIn([7,'won'])} text={board.getIn([7,'text'])} onClick={()=>playClick(board.getIn([7,'id']))} />
<GameSpace idName={"spaceEight"} key={board.getIn([8,'id'])} color={board.getIn([8,'won'])} text={board.getIn([8,'text'])} onClick={()=>playClick(board.getIn([8,'id']))} />
</div>
</div>
</div>

)}


GameBoard.PropTypes={
turn: PropTypes.string.isRequired,
winner: PropTypes.bool.isRequired,
playClick:PropTypes.func.isRequired
}

export default GameBoard;
