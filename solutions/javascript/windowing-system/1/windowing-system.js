// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();        // default 800x600
    this.position = new Position(); // default 0,0
  }

  resize(newSize) {
    // Minimum size is 1x1
    const requestedWidth = Math.max(1, newSize.width);
    const requestedHeight = Math.max(1, newSize.height);

    // Maximum size depends on current position: must still fit on screen
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    // Safety: if position is outside screen (shouldn't happen often), avoid negatives
    const safeMaxWidth = Math.max(1, maxWidth);
    const safeMaxHeight = Math.max(1, maxHeight);

    this.size.resize(
      Math.min(requestedWidth, safeMaxWidth),
      Math.min(requestedHeight, safeMaxHeight)
    );
  }

  move(newPosition) {
    // Position can't be negative
    const requestedX = Math.max(0, newPosition.x);
    const requestedY = Math.max(0, newPosition.y);

    // Maximum position depends on window size: must still fit on screen
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    // Safety: if window is larger than screen, clamp max to 0
    const safeMaxX = Math.max(0, maxX);
    const safeMaxY = Math.max(0, maxY);

    this.position.move(
      Math.min(requestedX, safeMaxX),
      Math.min(requestedY, safeMaxY)
    );
  }
}


 export function changeWindow(programWindow) {
  programWindow.move(new Position(100, 150));
  programWindow.resize(new Size(400, 300));
  return programWindow;
}