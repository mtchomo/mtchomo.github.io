fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const lyricsContainer = document.getElementById('lyrics-container');
    data.forEach(stanza => {
      const div = document.createElement('div');
      div.classList.add('lyrics-stanza'); // 新しく追加

      const englishLines = stanza.english.split('\n').map(line => `<p>${line.trim().replace(/\/n/g, '<br>')}</p>`).join('');
      const japaneseLines = stanza.japanese.split('\n').map(line => `<p>${line.trim().replace(/\/n/g, '<br>')}</p>`).join('');

      div.innerHTML = `
        <div class="english">${englishLines}</div>
        <div class="japanese">${japaneseLines}</div>
      `;
      lyricsContainer.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Error fetching or processing data:", error);
  });