{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/src/modules/debug/app.js",
      "skipFiles": [
        "${workspaceFolder}/node_modules/**/*.js",
        "<node_internals/**/*.js>"
      ]
    }
  ]
}