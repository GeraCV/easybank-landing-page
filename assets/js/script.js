const showNav = (toogleId, navId, overlayId) => {
  const toogle = document.getElementById(toogleId)
  const nav = document.getElementById(navId)
  const overlay = document.getElementById(overlayId)
  if (toogle && nav && overlay) {
    toogle.addEventListener('click', () => {
      nav.classList.toggle('show-nav')
      document.body.classList.toggle('hidden')
      overlay.classList.toggle('overlay-active')
    })
  }
}
showNav('menu-toogle', 'main-nav', 'overlay')