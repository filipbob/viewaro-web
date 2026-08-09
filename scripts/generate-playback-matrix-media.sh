#!/bin/sh

set -eu

script_directory=$(CDPATH= cd -- "$(dirname "$0")" && pwd)
project_root=$(CDPATH= cd -- "$script_directory/.." && pwd)
output_root="$project_root/public/app-review/playback-matrix"
working_root=$(mktemp -d /tmp/viewaro-playback-matrix.XXXXXX)

cleanup() {
  rm -rf "$working_root"
}
trap cleanup EXIT HUP INT TERM

mkdir -p "$output_root/hls"
rm -f "$output_root/hls"/segment-*.ts

ffmpeg -hide_banner -loglevel error -y \
  -f lavfi -i "testsrc2=duration=24:size=640x360:rate=24" \
  -f lavfi -i "sine=frequency=440:sample_rate=48000:duration=24" \
  -f lavfi -i "sine=frequency=660:sample_rate=48000:duration=24" \
  -map 0:v:0 -map 1:a:0 -map 2:a:0 \
  -c:v libx264 -preset veryfast -crf 27 -pix_fmt yuv420p \
  -g 48 -keyint_min 48 -sc_threshold 0 \
  -c:a aac -b:a 64k -ac 2 \
  -metadata:s:a:0 language=eng -metadata:s:a:0 title="Tone 440 Hz" \
  -metadata:s:a:1 language=deu -metadata:s:a:1 title="Tone 660 Hz" \
  -fflags +bitexact \
  "$working_root/source.mkv"

ffmpeg -hide_banner -loglevel error -y \
  -i "$working_root/source.mkv" \
  -map 0:v:0 -map 0:a:0 -c copy -movflags +faststart \
  "$output_root/sample.mp4"

ffmpeg -hide_banner -loglevel error -y \
  -i "$working_root/source.mkv" \
  -map 0:v:0 -map 0:a:0 -c copy -f mpegts \
  "$output_root/sample.ts"

ffmpeg -hide_banner -loglevel error -y \
  -i "$working_root/source.mkv" \
  -i "$project_root/fixtures/playback-matrix/captions.srt" \
  -map 0:v:0 -map 0:a -map 1:0 -c copy \
  -metadata:s:s:0 language=eng -metadata:s:s:0 title="Matrix captions" \
  -fflags +bitexact \
  "$output_root/sample.mkv"

ffmpeg -hide_banner -loglevel error -y \
  -i "$working_root/source.mkv" \
  -map 0:v:0 -map 0:a:0 -c copy -f hls \
  -hls_time 4 -hls_playlist_type vod \
  -hls_segment_filename "$output_root/hls/segment-%03d.ts" \
  "$output_root/hls/master.m3u8"

echo "Generated synthetic HLS, MPEG-TS, MP4, and MKV playback fixtures."
