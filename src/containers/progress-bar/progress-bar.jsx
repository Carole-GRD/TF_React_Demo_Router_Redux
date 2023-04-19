import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
// import { progressActionBegin } from '../../store/actions/progress-v1.action';
// import { progressActionBegin } from '../../store/actions/progress-v2.action';
import { progressActionBegin } from '../../store/actions/progress-v3.action';


const ProgressBar = ( {val} ) => {

    const { start, current, end } = useSelector(state => state.progress);

    const dispatch = useDispatch();

    const progressValue = Math.round(( (current - start) / (end - start) ) * 100);


    useEffect(() => {
        dispatch(progressActionBegin(val))
    }, [])


    return (
        <p>Progression : {progressValue} %</p>
    )
}


export default ProgressBar