## Sync S3 bucket with Akord Vault

Sync S3 bucket with Akord vault using Akord CLI

## Install CLI
```
yarn global add @akord/akord-cli
```
or
```
npm i -g @akord/akord-cli
```

## Create Akord account

Using web app: \
https://v2.akord.com/signup

&nbsp;

Or with CLI:

`akord signup {you_email_address}`

&nbsp;


## Create Akord Vault

Here again you can use web app or run the command:\
`akord vault:create 'shiny vault'`

Copy the vault id from the output

optionally:\
`akord vault:list`

## Sync your S3 bucket with vault

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

exclude hidden files and folders (-e, --exclude-hidden):\
`akord sync s3://bucket_name akord://vault_id --exclude-hidden`