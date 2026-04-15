<template>
    <button class="close-btn">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
               <path fill="currentColor"
                   d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z" />
               </svg>
           </button>
</template>

<style lang="scss">
.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 4px;
  margin: 0;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background-color 0.15s ease;
}

.close-btn:hover {
  background-color: #f0f0f0;
}

.close-btn:focus {
  outline: 2px solid #4a90e2;
  outline-offset: 1px;
}
</style>