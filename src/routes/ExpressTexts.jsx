import { useQuery } from 'react-query';
import { expressText } from '../api';

export default function ExpressTexts() {
    const { data } = useQuery('expressTest', expressText);
    console.log(data);
    return <div>ExpressTexts</div>;
}
