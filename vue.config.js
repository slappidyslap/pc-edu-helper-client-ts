const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        win: {
          target: [
            'portable'
          ],
          icon: 'src/assets/logo1.png'
        }
      }
    }
  }
})
