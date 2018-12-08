# 6.3 VS Code preferences

#### Sep 1, 2018 by Sreeram Padmanabhan, Last updated on Sep 13, 2018

Given below is my VS Code preferences JSON file. Use this to give VS Code a dark theme with smaller font. Allows you to see many things at once. Or you could tweak this later.

    // Place your settings in this file to overwrite the default settings
    {
        "workbench.startupEditor": "none",
        "workbench.statusBar.visible": false,
        "workbench.activityBar.visible": true,
        "workbench.editor.enablePreview": false,
        "workbench.colorCustomizations": {
            "editor.background": "#000000",
            "terminal.background": "#121226",
            "sideBar.background": "#1c2127",
            "activityBar.background": "#000000",
        },
        "editor.fontSize": 12,
        "editor.fontFamily": "lucida sans",
        "editor.wordWrap": "off",
        "editor.multiCursorModifier": "ctrlCmd",
        "editor.renderWhitespace": "all",
        "editor.renderIndentGuides": true,
        "editor.renderControlCharacters": false,
        "editor.formatOnPaste": false,
        "editor.formatOnType": false,
        "editor.formatOnSave": false,
        "markdown.preview.lineHeight": 1.2,
        "markdown.preview.fontSize": 12,
        "files.associations": {
            "*.js": "javascriptreact",
            "*.jsx": "javascriptreact",
            "*Jenkinsfile*": "groovy"
        },
        "files.exclude": {
            "**/.git": true,
            "**/.svn": true,
            "**/.hg": true,
            "**/.DS_Store": true,
            "**/.vscode": true,
            "**/node_modules": true
        },
        "vsicons.projectDetection.disableDetect": true,
        "terminal.integrated.fontSize": 15,
        "terminal.integrated.shell.osx": "/bin/bash",
        "terminal.integrated.fontFamily": "consolas",
        "terminal.integrated.shell.linux": "/bin/bash",
        "terminal.integrated.cursorStyle": "line",
        "terminal.integrated.cursorBlinking": true,
        "terminal.integrated.confirmOnExit": true,
        "gitlens.advanced.messages": {
            "suppressCommitHasNoPreviousCommitWarning": false,
            "suppressCommitNotFoundWarning": false,
            "suppressFileNotUnderSourceControlWarning": true,
            "suppressGitVersionWarning": false,
            "suppressLineUncommittedWarning": false,
            "suppressNoRepositoryWarning": false,
            "suppressResultsExplorerNotice": false,
            "suppressShowKeyBindingsNotice": true,
            "suppressUpdateNotice": false,
            "suppressWelcomeNotice": false
        },
        "editor.wrappingIndent": "none",
        "gitlens.keymap": "alternate",
        "editor.minimap.enabled": false,
        "editor.accessibilitySupport": "off",
        "vsicons.dontShowNewVersionMessage": true,
        "extensions.autoUpdate": false,
        "update.enableWindowsBackgroundUpdates": false,
        "eslint.alwaysShowStatus": true,
        "update.channel": "none",
        "window.zoomLevel": -1,
        "workbench.iconTheme": "material-icon-theme",
    }
