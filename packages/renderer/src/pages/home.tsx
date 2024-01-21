import { createSignal } from 'solid-js';
import TimeWidget from '@/components/widgets/TimeWidget';

export default function Home() {
  const [count, setCount] = createSignal(0);

  return (
    <section class="bg-gray-600 text-gray-100 p-8">
      <TimeWidget />
    </section>
  );
}
