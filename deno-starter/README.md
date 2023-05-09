# Deno-starter

Simple http server doing:
- CRUD on Akord vaults
- post file to Arweave over Akord API


## Steps

1. Install deno
2. Edit index.ts - put your username and password - your Akord account
3. Run this deno server with:
```
deno run --allow-net index.ts
```
4. Create the vault
```
curl --location --request POST 'http://localhost:8000/api/vaults'
```

5. List vaults
```
curl --location --request GET 'http://localhost:8000/api/vaults'
```

6. Post file to vault
```
curl --location --request POST 'http://localhost:8000/api/vaults/{vaultId}/stacks' \
--data-binary '@/path_to_the_file'
```