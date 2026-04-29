(function() {
  const canvas = document.getElementById('drawCanvas');
  const ctx = canvas.getContext('2d');
    
    let drawing = false;
    let currentTool = 'pen';
    let currentColor = '#000000';
    let currentSize = 5;
    
    const penBtn = document.getElementById('penBtn');
    const eraserBtn = document.getElementById('eraserBtn');
    const colorPicker = document.getElementById('colorPicker');
    const colorPreview = document.getElementById('colorPreview');
    const sizeSlider = document.getElementById('sizeSlider');
    const sizeValueSpan = document.getElementById('sizeValue');
    const clearBtn = document.getElementById('clearBtn');
    const saveBtn = document.getElementById('saveBtn');
    
    function initBackground() {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
    }
    
    function setBrush() {
        if (currentTool === 'pen') {
            ctx.strokeStyle = currentColor;
            ctx.globalCompositeOperation = 'source-over';
        } else {
            ctx.strokeStyle = '#FFFFFF';
            ctx.globalCompositeOperation = 'source-over';
        }
        ctx.lineWidth = currentSize;
    }
    
    function updateUI() {
        if (colorPreview) colorPreview.style.backgroundColor = currentColor;
        if (sizeValueSpan) sizeValueSpan.innerText = currentSize + 'px';
        if (sizeSlider) sizeSlider.value = currentSize;
        if (colorPicker) colorPicker.value = currentColor;
        
        if (penBtn && eraserBtn) {
            if (currentTool === 'pen') {
                penBtn.style.backgroundColor = '#e67e22';
                eraserBtn.style.backgroundColor = '#f39c12';
            } else {
                penBtn.style.backgroundColor = '#f39c12';
                eraserBtn.style.backgroundColor = '#e67e22';
            }
        }
        setBrush();
    }
    
    function getCoordinates(e) {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        
        let clientX, clientY;
        
        if (e.touches) {
            if (e.touches.length === 0) return null;
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }
        
        let canvasX = (clientX - rect.left) * scaleX;
        let canvasY = (clientY - rect.top) * scaleY;
        
        canvasX = Math.min(Math.max(0, canvasX), canvas.width);
        canvasY = Math.min(Math.max(0, canvasY), canvas.height);
        
        return { x: canvasX, y: canvasY };
    }
    
    function startDraw(e) {
        e.preventDefault();
        drawing = true;
        const coords = getCoordinates(e);
        if (!coords) return;
        
        setBrush();
        ctx.beginPath();
        ctx.moveTo(coords.x, coords.y);
        ctx.lineTo(coords.x + 0.5, coords.y + 0.5);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(coords.x, coords.y);
    }
    
    function drawMove(e) {
        if (!drawing) return;
        e.preventDefault();
        const coords = getCoordinates(e);
        if (!coords) return;
        
        setBrush();
        ctx.lineTo(coords.x, coords.y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(coords.x, coords.y);
    }
    
    function endDraw() {
        drawing = false;
        ctx.beginPath();
    }
    
    canvas.removeEventListener('mousedown', startDraw);
    canvas.removeEventListener('mousemove', drawMove);
    canvas.removeEventListener('mouseup', endDraw);
    canvas.removeEventListener('touchstart', startDraw);
    canvas.removeEventListener('touchmove', drawMove);
    canvas.removeEventListener('touchend', endDraw);
    
    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mousemove', drawMove);
    canvas.addEventListener('mouseup', endDraw);
    canvas.addEventListener('mouseleave', endDraw);
    
    canvas.addEventListener('touchstart', startDraw, { passive: false });
    canvas.addEventListener('touchmove', drawMove, { passive: false });
    canvas.addEventListener('touchend', endDraw);
    canvas.addEventListener('touchcancel', endDraw);
    
    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        setBrush();
    }
    
    function saveImage() {
        const link = document.createElement('a');
        link.download = 'Wek Mu.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    }
    
    if (penBtn) penBtn.addEventListener('click', () => { currentTool = 'pen'; updateUI(); });
    if (eraserBtn) eraserBtn.addEventListener('click', () => { currentTool = 'eraser'; updateUI(); });
    if (colorPicker) colorPicker.addEventListener('input', (e) => { currentColor = e.target.value; updateUI(); });
    if (sizeSlider) sizeSlider.addEventListener('input', (e) => { currentSize = parseInt(e.target.value); updateUI(); });
    if (clearBtn) clearBtn.addEventListener('click', clearCanvas);
    if (saveBtn) saveBtn.addEventListener('click', saveImage);
    
    canvas.addEventListener('touchmove', (e) => { if (drawing) e.preventDefault(); }, { passive: false });
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    
    initBackground();
    updateUI();
    
    console.log("Wes Ndang Age!");
})();