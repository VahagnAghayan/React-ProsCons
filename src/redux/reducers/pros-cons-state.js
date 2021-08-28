import { uidGenerator } from '/home/vahagn/Desktop/ReactProsCons/proscons/src/helpers/uidGenerator.js';

export function inputsStateReducer(state = {
  prosState: [{ value: '', id: uidGenerator() }],
  consState: [{ value: '', id: uidGenerator() }]
}, action) {
  if (action.type === 'onchange') {
    // let prosState = [];
    //  PORCEL SPREADOV CLONE ANEL U ET VAXT RETURNNEL NAYEL YETE CHDZVI ARDEN XUY YEVO
    let mystate = { ...state };
    let prosState = mystate.prosState;
    let consState = mystate.consState;
    if (action.payload.heading === 'Pros') {
      // prosState = [...state.prosState];
      // let consState = [...state.consState];
      prosState[action.payload.index].value = action.payload.value;
      prosState[action.payload.index].id = uidGenerator();
      if (action.payload.value.length > 0 && action.payload.index === prosState.length - 1) {
        prosState[action.payload.index + 1] = {};
        prosState[action.payload.index + 1].value = '';
        prosState[action.payload.index + 1].id = uidGenerator();

      }
      if (action.payload.value.length === 0 && prosState.length > 1) {
        prosState.splice(action.payload.index, 1);
      }

      // console.log({prosState,consState});
      // return state;
      return { prosState, consState };
    }
    if (action.payload.heading === 'Cons') {
      consState[action.payload.index].value = action.payload.value;
      consState[action.payload.index].id = uidGenerator();
      if (action.payload.value.length > 0 && action.payload.index === consState.length - 1) {
        consState[action.payload.index + 1] = {};
        consState[action.payload.index + 1].value = '';
        consState[action.payload.index + 1].id = uidGenerator();

      }
      if (action.payload.value.length === 0 && consState.length > 1) {
        consState.splice(action.payload.index, 1);
      }

      // console.log({prosState,consState});
      // return state;
      return { consState, prosState };
    }
  }
  return state;
}