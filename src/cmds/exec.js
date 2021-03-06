const shell = require("shelljs");

module.exports = (argLine) => {

    const cmd = `git ${argLine}`;
    const submoduleCmd = `git submodule foreach --recursive ${cmd}`;

    console.log(`
      Executing:
      ${submoduleCmd}
      then:
      ${cmd}
    `);

    shell.exec(submoduleCmd);
    shell.exec(cmd);
}
