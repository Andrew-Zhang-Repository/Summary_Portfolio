FROM node:20-alpine AS frontend-build
WORKDIR /app
COPY Portfolio/package.json Portfolio/package-lock.json ./
RUN npm ci
COPY Portfolio/ .
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]