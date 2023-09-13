<template>
    <div class="rainbow-bar">
    </div>
  </template>

  <style scoped>
  .header {
    background: linear-gradient(to right, #ff0000, #ff9900, #ffff00, #33cc33, #3399ff, #9900ff); /* Rainbow gradient */
    color: white; 
    padding: 20px 0; 
    text-align: center;
  }
  /* 创建一个带有彩虹渐变的顶部横条 */
  .rainbow-bar {
    height: 10px; /* 彩虹条的高度 */
    background: linear-gradient(to right, #952432, #b12739, #d42027, #63398e, #263d82, #255da1, #2f7eb5,#38a3cb,#0a9c5c,#89bc6e,#62b16e,#328d46); /* 彩虹渐变的颜色 */
    animation: rainbow 3s linear infinite; /* 创建一个循环动画，让彩虹效果持续滚动  #00FF00 */
  }

  /* 创建彩虹动画 */
  @keyframes rainbow {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }

  /* 其他样式可以根据需要进行调整 */
  </style>
