console.clear();

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

//Reducers (Departments!)
const claimHistory = (oldListOfClaims = [], action) => { //Reducers don't know what the data(arguments) are when it's first called(undefined) – you need to default the values - e.g., give it an empty array, integers, etc
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
      return bagOfMoney - action.payload.amoutOfMoneyToCollect;
    } else if (action.type === 'CRATE_POLICY') {
      return bagOfMoney + action.payload.amount;
    }
    
    return bagOfMoney;
    
  };