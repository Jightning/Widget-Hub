import TimeWidget from '@/components/widgets/TimeWidget';
import DateWidget from '@/components/widgets/DateWidget';
import {
  DragDropProvider,
  DragDropSensors,
  useDragDropContext,
  createDraggable,
  createDroppable,
} from "@thisbeyond/solid-dnd";

const DnDWidgets = () => {
  return (
    <DragDropProvider>
        <TimeWidget />
        <DateWidget />
    </DragDropProvider>
  )
}

export default DnDWidgets