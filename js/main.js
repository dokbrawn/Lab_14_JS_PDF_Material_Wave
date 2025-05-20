import '../css/style.css'
import javascriptLogo from '../javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import { jsPDF } from "jspdf";

document.querySelectorAll('[contenteditable]').forEach(el => {
  el.addEventListener('input', () => {
    localStorage.setItem(el.className || el.id, el.innerHTML);
  });

  const saved = localStorage.getItem(el.className || el.id);
  if (saved) el.innerHTML = saved;
});

document.getElementById('download-pdf').addEventListener('click', () => {
  const pdf = new jsPDF();
  const content = document.querySelector('.resume-container');

  pdf.html(content, {
    callback: function (doc) {
      doc.save("resume.pdf");
    },
    x: 10,
    y: 10,
    width: 180
  });
});

document.querySelectorAll('[data-ripple]').forEach(el => {
  el.addEventListener('click', function (e) {
    const circle = document.createElement('span');
    const diameter = Math.max(el.clientWidth, el.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - el.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - el.getBoundingClientRect().top - radius}px`;
    circle.classList.add('ripple');

    const ripple = el.getElementsByClassName('ripple')[0];
    if (ripple) ripple.remove();

    el.appendChild(circle);
  });
});

setupCounter(document.querySelector('#counter'))
