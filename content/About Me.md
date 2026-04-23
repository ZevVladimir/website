---
publish: True
---
Hello! I'm Ze'ev, I grew up in New York before getting my bachelors at Maryland, spent some time studying abroad in Madrid before moving to Chicago where I live now. Like many other astronomers, I have always been fascinated by the night sky but it wasn't until the end of high school when I realized that I enjoyed the difficult problems inherent to physics and knew that was what I wanted to pursue. My main goal is to use computational tools from simulations to machine learning to not only better interpret what we observe, but to understand the complex processes and dynamics that shape the universe we see today.

Outside of research I try to explore new hobbies and new places! Right now I've been playing lots of volleyball, making mead, baking, and reading (sci-fi in particular). I also like staying involved with the community and am right now part of a local community garden where we grow and donate fresh produce to local soup kitchens, senior centers, and food pantries ([KAMII Food Justice & Sustainability](https://www.kamii.org/community/tikkun-olam/food-justice/)). I also am a tutor for [Tutoring Chicago](https://www.tutoringchicago.org/) where I am working with a high school student on Math, English, and preparation for life after high school.
<iframe id="gallery-frame" src="/static/gallery-immich.htm" width="100%" height="600px" style="border:none;display:block;"></iframe>
<script>
function sendTheme() {
  const frame = document.getElementById('gallery-frame');
  const isDark = document.documentElement.getAttribute('saved-theme') === 'dark';
  const msg = {theme: isDark ? 'dark' : 'light'};
  frame.contentWindow.postMessage(msg, '*');
}
document.getElementById('gallery-frame').addEventListener('load', sendTheme);
const observer = new MutationObserver(sendTheme);
observer.observe(document.documentElement, {attributes: true, attributeFilter: ['saved-theme']});
</script>