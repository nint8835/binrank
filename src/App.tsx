import { useState } from 'react';
import { ListInput } from './ListInput';
import { RankingView } from './RankingView';

function App() {
    const [items, setItems] = useState<string[]>([]);
    const [isRanking, setIsRanking] = useState(false);

    return (
        <div className="h-full w-full p-2">
            {!isRanking && <ListInput setItems={setItems} setIsRanking={setIsRanking} />}
            {isRanking && <RankingView items={items} />}
        </div>
    );
}

export default App;
