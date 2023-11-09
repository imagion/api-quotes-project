import './style.css'

document.querySelector('#app').innerHTML = `
<div class="flex flex-col items-center w-[min(100%,40rem)] bg-white p-5 rounded-3xl [&>*+*]:mt-3">
  <q class="self-start text-xl pl-6 border-l-4 border-fuchsia-300 h-[3.5rem]">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, excepturi!
  </q>
  <p class="self-end text-xl text-neutral-400 italic">Lorem</p>
  <button class="bg-fuchsia-300 py-2 px-4 rounded-lg text-lg">
    Another Quote
  </button>
</div>
`
