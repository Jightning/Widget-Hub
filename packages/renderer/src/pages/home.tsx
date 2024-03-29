import { createSignal } from 'solid-js';
import TimeWidget from '@/components/widgets/TimeWidget';
import DateWidget from '@/components/widgets/DateWidget';
import {
  DragDropProvider,
  DragDropSensors,
  useDragDropContext,
  createDraggable,
  createDroppable,
} from "@thisbeyond/solid-dnd";
import DnDWidgets from "@/DnDWidgets";

export default function Home() {
  const [count, setCount] = createSignal(0);

  return (
    <section class="bg-zinc-800 h-screen">
      <DnDWidgets />
    </section>
  );
}