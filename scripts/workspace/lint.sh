#!/usr/bin/env bash
echo "┏━━━ 🕵️‍️   LINT: prettier src  ━━━━━━━"
yarn lerna run lint --stream --concurrency 2
