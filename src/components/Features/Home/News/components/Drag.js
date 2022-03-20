import { RefObject } from "react";

export default function useDraggableScroll(ref, options) {
  // The initial position (scroll progress and mouse location) when the mouse is pressed down on the element
  let initialPosition = { scrollLeft: 0, mouseX: 0 };

  const mouseMoveHandler = (event) => {
    if (ref.current) {
      // Calculate differences to see how far the user has moved
      const dx = event.clientX - initialPosition.mouseX;

      console.log(event);
      console.log(ref.current.scrollLeft);
      console.log(dx);
      // Scroll the element according to those differences
      ref.current.scrollLeft = initialPosition.scrollLeft - dx;
    }
  };

  const mouseUpHandler = () => {
    // Return to cursor: grab after the user is no longer pressing

    // Remove the event listeners since it is not necessary to track the mouse position anymore
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  };

  const onMouseDown = (event) => {
    if (ref.current) {
      // Save the position at the moment the user presses down
      initialPosition = {
        scrollLeft: ref.current.scrollLeft,
        mouseX: event.clientX,
      };

      // Show a cursor: grabbing style and set user-select: none to avoid highlighting text while dragging
      ref.current.style.cursor = "grabbing";
      ref.current.style.userSelect = "none";

      // Add the event listeners that will track the mouse position for the rest of the interaction
      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler);
    }
  };

  return { onMouseDown };
}
