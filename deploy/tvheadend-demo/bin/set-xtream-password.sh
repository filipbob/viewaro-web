#!/usr/bin/env bash
# Sets or replaces the password of the Xtream demo account (appreview).
#
# The owner runs this on the server, from a terminal:
#     ssh -t oracle-server app/tvheadend-demo/bin/set-xtream-password.sh
#
# Using the same password as the Tvheadend account keeps App Review
# Information to one sign-in. The password is read without echo and passed on
# stdin; only a PBKDF2 hash is stored, in data/xtream/account.json.
set -euo pipefail

read -r -s -p "New password for the Xtream account appreview: " password
echo
read -r -s -p "Repeat it: " repeated
echo
if [[ "$password" != "$repeated" ]]; then
    echo "The two entries differ; nothing changed." >&2
    exit 1
fi
if (( ${#password} < 12 )); then
    echo "Use at least 12 characters; nothing changed." >&2
    exit 1
fi
printf '%s' "$password" |
    docker exec -i xtream-demo python3 /demo/bin/xtream_demo.py --set-password
