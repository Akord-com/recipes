## Sync Akord vaults

Sync Akord vaults using Akord CLI

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


## Create Akord Vaults

Here again you can use web app or run the command:\
`akord vault:create 'shiny vault'`

Copy the vault id from the output

optionally:\
`akord vault:list`

## Sync vauls

dir with vault:\
`akord sync akord://vault_id_1 akord://vault_id_2`


vaults with folders:\
`akord sync akord://vault_id_1/my_folder akord://vault_id_2`
`akord sync akord://vault_id_1/my_folder akord://vault_id/other_folder`

folders in the same vault:\
`akord sync akord://vault_id/my_folder akord://vault_id/other_folder`

skip approval step (-a, --auto-approve):\
`akord sync akord://vault_id_1 akord://vault_id_2 --auto-approve`

non recursive (-r, --recursive):\
`akord sync akord://vault_id_1 akord://vault_id_2 --recursive=false`

include hidden files and folders (--h, --include-hidden):\
`akord sync akord://vault_id_1 akord://vault_id_2 --include-hidden`

delete files from target storage that do not exist in source storage (-d, --delete):\
`akord sync akord://vault_id_1 akord://vault_id_2 --delete`
