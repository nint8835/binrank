import { useState } from 'react';

function requiredComparisons(itemCount: number): number {
    if (itemCount < 2) {
        return 0;
    }

    return Math.log2(itemCount) + requiredComparisons(itemCount - 1);
}

function pluralize(word: string, count: number): string {
    if (count === 1) {
        return word;
    }

    return `${word}s`;
}

export function ListInput({
    setItems,
    setIsRanking,
}: {
    setItems: (items: string[]) => void;
    setIsRanking: (isRanking: boolean) => void;
}) {
    const [text, setText] = useState('');
    const items = text.split('\n').filter((line) => line.length !== 0);
    const itemCount = items.length;
    const requiredComparisonsCount = requiredComparisons(itemCount);

    return (
        <div className="flex h-full w-full flex-col items-center justify-center space-y-2 rounded-lg bg-zinc-900 bg-opacity-75 p-2">
            <h1 className="text-xl font-bold">Items</h1>
            <p className="text-sm italic text-zinc-300">Enter each item on a new line.</p>
            <textarea
                className="h-full w-full flex-1 resize-none rounded-md bg-zinc-900 p-2 outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-25"
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea>
            <span className="italic">
                {itemCount} {pluralize('item', itemCount)}, requiring approximately {requiredComparisonsCount}{' '}
                {pluralize('comparison', requiredComparisonsCount)}
            </span>
            <button
                className="rounded-lg bg-emerald-600 p-2 transition-all hover:bg-emerald-800 disabled:bg-zinc-800 disabled:text-zinc-700"
                disabled={itemCount === 0}
                onClick={() => {
                    setItems(items);
                    setIsRanking(true);
                }}
            >
                Begin Ranking
            </button>
        </div>
    );
}
