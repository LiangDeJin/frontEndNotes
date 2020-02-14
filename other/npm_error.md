## npm 安装报错 error network 'proxy' config is set properly.

### 1.查看 proxy，http-proxy
```
npm config get proxy
npm config get https-proxy
```

### 2.设置 proxy，http-proxy 为null
```
npm config set proxy null
npm config set https-proxy null
```

### 3.设置 registry
```
npm config set registry http://registry.cnpmjs.org/
```

