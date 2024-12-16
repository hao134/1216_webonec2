# 使用輕量級的 Node.js 映像
FROM node:18-alpine

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 安裝依賴
RUN npm install

# 複製應用程式code
COPY . .

# expose port
EXPOSE 5000

# 啟動應用程式
CMD ["npm", "start"]