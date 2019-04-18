import { combineReducers } from 'redux';
import updateRunningTime from './updateRunningTime';
import { ApplicationState } from '../types/applicationState';


// const root = combineReducers<ApplicationState>(
// {
//     updateRunningTime
// });

const root = updateRunningTime;

export default root;