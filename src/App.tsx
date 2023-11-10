import { useState } from 'react';
import { ListInput } from './ListInput';

function App() {
    const [pendingItems, setPendingItems] = useState<string[]>([]);
    const [isRanking, setIsRanking] = useState(false);

    return (
        <div className="h-full w-full p-2">
            {!isRanking && <ListInput setPendingItems={setPendingItems} setIsRanking={setIsRanking} />}
            {isRanking && <pre>{JSON.stringify(pendingItems, null, 2)}</pre>}
        </div>
    );
}

export default App;
