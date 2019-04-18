import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AllActions } from '../actions/';
import updateRunningTime from '../actions/updateRunningTime';
import Application from '../components/Application';
import { ApplicationState } from '../types/applicationState';


function mapStateToProps({ runningTimeInSeconds }: ApplicationState)
{
    const result = 
    {
        runningTimeInSeconds
    };

    return result;
};

function mapDispatchToProps(dispatch: Dispatch<AllActions>) 
{
    const result = 
    {
        updateRunningTime: () =>
        {
            dispatch(updateRunningTime());
        }
    };

    return result;
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);