import { component$ } from '@builder.io/qwik';

import Logo1 from './logo.png';



const Logo = component$(() => (
  <span class="self-center ml-2 text-2xl md:text-xl font-bold text-gray-900 whitespace-nowrap dark:text-white flex items-center">
    <img
      src={Logo1}
      class="inline-block mr-1"
      width={120}
      height={40}
      alt="Qwind Logo"/>
  </span>
));

export default Logo;

