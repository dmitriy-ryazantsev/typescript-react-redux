import { ApplicationState } from '../types/applicationState';
import { UpdateRunningTimeAction } from '../actions/updateRunningTime';
import { ActionType } from '../constants/actionType';


const initialState: ApplicationState = 
{
    runningTimeInSeconds: 0
};

export default function updateRunningTime(state = initialState, action: UpdateRunningTimeAction): ApplicationState 
{
    switch (action.type)
    {
        case ActionType.UpdateRunningTime:
        {
            const newState: ApplicationState = 
            {
                ...state,
                runningTimeInSeconds: state.runningTimeInSeconds + 1
            };

            return newState;
        }
        default:
        {
            return state;
        }
    }
}