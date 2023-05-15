if [ -z "$AKORD_USER" ]; then
    echo "ERROR: AKORD_USER is not set"
    exit 1
fi
if [ -z "$AKORD_PASSWORD" ]; then
    echo "ERROR: AKORD_PASSWORD is not set"
    exit 1
fi
if [ -z "$AKORD_VAULT_NAME" ]; then
    echo "ERROR: AKORD_VAULT_NAME is not set"
    exit 1
fi
if [ -z "$AKORD_SYNC_S3_BUCKET_URI" ]; then
    echo "ERROR: AKORD_SYNC_S3_BUCKET_URI is not set"
    exit 1
fi

echo 'Installing @akord/akord-cli...'
npm i -g @akord/akord-cli
echo 'Installed @akord/akord-cli'

echo 'Logging in...'
akord login $AKORD_USER --password="$AKORD_PASSWORD" --verbose=false
echo "Logged in: $AKORD_USER"

echo 'Creating vault...'
VAULT_ID=$(akord vault:create $AKORD_VAULT_NAME --verbose=false)
echo "Created vault: $VAULT_ID"

echo 'Syncing S3 bucket with Akord vault...'
akord sync $AKORD_SYNC_S3_BUCKET_URI akord://$VAULT_ID --auto-approve
