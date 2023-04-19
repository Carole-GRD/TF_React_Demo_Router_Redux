import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
// import { progressActionBegin } from '../../store/actions/progress-v1.action';
// import { progressActionBegin } from '../../store/actions/progress-v2.action';
import { progressActionBegin } from '../../store/actions/progress-v3.action';

const ProgressBar = ( {val} ) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(progressActionBegin(val))
    }, [])

    // TODO Create design of progress bar
    return (
        <p>ProgressBar unfinish !</p>
    )
}

export default ProgressBar