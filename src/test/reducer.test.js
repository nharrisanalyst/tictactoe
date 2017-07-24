import {Map, List, fromJS} from 'immutable';

import reducer from '../reducer/reducer';


describe('reducer',()=>{

it("initializes with correct initianl state",()=>{
       const nextState = reducer();


       expect(nextState).toEqual(fromJS({
              turn:"",
              winner:false,
              board:[
                  {text:"",won:false, id:0},
                  {text:"",won:false, id:1},
                  {text:"",won:false, id:2},
                  {text:"",won:false, id:3},
                  {text:"",won:false, id:4},
                  {text:"",won:false, id:5},
                  {text:"",won:false, id:6},
                  {text:"",won:false, id:7},
                  {text:"",won:false, id:8}
                ]

       }))

  }),

  it("correctly changes the right text on the board",()=>{
          const state = fromJS({
                 turn:"O",
                 winner:false,
                 board:[
                     {text:"",won:false, id:0},
                     {text:"",won:false, id:1},
                     {text:"",won:false, id:2},
                     {text:"",won:false, id:3},
                     {text:"",won:false, id:4},
                     {text:"",won:false, id:5},
                     {text:"",won:false, id:6},
                     {text:"",won:false, id:7},
                     {text:"",won:false, id:8}
                   ]

          });



     const action = {type:"Execute_Move", index:0};

     const nextState = reducer(state,action);

     expect(nextState).toEqual(fromJS({
            turn:"X",
            winner:false,
            board:[
                {text:"O",won:false, id:0},
                {text:"",won:false, id:1},
                {text:"",won:false, id:2},
                {text:"",won:false, id:3},
                {text:"",won:false, id:4},
                {text:"",won:false, id:5},
                {text:"",won:false, id:6},
                {text:"",won:false, id:7},
                {text:"",won:false, id:8}
              ]
     }))
 })

  it("determines a winner sets winner to true and also sets winning board peice won to true",()=>{
          const state = fromJS({
                 turn:"O",
                 winner:false,
                 board:[
                     {text:"O",won:false, id:0},
                     {text:"O",won:false, id:1},
                     {text:"",won:false, id:2},
                     {text:"X",won:false, id:3},
                     {text:"X",won:false, id:4},
                     {text:"",won:false, id:5},
                     {text:"",won:false, id:6},
                     {text:"",won:false, id:7},
                     {text:"",won:false, id:8}
                   ]
          })

      const action={type:"Execute_Move", index:2};

      const nextState = reducer(state, action);

      expect(nextState).toEqual(fromJS({
             turn:"O",
             winner:true,
             board:[
                 {text:"O",won:true, id:0},
                 {text:"O",won:true, id:1},
                 {text:"O",won:true, id:2},
                 {text:"X",won:false, id:3},
                 {text:"X",won:false, id:4},
                 {text:"",won:false, id:5},
                 {text:"",won:false, id:6},
                 {text:"",won:false, id:7},
                 {text:"",won:false, id:8}
               ]
      }))
})
it(" doube checking determines a winner sets winner to true and also sets winning board peice won to true",()=>{
        const state = fromJS({
               turn:"X",
               winner:false,
               board:[
                   {text:"O", won:false, id:0},
                   {text:"O", won:false, id:1},
                   {text:"", won:false, id:2},
                   {text:"X", won:false, id:3},
                   {text:"X", won:false, id:4},
                   {text:"", won:false, id:5},
                   {text:"O", won:false, id:6},
                   {text:"", won:false, id:7},
                   {text:"", won:false, id:8}
                 ]
        })

    const action={type:"Execute_Move", index:5};

    const nextState = reducer(state, action);

    expect(nextState).toEqual(fromJS({
           turn:"X",
           winner:true,
           board:[
               {text:"O", won:false, id:0},
               {text:"O", won:false, id:1},
               {text:"", won:false, id:2},
               {text:"X", won:true, id:3},
               {text:"X", won:true, id:4},
               {text:"X", won:true, id:5},
               {text:"O", won:false, id:6},
               {text:"", won:false, id:7},
               {text:"", won:false, id:8}
             ]
    }))
})

it("returns initial state when restart action is used",()=>{
  const state = fromJS({
         turn:"X",
         winner:false,
         board:[
             {text:"O", won:false, id:0},
             {text:"O", won:false, id:1},
             {text:"", won:false, id:2},
             {text:"X", won:false, id:3},
             {text:"X", won:false, id:4},
             {text:"", won:false, id:5},
             {text:"O", won:false, id:6},
             {text:"", won:false, id:7},
             {text:"", won:false, id:8}
           ]
  })

  const action= {type:"Restart"};

  const nextState = reducer(state,action);


         expect(nextState).toEqual(fromJS({
                turn:"",
                winner:false,
                board:[
                    {text:"",won:false, id:0},
                    {text:"",won:false, id:1},
                    {text:"",won:false, id:2},
                    {text:"",won:false, id:3},
                    {text:"",won:false, id:4},
                    {text:"",won:false, id:5},
                    {text:"",won:false, id:6},
                    {text:"",won:false, id:7},
                    {text:"",won:false, id:8}
                  ]

         }))



})

it("if click on a sqaure that already has been played the state doesnt change",()=>{
     const state = fromJS({
            turn:"O",
            winner:false,
            board:[
                {text:"O",won:false, id:0},
                {text:"O",won:false, id:1},
                {text:"",won:false, id:2},
                {text:"X",won:false, id:3},
                {text:"X",won:false, id:4},
                {text:"",won:false, id:5},
                {text:"",won:false, id:6},
                {text:"",won:false, id:7},
                {text:"",won:false, id:8}
              ]
     });


     const action= {type:"Execute_Move",index:3};

     const nextState = reducer(state,action)

    expect(nextState).toEqual(fromJS({
           turn:"O",
           winner:false,
           board:[
               {text:"O",won:false, id:0},
               {text:"O",won:false, id:1},
               {text:"",won:false, id:2},
               {text:"X",won:false, id:3},
               {text:"X",won:false, id:4},
               {text:"",won:false, id:5},
               {text:"",won:false, id:6},
               {text:"",won:false, id:7},
               {text:"",won:false, id:8}
             ]
    }))
})

it('if there is already a winner more moves can not be made state is frozen',()=>{
      const state=fromJS({
             turn:"O",
             winner:true,
             board:[
                 {text:"O",won:true, id:0},
                 {text:"O",won:true, id:1},
                 {text:"O",won:true, id:2},
                 {text:"X",won:false, id:3},
                 {text:"X",won:false, id:4},
                 {text:"",won:false, id:5},
                 {text:"",won:false, id:6},
                 {text:"",won:false, id:7},
                 {text:"",won:false, id:8}
               ]
      });

      const action= {type:"Execute_Move", index:6};


      const nextState = reducer(state,action);


      expect(nextState).toEqual(fromJS({
             turn:"O",
             winner:true,
             board:[
                 {text:"O",won:true, id:0},
                 {text:"O",won:true, id:1},
                 {text:"O",won:true, id:2},
                 {text:"X",won:false, id:3},
                 {text:"X",won:false, id:4},
                 {text:"",won:false, id:5},
                 {text:"",won:false, id:6},
                 {text:"",won:false, id:7},
                 {text:"",won:false, id:8}
               ]
      }))

  })



it("correctly returns state with the currect first turn",()=>{
 const state =fromJS({
        turn:"",
        winner:false,
        board:[
            {text:"",won:false, id:0},
            {text:"",won:false, id:1},
            {text:"",won:false, id:2},
            {text:"",won:false, id:3},
            {text:"",won:false, id:4},
            {text:"",won:false, id:5},
            {text:"",won:false, id:6},
            {text:"",won:false, id:7},
            {text:"",won:false, id:8}
          ]

 });

 const action = {type: "Start_Game", turn:"X"};

 const nextState = reducer(state,action);

 expect(nextState).toEqual(fromJS({
        turn:"X",
        winner:false,
        board:[
            {text:"",won:false, id:0},
            {text:"",won:false, id:1},
            {text:"",won:false, id:2},
            {text:"",won:false, id:3},
            {text:"",won:false, id:4},
            {text:"",won:false, id:5},
            {text:"",won:false, id:6},
            {text:"",won:false, id:7},
            {text:"",won:false, id:8}
          ]

 }));


})


});
