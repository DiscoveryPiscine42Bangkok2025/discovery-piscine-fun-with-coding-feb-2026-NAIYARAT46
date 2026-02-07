// ดึงปุ่มจาก HTML
const button = document.getElementById("changeColorBtn");

// ฟังก์ชันสุ่มสี
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

// เมื่อกดปุ่ม
button.addEventListener("click", function () {
  document.body.style.backgroundColor = getRandomColor();
});
