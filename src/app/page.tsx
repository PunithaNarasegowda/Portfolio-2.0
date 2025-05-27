'use client';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '@/store/counterSlice';
import { RootState } from '@/store';

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-4xl font-bold mb-6">Next.js + Redux Starter</h1>
      <p className="text-xl mb-4">Count: {count}</p>
      <div className="space-x-4">
        <button onClick={() => dispatch(increment())} className="px-4 py-2 bg-green-500 text-white rounded">Increment</button>
        <button onClick={() => dispatch(decrement())} className="px-4 py-2 bg-red-500 text-white rounded">Decrement</button>
        <button onClick={() => dispatch(reset())} className="px-4 py-2 bg-gray-600 text-white rounded">Reset</button>
      </div>
    </main>
  );
}
