import { useEffect, useState } from 'react';

export function RankingView({ items }: { items: string[] }) {
    const [pendingItems, setPendingItems] = useState(items);
    const [rankedItems, setRankedItems] = useState<string[]>([]);

    const [low, setLow] = useState(0);
    const [high, setHigh] = useState(rankedItems.length);
    const mid = Math.floor((low + high) / 2);

    useEffect(() => {
        if (low >= high) {
            const nextItem = pendingItems[0];
            setPendingItems(pendingItems.slice(1));
            setRankedItems([...rankedItems.slice(0, low), nextItem, ...rankedItems.slice(low)]);
            setLow(0);
            setHigh(rankedItems.length + 1);
        }
    }, [low, high, pendingItems, rankedItems]);

    return (
        <div className="h-full w-full">
            <div>{JSON.stringify(rankedItems, null, 2)}</div>
            <div>{JSON.stringify(pendingItems, null, 2)}</div>
            <div>
                {low}, {high}
            </div>
            <div className="flex gap-2">
                <button className="flex-1 rounded-md bg-green-400 p-2" onClick={() => setHigh(mid)}>
                    {rankedItems[mid]}
                </button>
                <button className="flex-1 rounded-md bg-blue-400 p-2" onClick={() => setLow(mid + 1)}>
                    {pendingItems[0]}
                </button>
            </div>
        </div>
    );
}
