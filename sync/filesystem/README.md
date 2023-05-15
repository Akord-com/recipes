# Sync file system with Akord Vault

Sync file system with Akord vault using Akord CLI

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

## Sync file system with vault

dir with vault:\
`akord sync some/path/to/files akord://vault_id`

backwards:\
`akord sync akord://vault_id some/path/to/files`

dir with vault folder:\
`akord sync some/path/to/files akord://vault_id/folder_id`

skip approval step (-a, --auto-approve):\
`akord sync some/path/to/files akord://vault_id --auto-approve`

non recursive (-r, --recursive):\
`akord sync some/path/to/files akord://vault_id --recursive=false`

include hidden files and folders (--h, --include-hidden):\
`akord sync some/path/to/files akord://vault_id --include-hidden`

delete files from target storage that do not exist in source storage (-d, --delete):\
`akord sync some/path/to/files akord://vault_id --delete`
