// vue.config.js
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const config = {
  beijing: {
    pages: {
      index: {
        title: "北京项目",
        filename: "index.html",
        entry: "models/beijing/main.js",
        template: "template/beijing/index.html",
      },
    },
    devServer: {},
  },
  tianjin: {
    pages: {
      index: {
        title: "天津项目",
        filename: "index.html",
        entry: "models/tianjin/main.js",
        template: "template/tianjin/index.html",
      },
    },
    devServer: {},
  },
};

let modelName = process.env.MODEL_NAME || "";
let outputDir = modelName ? `dist/${modelName}/` : "dist/";

module.exports = {
  ...config[modelName],

  outputDir: outputDir, // 项目输出目录
  assetsDir: "static", // 静态资源目录
  publicPath: "./", // vue-cli3.3以上版本
  // baseUrl: './',           // vue-cli3.3以下版本
  filenameHashing: false, // 生产环境关闭hash
  productionSourceMap: false, // 生产环境关闭jsmap

  // 外部扩展
  configureWebpack: {
    externals: {
      vue: "Vue",
      vuex: "Vuex",
    },
  },

  // 设置别名
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@img", resolve("public/static/img"));
  },

  devServer: {}
};
