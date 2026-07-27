import './Boot.scss'
import version from 'bemuse/utils/version'

const boot = document.createElement('div')
boot.id = 'boot'
boot.className = 'Boot'
boot.innerHTML = `<div class="Bootのcontent"><div class="Bootのdj"></div><div class="Bootのtext"><div><strong>Bemuse <span class="js-version"></span></strong></div><div class="js-status">Loading page</div></div></div>`

boot
  .querySelector('.js-version')
  .appendChild(document.createTextNode(`v${version}`))

document.body.appendChild(boot)

export function hide() {
  boot.style.display = 'none'
}

export function setStatus(text) {
  boot.querySelector('.js-status').textContent = text
}
