FROM --platform=linux/amd64 node:16-alpine

RUN apk add --update-cache \
    libsecret \
  && rm -rf /var/cache/apk/*
RUN apk add bash

ARG AKORD_USER
ENV AKORD_USER=$AKORD_USER

ARG AKORD_PASSWORD
ENV AKORD_PASSWORD=$AKORD_PASSWORD

ARG AKORD_VAULT_NAME
ENV AKORD_VAULT_NAME=$AKORD_VAULT_NAME

ARG AKORD_SYNC_S3_BUCKET_URI
ENV AKORD_SYNC_S3_BUCKET_URI=$AKORD_SYNC_S3_BUCKET_URI

COPY ./sync.sh /
RUN chmod +x /sync.sh
CMD bash -c "./sync.sh"
