

import { component$ } from "@builder.io/qwik";

// @ts-ignore
import logoSrc from "/images/logo.png?width=120&height=40&png";

export default component$(() => (
  <span class="self-center ml-2 text-2xl md:text-xl font-bold text-gray-900 whitespace-nowrap dark:text-white flex items-center">
    <img
      src={logoSrc}
      class="inline-block mr-1"
      width={120}
      height={40}
      alt="Qwind Logo"
      
    />
    
  </span>
));
