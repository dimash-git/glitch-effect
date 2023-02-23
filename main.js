const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

document.querySelector('#glitch').onmouseover = e => {
    let iter = 0
    const interval = setInterval(() => {
        e.target.innerText = e.target.innerText.split('')
        .map((letter, idx) => {
                if (idx < iter) {
                    return e.target.dataset.value[idx]
                }
                return letters[Math.floor(Math.random() * 26)]
            }
        ).join('')
        
        if (iter > e.target.dataset.value.length) clearInterval(interval)

        iter += 2/3
    }, 40)
}