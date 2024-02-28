<script setup lang='ts'></script>

<template>
  <div class="flex items-center w-full h-16 px-3">
    <nav>
      <ul class="flex items-center text-sm leading-tight bg-white border divide-x rounded h-9 text-neutral-500 divide-neutral-200 border-neutral-200">
        <li class="h-full">
          <a href="#" class="relative inline-flex items-center h-full px-3 ml-0 rounded-l group hover:text-neutral-900">
            <span>&lt;</span>
          </a>
        </li>
        <li class="hidden h-full md:block">
          <a href="#" class="relative inline-flex items-center h-full px-3 text-neutral-900 group bg-gray-50">
            <span>1</span>
            <span class="box-content absolute bottom-0 left-0 w-full h-px -mx-px translate-y-px border-l border-r bg-neutral-900 border-neutral-900" />
          </a>
        </li>
        <li class="hidden h-full md:block">
          <a href="#" class="relative inline-flex items-center h-full px-3 group hover:text-neutral-900">
            <span>2</span>
            <span class="box-content absolute bottom-0 w-0 h-px -mx-px duration-200 ease-out translate-y-px border-transparent bg-neutral-900 group-hover:border-l group-hover:border-r group-hover:border-neutral-900 left-1/2 group-hover:left-0 group-hover:w-full" />
          </a>
        </li>
        <li class="hidden h-full md:block">
          <a href="#" class="relative inline-flex items-center h-full px-3 group hover:text-neutral-900">
            <span>3</span>
            <span class="box-content absolute bottom-0 w-0 h-px -mx-px duration-200 ease-out translate-y-px border-transparent bg-neutral-900 group-hover:border-l group-hover:border-r group-hover:border-neutral-900 left-1/2 group-hover:left-0 group-hover:w-full" />
          </a>
        </li>
        <li class="h-full">
          <a href="#" class="relative inline-flex items-center h-full px-3 rounded-r group hover:text-neutral-900">
            <span>&gt;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
