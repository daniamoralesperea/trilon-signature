const copyBtn = document.getElementById('copyBtn');
const codeTextarea = document.getElementById('signatureCode');

copyBtn.addEventListener('click', async () => {
  const label = copyBtn.querySelector('.copy-btn-label');
  const code = codeTextarea.value;

  try {
    await navigator.clipboard.writeText(code);
  } catch (err) {
    codeTextarea.focus();
    codeTextarea.select();
    document.execCommand('copy');
  }

  copyBtn.classList.add('copied');
  label.textContent = 'Copied!';

  setTimeout(() => {
    copyBtn.classList.remove('copied');
    label.textContent = 'Copy code';
  }, 2000);
});
