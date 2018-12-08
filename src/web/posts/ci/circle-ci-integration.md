# 22.2 Circle CI Integration

#### Sep 1, 2018 by Sreeram Padmanabhan

## Register
Register at circleci.com and grant it access to your repo.

## Install
Create a file called `.circleci/config.yml` and add the following code.

    version: 2
    jobs:
      build:
        docker:
          - image: circleci/node:8-browsers
        working_directory: ~/repo
        steps:
          - checkout
          - restore_cache:
              keys:
              - v1-dependencies-{{ checksum "package.json" }}
              # fallback to using the latest cache if no exact match is found
              - v1-dependencies-
          - run:
              name: Setup
              command: npm install
          - save_cache:
              paths:
                - node_modules
              key: v1-dependencies-{{ checksum "package.json" }}
          - run:
              name: Build
              command: npm run build

    workflows:
      version: 2
      build:
        jobs:
          - build

Once you push code, it triggers a Circle CI job.