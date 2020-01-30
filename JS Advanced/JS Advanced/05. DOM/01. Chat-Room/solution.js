function solve() {
   const btn = document.querySelector('#send');
   const msg = document.querySelector('#chat_messages');
   const text = document.querySelector('#chat_input');

   const handleClick = () => {
      const div = document.createElement('div');
      div.textContent = text.value;
      div.classList.add('message', 'my-message');
      msg.appendChild(div);
      text.value = "";
   }

   btn.addEventListener('click', handleClick)
}