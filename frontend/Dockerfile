# 使用輕量級的 Node.js 映像進行建構
FROM node:18-alpine AS build 

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY ./package*.json ./

# 安裝依賴
RUN npm install

# 複製應用程式code
COPY . .

# 執行建構
RUN npm run build

# 使用輕量級的 Nginx 映像來服務靜態文件
FROM nginx:alpine

# 複製建構好的文件到 Nginx 的默認目錄
COPY --from=build /app/dist /usr/share/nginx/html

# 暴露 HTTP 埠
EXPOSE 80

# 啟動 Nginx
CMD ["nginx", "-g", "daemon off;"]