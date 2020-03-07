export  const switchDisplay = (id) => {
    let elements = document.getElementsByClassName('toolbar-element');
    [].map.call(elements, el => {
        el.classList.contains(id) ? el.classList.remove('hidden') : el.classList.add('hidden');
    })}