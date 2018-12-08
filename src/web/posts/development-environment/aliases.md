# 6.4 My favourite aliases

#### Sep 1, 2018 by Sreeram Padmanabhan, Last updated on Sep 13, 2018

## Summary

Aliases are always helpful. They save a lot of time. Every day, at my work, I use git commands almost all them time and it can be a good thing to use git aliases. Over the past few years, they have made my job very easy.
But, it comes with its problems too. I am so used to these that I tend to use them in other machines as well. Or even when I am inside a docker container or when I ssh into a machine. That can be very annoying. Below are the list of all my git aliases.

### Common

    alias c="clear"
    alias count="ls | wc -l"
    alias edit="vi ~/.bash_profile"
    alias src="source ~/.bash_profile"
    alias l="ls -la"
    alias ip="ifconfig | grep inet | sort | grep netmask | grep broadcast | cut -d ' ' -f2"

### npm
    alias ni="npm install"
    alias ns="npm start"
    alias nrd="npm run dev"
    alias nt="npm run test"

### Vscode
    alias v="code"
    alias o="open"

### paths
    alias work="cd ~/Documents/Works"

### docker
    alias dockerstopandremove="docker stop '$(docker ps -a -q)' && docker rm '$(docker ps -a -q)'"

## Execute

    vi ~/.bash_profile
    // paste the above code and save it.
    source ~/.bash_profile
