# Sync S3 bucket with Akord Vault

Sync S3 bucket with Akord vault using Akord CLI.

You'll find few examples of usage here...

## 1. Run bash script
Run simple script: ./sync.sh
 
```
AKORD_USER=username AKORD_PASSWORD="password" AKORD_VAULT_NAME=your_vault_name_to_create AKORD_SYNC_S3_BUCKET_URI=some_s3_uri sh sync.sh
```

## 2. Run in docker container
Usefull option to run as a task on cloud e.g. AWS Fargate

```
docker build --build-arg AKORD_USER=username --build-arg AKORD_PASSWORD="password" --build-arg AKORD_VAULT_NAME=vault_name_to_create --build-arg AKORD_SYNC_S3_BUCKET_URI=some_s3_uri .
```
```
docker run {docker build output - container id}
```


## 3. Run from local - step by step
### Install CLI
```
yarn global add @akord/akord-cli
```
or
```
npm i -g @akord/akord-cli
```

### Create Akord account

Using web app: \
https://v2.akord.com/signup

&nbsp;

Or with CLI:

`akord signup {you_email_address}`

&nbsp;


### Create Akord Vault

Here again you can use web app or run the command:\
`akord vault:create 'shiny vault'`

Copy the vault id from the output

optionally:\
`akord vault:list`

### Sync your S3 bucket with vault

bucket with vault:\
`akord sync s3://bucket_name akord://vault_id`

backwards:\
`akord sync akord://vault_id s3://bucket_name`

bucket folder with vault:\
`akord sync s3://bucket_name/path/to/folder akord://vault_id`

bucket folder with vault folder:\
`akord sync s3://bucket_name/path/to/folder akord://vault_id/folder_id`

skip approval step (-a, --auto-approve):\
`akord sync s3://bucket_name akord://vault_id --auto-approve`

non recursive (-r, --recursive):\
`akord sync s3://bucket_name akord://vault_id --recursive=false`

include hidden files and folders (--h, --include-hidden):\
`akord sync s3://bucket_name akord://vault_id --include-hidden`

delete files from target storage that do not exist in source storage (-d, --delete):\
`akord sync s3://bucket_name akord://vault_id --delete`
