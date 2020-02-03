function create(words) {
   let section = document.querySelector('#content');

   const createDiv = (word) => {
      const div = document.createElement('div');
      const text = document.createElement('p');
      text.textContent = word;
      text.style.display = 'none';
      div.appendChild(text);
      section.appendChild(div);
   }

   words.map(word => createDiv(word));

   section.addEventListener('click', (e) => {
      e.target.children[0].style.display = 'block';
   });
}