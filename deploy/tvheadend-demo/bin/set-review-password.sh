#!/usr/bin/env bash
# Sets or replaces the password of the App Review account (appreview).
#
# The owner runs this on the server, from a terminal:
#     ssh -t oracle-server app/tvheadend-demo/bin/set-review-password.sh
#
# The password is read without echo and passed to provision.py on stdin, so it
# never appears in a process list, a shell history or this repository. It ends
# up only in Tvheadend's own configuration under data/config.
set -euo pipefail

read -r -s -p "New password for appreview: " password
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
    docker exec -i tvheadend-demo python3 /demo/bin/provision.py --set-review-password
