# FROM nginx
# COPY conf/default.conf /etc/nginx/conf.d/default.conf
# COPY dist/forntend /usr/share/nginx/html


FROM node as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx
COPY --from=builder /app/dist/forntend /usr/share/nginx/html