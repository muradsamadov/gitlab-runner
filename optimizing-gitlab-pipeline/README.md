# Artifacts Demo
which command include .gitlab-ci.yml file? i explain it below:
```
image: node
```
this mean all stages work 'node' image. this image also install npm alla package. Only we want to execute commands usual in yaml file.
```
  tags:
    - shell
```
Above the command, you are use gitlab-runner for deploy. Maybe ou are multiple gitlab-runner and different tags. Above command tag that mean. So this deploy work this gitlab-runner for this tag. For example this deploy work only tags: shell gitlab-runner.
Above the article for optimizing gitlab. 