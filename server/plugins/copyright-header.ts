export default defineNitroPlugin((nitroApp) => {
  const copyrightComment = `<!--
  VTuber 按鈕網站模板

  Copyright (c) 2025
  孤之界、紅柿、九条夏目

  Licensed under the Apache License, Version 2.0
-->
`;

  nitroApp.hooks.hook('render:response', (response) => {
    if (typeof response.body === 'string' && response.body.includes('<!DOCTYPE html>')) {
      response.body = copyrightComment + response.body;
    }
  });
});
