FROM mhart/alpine-node

COPY node.js .

EXPOSE 8080

CMD node node.js