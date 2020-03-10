function solve() {
   const tdList = document.querySelectorAll('.minimalistBlack > tbody tr td');
   Array.from(tdList).forEach(tr => tr.addEventListener('click', handleClick));

   function handleClick(e) {
      const x = e.target.parentNode;
      if (x.style.backgroundColor == 'rgb(65, 63, 94)') {
         x.removeAttribute('style');
      } else {
         Array.from(document.querySelectorAll('.minimalistBlack > tbody tr')).forEach(x => x.removeAttribute('style'));
         x.style.backgroundColor = 'rgb(65, 63, 94)';
      }
   }
}
