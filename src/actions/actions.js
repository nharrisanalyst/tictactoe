


//actions
export const Execute_Move="Execute_Move";
export const Determine_Winner="Determine_Winner";
export const Restart="Restart";
export const Start_Game = "Start_Game";

//action creator

export function executeMove(index){
  return {type:Execute_Move , index:index};


}


export function determineWinner(){
  return{type: Determine_Winner};
}

export function doRestart(){
return {type:Restart};

}

export function Start(x_o){
   return {type:Start_Game, turn:x_o};
}
