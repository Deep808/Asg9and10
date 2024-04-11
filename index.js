document.addEventListener("DOMContentLoaded", function () {
  // Get reference to the canvas element and its 2D context
  const canvas = document.getElementById("main");
  const context = canvas.getContext("2d");

  // Initialize drawing variables
  let isDrawing = false;
  let currentColor = "black";
  let brushSize = 5;

  // Function to start drawing when mouse is pressed
  function startDrawing(e) {
    isDrawing = true;
    draw(e);
  }

  // Function to stop drawing when mouse is released
  function stopDrawing() {
    isDrawing = false;
    context.beginPath();
  }

  // Function to draw on the canvas
  function draw(e) {
    if (!isDrawing) return;

    // Set line properties
    context.lineWidth = brushSize;
    context.lineCap = "round";
    context.strokeStyle = currentColor;

    // Draw line to current mouse position
    context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    context.stroke();

    // Start a new path
    context.beginPath();
    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  }

  // Event listeners for mouse actions
  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", stopDrawing);
  canvas.addEventListener("mouseout", stopDrawing);

  // Function to change the drawing color
  function changeColor(color) {
    currentColor = color;
  }

  // Event listeners for color buttons
  document.getElementById("pink").addEventListener("click", function () {
    changeColor("#F50057");
  });

  document.getElementById("blue").addEventListener("click", function () {
    changeColor("#2979FF");
  });

  document.getElementById("yellow").addEventListener("click", function () {
    changeColor("#FFD600");
  });

  document.getElementById("black").addEventListener("click", function () {
    changeColor("#000000");
  });

  // Function to change the brush size
  function changeBrushSize(size) {
    brushSize = size;
    document.getElementById("brushSize").textContent = size;
  }

  // Event listener for brush size slider
  document.getElementById("slider").addEventListener("input", function () {
    changeBrushSize(this.value);
  });

  // Event listener for eraser button
  document.getElementById("erase").addEventListener("click", function () {
    // Set color to white for erasing
    changeColor("#ffffff");
    // Set brush size to larger for erasing
    changeBrushSize(15);
  });

  // Event listener for new button (clear canvas)
  document.getElementById("new").addEventListener("click", function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });
});
