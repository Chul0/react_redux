console.clear();

/*
Action creator
*/

// People droping off a form (Action creator)

const createPolicy = (name, amount) => {
  return { //Action (a form in our analogy)
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  };
};

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  };
};

/*
Reducers
*/
// Reducers (Departments!)
const claimHistory = (oldListOfClaims = [], action) => { 
  //Reducers don't know what the data(arguments) are when it's first called(undefined) – you need to default the values - e.g., give it an empty array, integers, etc
    if (action.type === 'CREATE_CLAIM') {
      //we care about this action (FORM!)
      return [...oldListOfClaims, action.payload]
      //joining the two elements into a new array
      //spread operator copies the whole array and store it in a new array.
      
      //we don't care the action (form!)
    }
    //we don't care the action (form!)
    return oldListOfClaims;
  };
  
const accounting = (bagOfMoney = 100, action) => {
if (action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  }
   
   return bagOfMoney;
 };

 const policies = (listOfPolicies = [], action) => {
    if(action.type === 'CREATE_POLICY') {
      return [...listOfPolicies, action.payload.name];
    }else if (action.type === 'DELETE_POLICY') {
      return listOfPolicies.filter(name => name !== action.payload.name); //reject the name that's not the same as payload.name
    }

    return listOfPolicies;
 };

//Store
const { createStore, combineReducers } = Redux;
//if you console.log(Redux) -> you'll see the library. ^this is desctructuring.

const ourDepartments = combineReducers({
  accounting: accounting,
  claimHistory: claimHistory,
  policies: policies
});
//^Combining all the reducers together

const store = createStore(ourDepartments);
//Create a store and pass in the combined reducers.

const action = createPolicy('Alex', 20);
store.dispatch(action);
//^ Store has the access to the all the reducers and all the data produced by reducers.
//dispatch(function) is the form receiver(insurance company). Dispatch takes Action(invoke actionCreator functions here) and passes it to Reducers.
//Need to pass action -> action will be delievered to reducers.

store.getState(); //You can get access to the global repository that has data(like Context)

/*
Alternative way of using store.dispatch()- no need to declare action variable
*/

store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('Jim', 30));
store.dispatch(createPolicy('Bob', 40));

store.dispatch(createClaim('Alex', 120));
store.dispatch(createClaim('Jim', 50));

store.dispatch(deletePolicy('Bob'));

store.getState();